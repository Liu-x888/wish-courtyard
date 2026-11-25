import * as THREE from "three";
import type { WorldMaterials } from "./materials";

const Y_AXIS = new THREE.Vector3(0, 1, 0);

const seededRandom = (seed: number) => {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let sample = value;
    sample = Math.imul(sample ^ (sample >>> 15), sample | 1);
    sample ^= sample + Math.imul(sample ^ (sample >>> 7), sample | 61);
    return ((sample ^ (sample >>> 14)) >>> 0) / 4294967296;
  };
};

export const addMesh = <T extends THREE.Object3D>(
  parent: THREE.Object3D,
  mesh: T,
  castShadow = true,
  receiveShadow = true,
) => {
  mesh.castShadow = castShadow;
  mesh.receiveShadow = receiveShadow;
  parent.add(mesh);
  return mesh;
};

export const addBox = (
  parent: THREE.Object3D,
  size: [number, number, number],
  material: THREE.Material,
  position: [number, number, number],
  castShadow = true,
  receiveShadow = true,
) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  return addMesh(parent, mesh, castShadow, receiveShadow);
};

export const addCylinder = (
  parent: THREE.Object3D,
  radiusTop: number,
  radiusBottom: number,
  height: number,
  segments: number,
  material: THREE.Material,
  position: [number, number, number],
) => {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments),
    material,
  );
  mesh.position.set(...position);
  return addMesh(parent, mesh);
};

export const addCylinderBetween = (
  parent: THREE.Object3D,
  start: THREE.Vector3,
  end: THREE.Vector3,
  radiusStart: number,
  radiusEnd: number,
  material: THREE.Material,
  segments = 7,
) => {
  const direction = end.clone().sub(start);
  const length = direction.length();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusEnd, radiusStart, length, segments),
    material,
  );
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(Y_AXIS, direction.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const smoothstep = (value: number) => value * value * (3 - 2 * value);

const createCurvedRoofPlane = (
  width: number,
  depth: number,
  rise: number,
  side: -1 | 1,
  cornerLift: number,
) => {
  const columns = 28;
  const rows = 14;
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let row = 0; row <= rows; row += 1) {
    const v = row / rows;
    for (let column = 0; column <= columns; column += 1) {
      const u = (column / columns) * 2 - 1;
      const widthFactor = 1 - v * 0.1;
      const x = u * (width / 2) * widthFactor;
      const z = side * (depth / 2) * (1 - v);
      const corner = Math.pow(Math.abs(u), 4.5) * (1 - v) * cornerLift;
      const y = smoothstep(v) * rise + corner;
      positions.push(x, y, z);
      uvs.push((u + 1) / 2, v);
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const a = row * (columns + 1) + column;
      const b = a + 1;
      const c = a + columns + 2;
      const d = a + columns + 1;
      if (side === 1) {
        indices.push(a, b, c, a, c, d);
      } else {
        indices.push(a, c, b, a, d, c);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
};

export interface RoofOptions {
  width: number;
  depth: number;
  rise: number;
  cornerLift?: number;
  ridgeLength?: number;
  showGable?: boolean;
}

export const createChineseRoof = (
  materials: WorldMaterials,
  {
    width,
    depth,
    rise,
    cornerLift = 0.58,
    ridgeLength = width * 0.74,
    showGable = true,
  }: RoofOptions,
) => {
  const group = new THREE.Group();
  group.name = "CurvedChineseRoof";
  for (const side of [-1, 1] as const) {
    const plane = new THREE.Mesh(
      createCurvedRoofPlane(width, depth, rise, side, cornerLift),
      materials.roof,
    );
    plane.castShadow = true;
    plane.receiveShadow = true;
    group.add(plane);

    const eave = addBox(
      group,
      [width + 0.26, 0.18, 0.18],
      materials.roofDark,
      [0, 0.03, side * (depth / 2 + 0.01)],
    );
    eave.rotation.x = side * 0.05;

    const tileGeometry = new THREE.CylinderGeometry(0.095, 0.095, 0.16, 8);
    const tileCount = Math.floor(width / 0.32);
    const tiles = new THREE.InstancedMesh(tileGeometry, materials.roofDark, tileCount);
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(Math.PI / 2, 0, 0),
    );
    const scale = new THREE.Vector3(1, 1, 1);
    for (let index = 0; index < tileCount; index += 1) {
      const u = tileCount === 1 ? 0 : index / (tileCount - 1);
      const x = (u - 0.5) * (width - 0.16);
      const edgeLift = Math.pow(Math.abs(u * 2 - 1), 4.5) * cornerLift;
      matrix.compose(
        new THREE.Vector3(x, edgeLift + 0.055, side * (depth / 2 + 0.08)),
        quaternion,
        scale,
      );
      tiles.setMatrixAt(index, matrix);
    }
    tiles.castShadow = true;
    tiles.receiveShadow = true;
    group.add(tiles);
  }

  const ridge = addBox(
    group,
    [ridgeLength, 0.24, 0.32],
    materials.roofDark,
    [0, rise + 0.07, 0],
  );
  ridge.castShadow = true;
  addBox(
    group,
    [ridgeLength - 0.45, 0.08, 0.43],
    materials.roof,
    [0, rise + 0.21, 0],
  );

  for (const side of [-1, 1]) {
    const x = side * (ridgeLength / 2 + 0.08);
    addBox(
      group,
      [0.22, 0.38, 0.38],
      materials.roofDark,
      [x, rise + 0.18, 0],
    );
    const finial = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.62, 6),
      materials.roofDark,
    );
    finial.position.set(x + side * 0.08, rise + 0.55, 0);
    finial.rotation.z = side * -0.24;
    addMesh(group, finial);
  }

  if (showGable) {
    const shape = new THREE.Shape();
    shape.moveTo(-depth / 2, 0);
    shape.lineTo(depth / 2, 0);
    shape.lineTo(0, rise);
    shape.closePath();
    for (const side of [-1, 1]) {
      const gable = new THREE.Mesh(
        new THREE.ShapeGeometry(shape),
        materials.plaster,
      );
      gable.rotation.y = Math.PI / 2;
      gable.position.x = side * (width / 2 - 0.5);
      addMesh(group, gable);
      addCylinderBetween(
        group,
        new THREE.Vector3(side * (width / 2 - 0.48), 0.04, -depth / 2 + 0.15),
        new THREE.Vector3(side * (width / 2 - 0.48), rise - 0.2, 0),
        0.055,
        0.055,
        materials.woodDark,
      );
      addCylinderBetween(
        group,
        new THREE.Vector3(side * (width / 2 - 0.48), 0.04, depth / 2 - 0.15),
        new THREE.Vector3(side * (width / 2 - 0.48), rise - 0.2, 0),
        0.055,
        0.055,
        materials.woodDark,
      );
    }
  }

  for (const side of [-1, 1]) {
    for (const zSide of [-1, 1]) {
      const x = side * (width / 2 - 0.04);
      const z = zSide * (depth / 2 - 0.04);
      addCylinderBetween(
        group,
        new THREE.Vector3(x, 0.02, z),
        new THREE.Vector3(
          x + side * 0.55,
          cornerLift + 0.22,
          z + zSide * 0.14,
        ),
        0.08,
        0.04,
        materials.roofDark,
      );
    }
  }

  return group;
};

export const createDougongBand = (
  materials: WorldMaterials,
  width: number,
  y: number,
  z: number,
  count: number,
  scale = 1,
) => {
  const group = new THREE.Group();
  group.name = "DougongBracketBand";
  const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blockMesh = new THREE.InstancedMesh(
    blockGeometry,
    materials.woodDark,
    count * 3,
  );
  const armMesh = new THREE.InstancedMesh(
    blockGeometry,
    materials.wood,
    count * 4,
  );
  const goldMesh = new THREE.InstancedMesh(
    blockGeometry,
    materials.gold,
    count * 2,
  );
  const matrix = new THREE.Matrix4();
  const quaternion = new THREE.Quaternion();

  let blockIndex = 0;
  let armIndex = 0;
  let goldIndex = 0;
  for (let index = 0; index < count; index += 1) {
    const u = count === 1 ? 0 : index / (count - 1);
    const x = (u - 0.5) * width;
    const lowerScale = scale * (0.92 + (index % 3) * 0.025);

    matrix.compose(
      new THREE.Vector3(x, y + 0.14 * scale, z + 0.03),
      quaternion,
      new THREE.Vector3(0.2 * lowerScale, 0.35 * lowerScale, 0.22 * lowerScale),
    );
    blockMesh.setMatrixAt(blockIndex++, matrix);

    matrix.compose(
      new THREE.Vector3(x, y + 0.36 * scale, z),
      quaternion,
      new THREE.Vector3(0.72 * lowerScale, 0.13 * lowerScale, 0.26 * lowerScale),
    );
    armMesh.setMatrixAt(armIndex++, matrix);

    matrix.compose(
      new THREE.Vector3(x, y + 0.51 * scale, z - 0.03),
      quaternion,
      new THREE.Vector3(1.04 * lowerScale, 0.11 * lowerScale, 0.24 * lowerScale),
    );
    armMesh.setMatrixAt(armIndex++, matrix);

    for (const armSide of [-1, 1]) {
      matrix.compose(
        new THREE.Vector3(
          x + armSide * 0.36 * lowerScale,
          y + 0.64 * scale,
          z - 0.05,
        ),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, armSide * 0.32)),
        new THREE.Vector3(0.66 * lowerScale, 0.1 * lowerScale, 0.19 * lowerScale),
      );
      armMesh.setMatrixAt(armIndex++, matrix);

      matrix.compose(
        new THREE.Vector3(
          x + armSide * 0.62 * lowerScale,
          y + 0.73 * scale,
          z - 0.075,
        ),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, armSide * 0.6)),
        new THREE.Vector3(0.17 * lowerScale, 0.13 * lowerScale, 0.18 * lowerScale),
      );
      goldMesh.setMatrixAt(goldIndex++, matrix);
    }

    matrix.compose(
      new THREE.Vector3(x, y + 0.81 * scale, z - 0.08),
      quaternion,
      new THREE.Vector3(0.17 * lowerScale, 0.17 * lowerScale, 0.2 * lowerScale),
    );
    blockMesh.setMatrixAt(blockIndex++, matrix);
    matrix.compose(
      new THREE.Vector3(x, y + 0.96 * scale, z - 0.1),
      quaternion,
      new THREE.Vector3(0.38 * lowerScale, 0.1 * lowerScale, 0.2 * lowerScale),
    );
    armMesh.setMatrixAt(armIndex++, matrix);
    matrix.compose(
      new THREE.Vector3(x, y + 1.07 * scale, z - 0.12),
      quaternion,
      new THREE.Vector3(0.12 * lowerScale, 0.13 * lowerScale, 0.17 * lowerScale),
    );
    blockMesh.setMatrixAt(blockIndex++, matrix);
  }

  for (const mesh of [blockMesh, armMesh, goldMesh]) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
};

export interface LatticeOptions {
  width: number;
  height: number;
  columns?: number;
  rows?: number;
  frame?: number;
  includePaper?: boolean;
  diagonal?: boolean;
}

export const createLatticePanel = (
  materials: WorldMaterials,
  {
    width,
    height,
    columns = 6,
    rows = 8,
    frame = 0.09,
    includePaper = true,
    diagonal = true,
  }: LatticeOptions,
) => {
  const group = new THREE.Group();
  group.name = "LatticePanel";

  if (includePaper) {
    const paper = new THREE.Mesh(
      new THREE.PlaneGeometry(width - 0.08, height - 0.08),
      materials.paper,
    );
    paper.position.z = -0.035;
    paper.receiveShadow = true;
    group.add(paper);
  }

  addBox(group, [width, frame, 0.1], materials.woodDark, [0, height / 2, 0]);
  addBox(group, [width, frame, 0.1], materials.woodDark, [0, -height / 2, 0]);
  addBox(group, [frame, height, 0.1], materials.woodDark, [-width / 2, 0, 0]);
  addBox(group, [frame, height, 0.1], materials.woodDark, [width / 2, 0, 0]);

  const barGeometry = new THREE.BoxGeometry(1, 1, 1);
  const barCount = columns + rows + (diagonal ? columns * 2 : 0);
  const bars = new THREE.InstancedMesh(barGeometry, materials.wood, barCount);
  const matrix = new THREE.Matrix4();
  let index = 0;

  for (let column = 1; column < columns; column += 1) {
    const x = -width / 2 + (width * column) / columns;
    matrix.compose(
      new THREE.Vector3(x, 0, 0.02),
      new THREE.Quaternion(),
      new THREE.Vector3(0.038, height - 0.1, 0.075),
    );
    bars.setMatrixAt(index++, matrix);
  }
  for (let row = 1; row < rows; row += 1) {
    const y = -height / 2 + (height * row) / rows;
    matrix.compose(
      new THREE.Vector3(0, y, 0.022),
      new THREE.Quaternion(),
      new THREE.Vector3(width - 0.1, 0.036, 0.075),
    );
    bars.setMatrixAt(index++, matrix);
  }
  if (diagonal) {
    const cellWidth = (width - 0.12) / columns;
    const cellHeight = (height - 0.12) / rows;
    const diagonalLength = Math.sqrt(cellWidth * cellWidth + cellHeight * cellHeight) * 0.74;
    const angle = Math.atan2(cellHeight, cellWidth);
    for (let column = 0; column < columns; column += 1) {
      for (const direction of [-1, 1]) {
        const x = -width / 2 + cellWidth * (column + 0.5);
        const y = 0;
        matrix.compose(
          new THREE.Vector3(x, y, 0.03),
          new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, 0, direction * angle),
          ),
          new THREE.Vector3(0.026, diagonalLength, 0.06),
        );
        bars.setMatrixAt(index++, matrix);
      }
    }
  }
  bars.count = index;
  bars.castShadow = true;
  bars.receiveShadow = true;
  group.add(bars);
  return group;
};

const createLabelTexture = (text: string, vertical = false) => {
  const canvas = document.createElement("canvas");
  canvas.width = vertical ? 256 : 768;
  canvas.height = vertical ? 768 : 256;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context unavailable");
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#56311e");
  gradient.addColorStop(0.5, "#2b2118");
  gradient.addColorStop(1, "#4b2b1b");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "#9d7e47";
  context.lineWidth = 11;
  context.strokeRect(13, 13, canvas.width - 26, canvas.height - 26);
  context.strokeStyle = "rgba(235, 211, 158, 0.35)";
  context.lineWidth = 3;
  context.strokeRect(27, 27, canvas.width - 54, canvas.height - 54);

  context.fillStyle = "#d6b878";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(0,0,0,0.5)";
  context.shadowBlur = 5;
  context.shadowOffsetY = 3;
  if (vertical) {
    context.font = '700 142px "STKaiti", "KaiTi", "Microsoft YaHei", serif';
    const characters = [...text];
    const spacing = canvas.height / (characters.length + 1);
    characters.forEach((character, index) => {
      context.fillText(character, canvas.width / 2, spacing * (index + 1));
    });
  } else {
    context.font = '700 126px "STKaiti", "KaiTi", "Microsoft YaHei", serif';
    context.fillText(text, canvas.width / 2, canvas.height / 2 + 3);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
};

export const createPlaque = (
  materials: WorldMaterials,
  text: string,
  width: number,
  height: number,
  vertical = false,
) => {
  const group = new THREE.Group();
  group.name = `Plaque-${text}`;
  addBox(
    group,
    [width + 0.18, height + 0.18, 0.14],
    materials.woodDark,
    [0, 0, -0.02],
  );
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ map: createLabelTexture(text, vertical) }),
  );
  face.position.z = 0.06;
  group.add(face);
  return group;
};

export const createLantern = (
  materials: WorldMaterials,
  scale = 1,
  withLight = false,
) => {
  const group = new THREE.Group();
  group.name = "HangingLantern";
  const cord = addCylinder(
    group,
    0.022 * scale,
    0.022 * scale,
    0.72 * scale,
    6,
    materials.woodDark,
    [0, 0.66 * scale, 0],
  );
  cord.castShadow = false;
  addCylinder(
    group,
    0.28 * scale,
    0.25 * scale,
    0.13 * scale,
    10,
    materials.woodDark,
    [0, 0.3 * scale, 0],
  );
  const lampMaterial = new THREE.MeshStandardMaterial({
    color: "#c47a36",
    emissive: "#ffb45b",
    emissiveIntensity: 0.8,
    roughness: 0.62,
  });
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25 * scale, 0.3 * scale, 0.6 * scale, 10),
    lampMaterial,
  );
  body.position.y = -0.02 * scale;
  addMesh(group, body);
  addCylinder(
    group,
    0.22 * scale,
    0.25 * scale,
    0.11 * scale,
    10,
    materials.woodDark,
    [0, -0.36 * scale, 0],
  );
  addCylinder(
    group,
    0.04 * scale,
    0.015 * scale,
    0.3 * scale,
    5,
    materials.redLacquer,
    [0, -0.54 * scale, 0],
  );
  if (withLight) {
    const light = new THREE.PointLight("#ffb561", 3.2, 5.4, 2);
    light.position.y = -0.02;
    group.add(light);
  }
  return group;
};

export const createStoneLantern = (materials: WorldMaterials) => {
  const group = new THREE.Group();
  group.name = "StoneLantern";
  addCylinder(group, 0.42, 0.5, 0.22, 8, materials.stoneDark, [0, 0.11, 0]);
  addCylinder(group, 0.17, 0.22, 1.05, 8, materials.stone, [0, 0.73, 0]);
  addBox(group, [0.62, 0.15, 0.62], materials.stone, [0, 1.32, 0]);
  addBox(group, [0.44, 0.46, 0.44], materials.stoneLight, [0, 1.6, 0]);
  addBox(group, [0.24, 0.27, 0.46], materials.black, [0, 1.58, 0]);
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(0.52, 0.38, 4),
    materials.stoneDark,
  );
  cap.rotation.y = Math.PI / 4;
  cap.position.y = 1.98;
  addMesh(group, cap);
  addCylinder(group, 0.05, 0.11, 0.28, 6, materials.stoneDark, [0, 2.28, 0]);
  return group;
};

export interface WishTreeResult {
  root: THREE.Group;
  ribbons: THREE.Group;
}

export const createWishTree = (materials: WorldMaterials): WishTreeResult => {
  const root = new THREE.Group();
  root.name = "WishTree";
  const ribbons = new THREE.Group();
  ribbons.name = "WishRibbons";
  const random = seededRandom(5201314);
  const leafPositions: THREE.Vector3[] = [];
  const ribbonPositions: THREE.Vector3[] = [];

  addCylinder(root, 0.72, 0.92, 0.38, 10, materials.stoneDark, [0, 0.19, 0]);
  addCylinder(root, 0.53, 0.7, 0.08, 10, materials.moss, [0, 0.41, 0]);

  const addBranch = (
    start: THREE.Vector3,
    direction: THREE.Vector3,
    length: number,
    radius: number,
    depth: number,
  ) => {
    const end = start.clone().add(direction.clone().normalize().multiplyScalar(length));
    addCylinderBetween(
      root,
      start,
      end,
      radius,
      Math.max(0.025, radius * 0.62),
      depth < 2 ? materials.woodDark : materials.wood,
      depth < 2 ? 9 : 6,
    );

    if (depth >= 3) {
      const clusterCount = 7 + Math.floor(random() * 7);
      for (let index = 0; index < clusterCount; index += 1) {
        leafPositions.push(
          new THREE.Vector3(
            end.x + (random() - 0.5) * 2.8,
            end.y + (random() - 0.3) * 1.8,
            end.z + (random() - 0.5) * 2.8,
          ),
        );
      }
      if (random() > 0.44) {
        ribbonPositions.push(
          new THREE.Vector3(
            end.x + (random() - 0.5) * 0.6,
            end.y - 0.15,
            end.z + (random() - 0.5) * 0.6,
          ),
        );
      }
      return;
    }

    const childCount = depth === 0 ? 4 : 2 + (random() > 0.45 ? 1 : 0);
    for (let child = 0; child < childCount; child += 1) {
      const angle = random() * Math.PI * 2;
      const spread = 0.55 + random() * 0.58;
      const outward = new THREE.Vector3(
        Math.cos(angle) * spread,
        0.55 + random() * 0.85,
        Math.sin(angle) * spread,
      ).normalize();
      const childDirection = direction
        .clone()
        .multiplyScalar(0.48)
        .add(outward.multiplyScalar(0.9))
        .normalize();
      addBranch(
        end,
        childDirection,
        length * (0.57 + random() * 0.13),
        radius * 0.62,
        depth + 1,
      );
    }
  };

  addBranch(
    new THREE.Vector3(0, 0.42, 0),
    new THREE.Vector3(0.08, 1, 0.02),
    4.2,
    0.53,
    0,
  );

  const leafGeometry = new THREE.IcosahedronGeometry(0.59, 1);
  const leaves = new THREE.InstancedMesh(
    leafGeometry,
    materials.leaf,
    leafPositions.length,
  );
  const leafMatrix = new THREE.Matrix4();
  leafPositions.forEach((position, index) => {
    const scale = 0.55 + random() * 0.75;
    leafMatrix.compose(
      position,
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(random() * Math.PI, random() * Math.PI, random() * Math.PI),
      ),
      new THREE.Vector3(scale * 1.35, scale * 0.7, scale),
    );
    leaves.setMatrixAt(index, leafMatrix);
  });
  leaves.castShadow = true;
  leaves.receiveShadow = true;
  root.add(leaves);

  const ribbonGeometry = new THREE.PlaneGeometry(0.17, 0.94);
  const ribbonMesh = new THREE.InstancedMesh(
    ribbonGeometry,
    materials.ribbon,
    ribbonPositions.length,
  );
  const ribbonMatrix = new THREE.Matrix4();
  ribbonPositions.forEach((position, index) => {
    ribbonMatrix.compose(
      position,
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0.08, random() * Math.PI, (random() - 0.5) * 0.3),
      ),
      new THREE.Vector3(0.8, 1, 0.8),
    );
    ribbonMesh.setMatrixAt(index, ribbonMatrix);
  });
  ribbonMesh.castShadow = true;
  ribbons.add(ribbonMesh);
  root.add(ribbons);

  return { root, ribbons };
};

export const createBambooCluster = (
  materials: WorldMaterials,
  seed: number,
  count = 11,
) => {
  const group = new THREE.Group();
  group.name = "BambooCluster";
  const random = seededRandom(seed);
  for (let index = 0; index < count; index += 1) {
    const x = (random() - 0.5) * 2.4;
    const z = (random() - 0.5) * 2.1;
    const height = 2.9 + random() * 3.2;
    const leanX = (random() - 0.5) * 0.28;
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.06, height, 6),
      materials.moss,
    );
    stem.position.set(x + leanX, height / 2, z);
    stem.rotation.z = leanX * 0.35;
    addMesh(group, stem);
    for (let level = 0; level < 4; level += 1) {
      const leaf = new THREE.Mesh(
        new THREE.PlaneGeometry(0.58 + random() * 0.42, 0.16),
        materials.leafLight,
      );
      leaf.position.set(
        x + leanX + (random() - 0.5) * 0.9,
        height * (0.56 + level * 0.1),
        z + (random() - 0.5) * 0.65,
      );
      leaf.rotation.set(random() * 0.6 - 0.3, random() * Math.PI, random() * 0.8 - 0.4);
      leaf.castShadow = true;
      group.add(leaf);
    }
  }
  return group;
};
