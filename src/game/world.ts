import * as THREE from "three";
import type { Interaction } from "./types";
import { createMaterials, makeCanvasTexture, type WorldMaterials } from "./materials";
import {
  addBox,
  addCylinder,
  addMesh,
  createBambooCluster,
  createChineseRoof,
  createDougongBand,
  createLatticePanel,
  createLantern,
  createPlaque,
  createStoneLantern,
  createWishTree,
} from "./modeling";

export interface BoxObstacle {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface CircleObstacle {
  x: number;
  z: number;
  radius: number;
}

interface Koi {
  group: THREE.Group;
  radiusX: number;
  radiusZ: number;
  speed: number;
  phase: number;
}

interface SmokeParticle {
  sprite: THREE.Sprite;
  offset: number;
  drift: number;
}

interface LanternLight {
  light: THREE.PointLight;
  base: number;
  phase: number;
}

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

const random = seededRandom(20261124);

export class WishWorld {
  readonly root = new THREE.Group();
  readonly interactions: Interaction[] = [];
  readonly obstacles: BoxObstacle[] = [];
  readonly circles: CircleObstacle[] = [];

  private readonly materials: WorldMaterials;
  private readonly markers = new Map<string, THREE.Group>();
  private readonly smoke: SmokeParticle[] = [];
  private readonly koi: Koi[] = [];
  private readonly lanterns: LanternLight[] = [];
  private readonly dust: THREE.Points | null;
  private readonly treeSway: THREE.Group;
  private highlightedId: string | null = null;

  constructor() {
    this.root.name = "WishCourtyardWorld";
    this.materials = createMaterials();
    this.createGround();
    this.createBoundaryWalls();
    this.createGate();
    this.createMainHall();
    this.createWingHall(-1, "财神民俗展陈", "财");
    this.createWingHall(1, "还愿堂", "愿");
    const tree = this.createWishTreeLandscape();
    this.treeSway = tree;
    this.createPond();
    this.createCenser();
    this.createCourtyardDetails();
    this.dust = this.createDust();
    this.createInteractionMarkers();
  }

  getGroundHeight(x: number, z: number) {
    if (z >= -30 && z <= -13 && Math.abs(x) <= 13.1) {
      return 1.15;
    }
    if (z > -13 && z < -8.35 && Math.abs(x) <= 6.3) {
      return ((z + 8.35) / -4.65) * 1.15;
    }
    if (z >= 28.8 && z <= 32.5 && Math.abs(x) < 9.3) {
      return 0.28;
    }
    return 0;
  }

  setHighlighted(id: string | null) {
    this.highlightedId = id;
    for (const [markerId, marker] of this.markers) {
      marker.userData.highlighted = markerId === id;
    }
  }

  update(time: number) {
    const water = this.root.getObjectByName("PondWater") as THREE.Mesh | undefined;
    if (water && water.material instanceof THREE.MeshPhysicalMaterial) {
      const bump = water.material.bumpMap;
      if (bump) {
        bump.offset.x = time * 0.008;
        bump.offset.y = time * 0.005;
      }
      water.position.y = 0.135 + Math.sin(time * 0.8) * 0.006;
    }

    this.koi.forEach((koi) => {
      const angle = time * koi.speed + koi.phase;
      koi.group.position.set(
        Math.cos(angle) * koi.radiusX,
        0.17 + Math.sin(time * 1.7 + koi.phase) * 0.025,
        Math.sin(angle) * koi.radiusZ,
      );
      koi.group.rotation.y = -angle + Math.PI / 2;
      koi.group.rotation.z = Math.sin(time * 2.4 + koi.phase) * 0.045;
    });

    this.smoke.forEach((particle, index) => {
      const cycle = (time * 0.042 + particle.offset) % 1;
      particle.sprite.position.set(
        Math.sin(time * 0.34 + index * 0.71) * (0.08 + cycle * 0.38),
        1.82 + cycle * 4.3,
        Math.cos(time * 0.21 + index) * (0.06 + cycle * 0.3),
      );
      const opacity = Math.sin(cycle * Math.PI) * 0.17;
      particle.sprite.material.opacity = opacity;
      const scale = 0.35 + cycle * 1.05;
      particle.sprite.scale.set(scale, scale * 1.7, 1);
    });

    this.lanterns.forEach((entry) => {
      entry.light.intensity =
        entry.base * (0.94 + Math.sin(time * 4.2 + entry.phase) * 0.06);
    });

    this.treeSway.rotation.z = Math.sin(time * 0.45) * 0.008;
    this.treeSway.rotation.y = Math.sin(time * 0.6) * 0.018;

    if (this.dust) {
      this.dust.rotation.y = time * 0.008;
      this.dust.position.y = Math.sin(time * 0.2) * 0.15;
    }

    this.markers.forEach((marker, id) => {
      const highlighted = id === this.highlightedId;
      const pulse = 1 + Math.sin(time * 2.7) * 0.055;
      marker.scale.setScalar(highlighted ? pulse * 1.08 : 0.82);
      marker.rotation.y = time * 0.25;
      const ring = marker.getObjectByName("MarkerRing") as THREE.Mesh | undefined;
      const gem = marker.getObjectByName("MarkerGem") as THREE.Mesh | undefined;
      if (ring && ring.material instanceof THREE.MeshBasicMaterial) {
        ring.material.opacity = highlighted ? 0.82 : 0.12;
      }
      if (gem && gem.material instanceof THREE.MeshBasicMaterial) {
        gem.material.opacity = highlighted ? 0.95 : 0.2;
        gem.position.y = 1.18 + Math.sin(time * 2.2 + id.length) * 0.08;
      }
    });
  }

  dispose() {
    this.root.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
        object.geometry.dispose();
        const objectMaterials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        objectMaterials.forEach((material) => material.dispose());
      }
    });
    Object.values(this.materials).forEach((material) => {
      material.map?.dispose();
      material.bumpMap?.dispose();
      material.dispose();
    });
  }

  private createGround() {
    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: "#576052",
      roughness: 1,
    });
    const terrain = new THREE.Mesh(new THREE.PlaneGeometry(90, 100), terrainMaterial);
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.set(0, -0.12, 2);
    terrain.receiveShadow = true;
    this.root.add(terrain);

    const paving = new THREE.Mesh(new THREE.PlaneGeometry(68, 78), this.materials.stone);
    paving.rotation.x = -Math.PI / 2;
    paving.position.set(0, -0.01, 1);
    paving.receiveShadow = true;
    this.root.add(paving);

    const slabGeometry = new THREE.BoxGeometry(1, 1, 1);
    const pathSlabs = new THREE.InstancedMesh(
      slabGeometry,
      this.materials.stoneLight,
      118,
    );
    const matrix = new THREE.Matrix4();
    for (let index = 0; index < 118; index += 1) {
      const row = Math.floor(index / 2);
      const column = index % 2;
      const z = 32 - row * 0.72;
      const x = (column - 0.5) * 2.05;
      matrix.compose(
        new THREE.Vector3(x, 0.035, z),
        new THREE.Quaternion(),
        new THREE.Vector3(1.9 + random() * 0.06, 0.07, 0.62),
      );
      pathSlabs.setMatrixAt(index, matrix);
    }
    pathSlabs.receiveShadow = true;
    pathSlabs.castShadow = false;
    this.root.add(pathSlabs);

    for (const x of [-2.28, 2.28]) {
      addBox(
        this.root,
        [0.18, 0.08, 41.6],
        this.materials.stoneDark,
        [x, 0.035, 11.1],
        false,
        true,
      );
    }

    const mossMaterial = new THREE.MeshStandardMaterial({
      color: "#5b654d",
      roughness: 1,
      transparent: true,
      opacity: 0.54,
    });
    for (let index = 0; index < 36; index += 1) {
      const patch = new THREE.Mesh(
        new THREE.CircleGeometry(0.2 + random() * 0.7, 7),
        mossMaterial,
      );
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(
        (random() > 0.5 ? 1 : -1) * (5.5 + random() * 22),
        0.012,
        -5 + random() * 38,
      );
      patch.scale.y = 0.5 + random() * 0.8;
      patch.receiveShadow = true;
      this.root.add(patch);
    }

    for (const side of [-1, 1]) {
      addBox(
        this.root,
        [0.75, 0.3, 43],
        this.materials.stoneDark,
        [side * 5.35, 0.04, 10.5],
        false,
        true,
      );
      addBox(
        this.root,
        [0.38, 0.06, 43],
        this.materials.moss,
        [side * 5.35, 0.16, 10.5],
        false,
        true,
      );
    }
  }

  private createBoundaryWalls() {
    const wallHeight = 3.8;
    for (const side of [-1, 1]) {
      addBox(
        this.root,
        [0.72, wallHeight, 72],
        this.materials.plaster,
        [side * 34.2, wallHeight / 2, 0],
      );
      addBox(
        this.root,
        [1.05, 0.26, 72.3],
        this.materials.roofDark,
        [side * 34.2, wallHeight + 0.13, 0],
      );
      addBox(
        this.root,
        [0.45, 0.48, 72.3],
        this.materials.stoneDark,
        [side * 34.2, 0.22, 0],
        false,
        true,
      );
      this.obstacles.push({
        minX: side * 34.2 - 0.7,
        maxX: side * 34.2 + 0.7,
        minZ: -36,
        maxZ: 37,
      });
    }
    addBox(
      this.root,
      [68.5, wallHeight, 0.72],
      this.materials.plaster,
      [0, wallHeight / 2, -35.2],
    );
    addBox(
      this.root,
      [68.8, 0.27, 1.05],
      this.materials.roofDark,
      [0, wallHeight + 0.13, -35.2],
    );
    this.obstacles.push({ minX: -35, maxX: 35, minZ: -35.8, maxZ: -34.5 });

    for (const x of [-28, -21, -14, 14, 21, 28]) {
      addBox(
        this.root,
        [0.68, 4.5, 0.68],
        this.materials.stoneDark,
        [x, 2.25, -34.75],
      );
    }
  }

  private createGate() {
    const gate = new THREE.Group();
    gate.name = "TempleGate";
    gate.position.z = 30.6;
    this.root.add(gate);

    addBox(
      gate,
      [25, 0.32, 7.4],
      this.materials.stone,
      [0, 0.16, 0],
    );
    for (let index = 0; index < 5; index += 1) {
      const height = 0.28 - index * 0.045;
      addBox(
        gate,
        [11 - index * 0.22, height, 0.64],
        this.materials.stoneLight,
        [0, height / 2, 4.05 + index * 0.54],
        false,
        true,
      );
    }

    const columnXs = [-10.2, -8.1, -4.9, 4.9, 8.1, 10.2];
    for (const x of columnXs) {
      addCylinder(
        gate,
        0.29,
        0.34,
        5.1,
        12,
        this.materials.redLacquer,
        [x, 2.85, 1.8],
      );
      addCylinder(
        gate,
        0.42,
        0.46,
        0.28,
        10,
        this.materials.stoneDark,
        [x, 0.45, 1.8],
      );
    }

    for (const [minX, maxX] of [
      [-12.2, -10.2],
      [-8.1, -4.9],
      [4.9, 8.1],
      [10.2, 12.2],
    ]) {
      const width = maxX - minX;
      addBox(
        gate,
        [width, 2.9, 0.62],
        this.materials.plaster,
        [(minX + maxX) / 2, 2.1, 2.02],
      );
    }
    addBox(
      gate,
      [24.5, 2.2, 0.72],
      this.materials.plaster,
      [0, 5.2, 1.7],
    );
    addBox(
      gate,
      [24.9, 0.32, 1.1],
      this.materials.woodDark,
      [0, 4.1, 1.75],
    );
    addBox(
      gate,
      [24.9, 0.25, 0.82],
      this.materials.wood,
      [0, 6.18, 1.72],
    );

    const roof = createChineseRoof(this.materials, {
      width: 27,
      depth: 10,
      rise: 3.15,
      cornerLift: 0.78,
      ridgeLength: 18,
    });
    roof.position.y = 6.35;
    gate.add(roof);
    gate.add(createDougongBand(this.materials, 22.8, 6.12, 2.24, 21, 0.82));

    const plaque = createPlaque(this.materials, "愿庭", 3.8, 1.18);
    plaque.position.set(0, 5.15, 2.19);
    gate.add(plaque);

    for (const side of [-1, 1]) {
      const lantern = createLantern(this.materials, 1.08);
      lantern.position.set(side * 5.7, 4.6, 2.3);
      gate.add(lantern);
    }

    for (const [minX, maxX] of [
      [-12.8, -4.8],
      [4.8, 12.8],
    ]) {
      this.obstacles.push({
        minX,
        maxX,
        minZ: 30.2,
        maxZ: 33,
      });
    }
    for (const x of [-12.6, -8.7, -5.4, 5.4, 8.7, 12.6]) {
      this.circles.push({ x, z: 32.4, radius: 0.55 });
    }
  }

  private createMainHall() {
    const hall = new THREE.Group();
    hall.name = "MainHall";
    hall.position.z = -21.5;
    this.root.add(hall);

    addBox(
      hall,
      [27, 1.15, 17],
      this.materials.stone,
      [0, 0.575, 0],
    );
    addBox(
      hall,
      [27.45, 0.22, 17.45],
      this.materials.stoneDark,
      [0, 0.11, 0],
    );
    addBox(
      hall,
      [26.4, 0.12, 16.4],
      this.materials.stoneLight,
      [0, 1.18, 0],
      false,
      true,
    );

    for (let index = 0; index < 8; index += 1) {
      const height = 0.14 + index * 0.14;
      const z = 12.42 - index * 0.56;
      addBox(
        hall,
        [12.2 - index * 0.04, height, 0.61],
        index % 2 === 0 ? this.materials.stone : this.materials.stoneLight,
        [0, height / 2, z],
        false,
        true,
      );
      addBox(
        hall,
        [0.12, 1.12, 0.085],
        this.materials.gold,
        [-6.08 + index * 0.02, 0.61, z + 0.3],
        false,
        true,
      );
      addBox(
        hall,
        [0.12, 1.12, 0.085],
        this.materials.gold,
        [6.08 - index * 0.02, 0.61, z + 0.3],
        false,
        true,
      );
    }

    for (const side of [-1, 1]) {
      addBox(
        hall,
        [0.62, 1.15, 5.4],
        this.materials.stoneDark,
        [side * 6.35, 0.58, 10.8],
      );
      for (let index = 0; index < 4; index += 1) {
        addBox(
          hall,
          [0.95, 0.92, 0.42],
          this.materials.stone,
          [side * 6.35, 1.6 + index * 1.1, 10.9],
        );
      }
      addBox(
        hall,
        [0.92, 0.16, 0.56],
        this.materials.stoneLight,
        [side * 6.35, 2.12, 10.9],
      );
    }

    addBox(
      hall,
      [21.2, 0.16, 11.4],
      this.materials.woodDark,
      [0, 1.26, 1.8],
    );
    addBox(
      hall,
      [20.8, 0.08, 10.9],
      this.materials.wood,
      [0, 1.35, 1.8],
      false,
      true,
    );

    const columnXs = [-10.2, -5.7, -1.25, 1.25, 5.7, 10.2];
    for (const x of columnXs) {
      addCylinder(
        hall,
        0.27,
        0.31,
        5.75,
        14,
        this.materials.redLacquer,
        [x, 4.13, 7.4],
      );
      addCylinder(
        hall,
        0.38,
        0.42,
        0.2,
        12,
        this.materials.stoneLight,
        [x, 1.36, 7.4],
      );
      addCylinder(
        hall,
        0.32,
        0.32,
        0.14,
        12,
        this.materials.gold,
        [x, 1.52, 7.4],
      );
    }

    addBox(
      hall,
      [21.7, 0.38, 0.54],
      this.materials.woodDark,
      [0, 6.9, 7.35],
    );
    addBox(
      hall,
      [22.3, 0.24, 0.72],
      this.materials.wood,
      [0, 7.18, 7.27],
    );
    addBox(
      hall,
      [21.4, 0.2, 0.48],
      this.materials.deepRed,
      [0, 6.55, 7.32],
    );
    hall.add(createDougongBand(this.materials, 20.6, 7.27, 7.42, 19, 1.05));

    const backWall = addBox(
      hall,
      [21.4, 5.2, 0.55],
      this.materials.plaster,
      [0, 3.85, -4.8],
    );
    backWall.castShadow = true;
    for (const side of [-1, 1]) {
      addBox(
        hall,
        [0.58, 5.2, 10.2],
        this.materials.plaster,
        [side * 10.65, 3.85, 1.55],
      );
    }

    for (const x of [-7.95, -3.48, 3.48, 7.95]) {
      const panel = createLatticePanel(this.materials, {
        width: 3.35,
        height: 4.0,
        columns: 5,
        rows: 7,
      });
      panel.position.set(x, 4.25, 7.12);
      hall.add(panel);
      addBox(
        hall,
        [3.76, 0.24, 0.34],
        this.materials.woodDark,
        [x, 1.57, 7.2],
      );
      addBox(
        hall,
        [3.55, 0.16, 0.25],
        this.materials.gold,
        [x, 6.28, 7.23],
      );
    }

    const doorGroup = new THREE.Group();
    doorGroup.name = "MainHallDoors";
    for (const side of [-1, 1]) {
      const door = createLatticePanel(this.materials, {
        width: 1.66,
        height: 3.76,
        columns: 3,
        rows: 6,
        diagonal: false,
      });
      door.position.set(side * 0.87, 3.62, 0);
      door.rotation.y = side * -0.07;
      doorGroup.add(door);
      for (const studY of [2.55, 3.2, 3.85, 4.5]) {
        for (const studX of [0.32, 0.82, 1.32]) {
          const stud = new THREE.Mesh(
            new THREE.SphereGeometry(0.035, 7, 5),
            this.materials.gold,
          );
          stud.position.set(
            side > 0 ? studX : -studX,
            studY,
            0.095,
          );
          doorGroup.add(stud);
        }
      }
    }
    doorGroup.position.set(0, 1.4, 7.17);
    hall.add(doorGroup);
    addBox(
      hall,
      [4.2, 0.24, 0.45],
      this.materials.woodDark,
      [0, 1.55, 7.17],
    );

    const plaque = createPlaque(this.materials, "静心殿", 4.3, 1.22);
    plaque.position.set(0, 7.05, 7.5);
    hall.add(plaque);

    for (const x of [-7.9, -3.5, 3.5, 7.9]) {
      const lantern = createLantern(this.materials, 0.95, x === 0);
      lantern.position.set(x, 6.48, 7.8);
      hall.add(lantern);
    }
    for (const x of [-6.8, 6.8]) {
      const light = new THREE.PointLight("#ffc16f", 4.2, 9, 1.8);
      light.position.set(x, 3.8, 3.4);
      hall.add(light);
      this.lanterns.push({ light, base: 4.2, phase: random() * 8 });
    }

    this.createMainHallInterior(hall);

    const roof = createChineseRoof(this.materials, {
      width: 28.2,
      depth: 20.2,
      rise: 4.05,
      cornerLift: 0.92,
      ridgeLength: 18.5,
    });
    roof.position.y = 7.42;
    hall.add(roof);

    for (const [minX, maxX] of [
      [-13.6, -2.15],
      [2.15, 13.6],
    ]) {
      this.obstacles.push({
        minX,
        maxX,
        minZ: -14.45,
        maxZ: -13.55,
      });
    }
    for (const side of [-1, 1]) {
      this.obstacles.push({
        minX: side < 0 ? -14.2 : 10.35,
        maxX: side < 0 ? -10.35 : 14.2,
        minZ: -30.3,
        maxZ: -13.2,
      });
      this.obstacles.push({
        minX: side < 0 ? -14.2 : 6.2,
        maxX: side < 0 ? -6.2 : 14.2,
        minZ: -13.2,
        maxZ: -8.25,
      });
    }
  }

  private createMainHallInterior(hall: THREE.Group) {
    const altar = new THREE.Group();
    altar.name = "MeditationInstallation";
    altar.position.set(0, 1.24, -2.45);
    hall.add(altar);
    addBox(
      altar,
      [6.8, 0.38, 2.75],
      this.materials.woodDark,
      [0, 0.19, 0],
    );
    addBox(
      altar,
      [6.2, 0.18, 2.2],
      this.materials.redLacquer,
      [0, 0.47, 0],
    );
    addBox(
      altar,
      [4.8, 0.15, 1.7],
      this.materials.wood,
      [0, 0.63, 0],
    );

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.09, 10, 56),
      this.materials.gold,
    );
    halo.position.set(0, 3.05, -0.42);
    addMesh(altar, halo);
    const innerHalo = new THREE.Mesh(
      new THREE.TorusGeometry(1.75, 0.026, 8, 48),
      this.materials.gold,
    );
    innerHalo.position.set(0, 3.05, -0.4);
    addMesh(altar, innerHalo);

    addCylinder(
      altar,
      0.94,
      1.2,
      0.7,
      10,
      this.materials.stoneDark,
      [0, 0.98, -0.1],
    );
    const seated = new THREE.Mesh(
      new THREE.ConeGeometry(0.88, 1.85, 9),
      this.materials.bronze,
    );
    seated.position.set(0, 2.0, -0.1);
    addMesh(altar, seated);
    const head = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.36, 2),
      this.materials.bronze,
    );
    head.position.set(0, 3.12, -0.03);
    head.scale.y = 1.1;
    addMesh(altar, head);
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.13, 0.16, 0.95, 7),
        this.materials.bronze,
      );
      arm.position.set(side * 0.55, 2.28, 0.2);
      arm.rotation.z = side * 0.65;
      addMesh(altar, arm);
    }

    for (const x of [-3.6, 3.6]) {
      addCylinder(
        altar,
        0.14,
        0.17,
        1.65,
        8,
        this.materials.bronze,
        [x, 1.25, 0.2],
      );
      addCylinder(
        altar,
        0.32,
        0.25,
        0.18,
        8,
        this.materials.bronze,
        [x, 2.08, 0.2],
      );
    }

    for (const x of [-8.2, 8.2]) {
      const banner = addBox(
        hall,
        [0.78, 5.2, 0.08],
        this.materials.banner,
        [x, 3.9, -4.38],
      );
      banner.castShadow = false;
      addBox(
        hall,
        [0.48, 4.65, 0.06],
        this.materials.paper,
        [x, 3.9, -4.31],
        false,
        true,
      );
    }

    const spot = new THREE.SpotLight("#ffd493", 16, 13, Math.PI / 6, 0.62, 1.4);
    spot.position.set(0, 7.1, 4.2);
    spot.target.position.set(0, 2.2, -2.3);
    spot.castShadow = false;
    hall.add(spot, spot.target);
  }

  private createWingHall(
    side: -1 | 1,
    displayTitle: string,
    plaqueText: string,
  ) {
    const hall = new THREE.Group();
    hall.name = side < 0 ? "FortuneCultureHall" : "VowHall";
    hall.position.set(side * 26.2, 0, 1.5);
    hall.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
    this.root.add(hall);

    addBox(
      hall,
      [18.5, 0.55, 9.2],
      this.materials.stone,
      [0, 0.275, 0],
    );
    addBox(
      hall,
      [18.8, 0.16, 9.5],
      this.materials.stoneDark,
      [0, 0.08, 0],
    );
    addBox(
      hall,
      [17.7, 0.08, 8.5],
      this.materials.woodDark,
      [0, 0.6, 0],
      false,
      true,
    );

    for (const x of [-7.5, -2.5, 2.5, 7.5]) {
      addCylinder(
        hall,
        0.24,
        0.28,
        4.2,
        12,
        this.materials.redLacquer,
        [x, 2.75, 4.05],
      );
      addCylinder(
        hall,
        0.34,
        0.37,
        0.18,
        10,
        this.materials.stoneLight,
        [x, 0.67, 4.05],
      );
    }
    addBox(
      hall,
      [17.4, 0.32, 0.5],
      this.materials.woodDark,
      [0, 4.78, 4.03],
    );
    addBox(
      hall,
      [18, 0.22, 0.68],
      this.materials.wood,
      [0, 5.02, 3.98],
    );
    hall.add(createDougongBand(this.materials, 16.2, 5.1, 4.12, 15, 0.82));

    addBox(
      hall,
      [17.6, 4.2, 0.56],
      this.materials.plaster,
      [0, 2.72, -3.5],
    );
    for (const x of [-8.65, 8.65]) {
      addBox(
        hall,
        [0.55, 4.2, 7.4],
        this.materials.plaster,
        [x, 2.72, 0.15],
      );
    }
    for (const x of [-7.5, 7.5]) {
      addBox(
        hall,
        [2.1, 3.4, 0.48],
        this.materials.plaster,
        [x, 2.55, 3.9],
      );
      const lattice = createLatticePanel(this.materials, {
        width: 2.5,
        height: 3.2,
        columns: 4,
        rows: 6,
      });
      lattice.position.set(x, 2.8, 4.13);
      hall.add(lattice);
    }

    addBox(
      hall,
      [2.7, 3.65, 0.5],
      this.materials.plaster,
      [0, 2.55, 3.88],
    );
    const centralDoor = createLatticePanel(this.materials, {
      width: 2.45,
      height: 3.4,
      columns: 4,
      rows: 6,
    });
    centralDoor.position.set(0, 2.77, 4.16);
    hall.add(centralDoor);

    const plaque = createPlaque(this.materials, plaqueText, 1.15, 2.3, true);
    plaque.position.set(0, 4.18, 4.28);
    hall.add(plaque);

    const roof = createChineseRoof(this.materials, {
      width: 20.8,
      depth: 12.2,
      rise: 2.85,
      cornerLift: 0.68,
      ridgeLength: 14.2,
    });
    roof.position.y = 5.26;
    hall.add(roof);

    for (const x of [-4.2, 4.2]) {
      const lantern = createLantern(this.materials, 0.82);
      lantern.position.set(x, 4.52, 4.45);
      hall.add(lantern);
    }

    const interiorLight = new THREE.PointLight("#ffc274", 5.8, 9, 1.9);
    interiorLight.position.set(0, 3.1, 0.5);
    hall.add(interiorLight);
    this.lanterns.push({
      light: interiorLight,
      base: 5.8,
      phase: random() * 8,
    });

    const display = new THREE.Group();
    display.name = displayTitle;
    display.position.set(0, 0.66, 0.25);
    hall.add(display);
    addBox(
      display,
      [5.8, 0.84, 1.55],
      this.materials.woodDark,
      [0, 0.42, 0],
    );
    addBox(
      display,
      [5.45, 0.12, 1.25],
      this.materials.redLacquer,
      [0, 0.92, 0],
    );
    for (const x of [-4.8, 4.8]) {
      addBox(
        display,
        [2.2, 1.85, 0.95],
        this.materials.woodDark,
        [x, 1.1, 0],
      );
      for (let shelf = 0; shelf < 2; shelf += 1) {
        addBox(
          display,
          [1.95, 0.08, 0.78],
          this.materials.wood,
          [x, 0.65 + shelf * 0.64, 0.08],
        );
        for (let item = 0; item < 3; item += 1) {
          const object = new THREE.Mesh(
            item === 1
              ? new THREE.TorusGeometry(0.15, 0.035, 6, 14)
              : new THREE.CylinderGeometry(0.09, 0.12, 0.28, 8),
            item === 1 ? this.materials.gold : this.materials.bronze,
          );
          object.position.set(
            x - 0.54 + item * 0.54,
            0.86 + shelf * 0.64,
            0.13,
          );
          if (item === 1) {
            object.rotation.x = Math.PI / 2;
          }
          addMesh(display, object);
        }
      }
    }

    const goldFigure = new THREE.Group();
    goldFigure.position.set(0, 1.0, 0.1);
    addCylinder(
      goldFigure,
      0.35,
      0.56,
      1.25,
      10,
      this.materials.redLacquer,
      [0, 0.62, 0],
    );
    addCylinder(
      goldFigure,
      0.22,
      0.33,
      0.5,
      8,
      this.materials.gold,
      [0, 1.35, 0],
    );
    const figureHead = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.25, 1),
      this.materials.gold,
    );
    figureHead.position.set(0, 1.82, 0);
    addMesh(goldFigure, figureHead);
    display.add(goldFigure);

    this.obstacles.push({
      minX: side < 0 ? -32.4 : 20.6,
      maxX: side < 0 ? -20.6 : 32.4,
      minZ: -6.2,
      maxZ: 9.2,
    });
  }

  private createWishTreeLandscape() {
    const tree = createWishTree(this.materials);
    tree.root.position.set(-12.5, 0, 9.4);
    tree.root.scale.setScalar(1.08);
    this.root.add(tree.root);

    addCylinder(
      tree.root,
      2.65,
      2.95,
      0.16,
      24,
      this.materials.moss,
      [0, 0.07, 0],
    );
    for (let index = 0; index < 22; index += 1) {
      const angle = (index / 22) * Math.PI * 2;
      const stone = addBox(
        tree.root,
        [0.75 + random() * 0.32, 0.28 + random() * 0.18, 0.48],
        index % 3 === 0 ? this.materials.stoneDark : this.materials.stone,
        [Math.cos(angle) * 2.75, 0.18, Math.sin(angle) * 2.75],
      );
      stone.rotation.y = angle;
    }

    for (const [x, z, scale] of [
      [-18.2, 17.4, 0.92],
      [-22.3, 13.8, 0.82],
      [-17.1, -7.1, 0.8],
    ]) {
      const bamboo = createBambooCluster(this.materials, Math.floor(x * 31 + z * 7), 9);
      bamboo.position.set(x, 0, z);
      bamboo.scale.setScalar(scale);
      this.root.add(bamboo);
    }

    const bench = new THREE.Group();
    bench.position.set(-7.6, 0, 12.1);
    bench.rotation.y = 0.2;
    addBox(bench, [2.5, 0.18, 0.62], this.materials.wood, [0, 0.52, 0]);
    for (const x of [-0.95, 0.95]) {
      addBox(bench, [0.18, 0.5, 0.42], this.materials.stoneDark, [x, 0.25, 0]);
    }
    this.root.add(bench);

    this.circles.push({ x: -12.5, z: 9.4, radius: 2.6 });
    return tree.ribbons;
  }

  private createPond() {
    const pond = new THREE.Group();
    pond.name = "WishPond";
    pond.position.set(12.3, 0, 10.2);
    this.root.add(pond);

    const basinShape = new THREE.Shape();
    basinShape.absellipse(0, 0, 5.25, 4.15, 0, Math.PI * 2, false, 0);
    const basin = new THREE.Mesh(
      new THREE.ShapeGeometry(basinShape, 54),
      new THREE.MeshStandardMaterial({
        color: "#35403b",
        roughness: 0.98,
        side: THREE.DoubleSide,
      }),
    );
    basin.rotation.x = -Math.PI / 2;
    basin.position.y = 0.045;
    basin.receiveShadow = true;
    pond.add(basin);

    const water = new THREE.Mesh(
      new THREE.CircleGeometry(4.72, 48),
      this.materials.water,
    );
    water.name = "PondWater";
    water.rotation.x = -Math.PI / 2;
    water.scale.set(1.08, 0.83, 1);
    water.position.y = 0.135;
    water.receiveShadow = true;
    pond.add(water);

    for (let index = 0; index < 38; index += 1) {
      const angle = (index / 38) * Math.PI * 2;
      const radiusX = 5.15 + random() * 0.42;
      const radiusZ = 4.1 + random() * 0.34;
      const stone = addBox(
        pond,
        [0.65 + random() * 0.48, 0.28 + random() * 0.18, 0.52 + random() * 0.2],
        index % 4 === 0 ? this.materials.stoneDark : this.materials.stone,
        [Math.cos(angle) * radiusX, 0.16, Math.sin(angle) * radiusZ],
      );
      stone.rotation.y = -angle;
    }

    for (const [x, z, scale] of [
      [-3.8, -1.2, 1],
      [3.6, 1.5, 0.85],
      [1.4, -2.7, 0.72],
    ]) {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.65 * scale, 0),
        this.materials.stoneDark,
      );
      rock.scale.set(1.2, 0.65, 1);
      rock.position.set(x, 0.2, z);
      addMesh(pond, rock);
      const moss = new THREE.Mesh(
        new THREE.SphereGeometry(0.46 * scale, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2),
        this.materials.moss,
      );
      moss.position.set(x, 0.52 * scale, z);
      moss.scale.set(1.15, 0.28, 0.9);
      pond.add(moss);
    }

    const koiMaterial = new THREE.MeshStandardMaterial({
      color: "#c76f35",
      roughness: 0.58,
      metalness: 0.04,
    });
    const koiAccent = new THREE.MeshStandardMaterial({
      color: "#e5d8bb",
      roughness: 0.7,
    });
    for (let index = 0; index < 6; index += 1) {
      const fish = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 9, 6), koiMaterial);
      body.scale.set(1.65, 0.52, 0.62);
      addMesh(fish, body);
      const tail = new THREE.Mesh(
        new THREE.ConeGeometry(0.13, 0.28, 5),
        index % 2 === 0 ? koiAccent : koiMaterial,
      );
      tail.position.x = -0.34;
      tail.rotation.z = Math.PI / 2;
      addMesh(fish, tail);
      for (const side of [-1, 1]) {
        const fin = new THREE.Mesh(
          new THREE.ConeGeometry(0.07, 0.18, 4),
          koiAccent,
        );
        fin.position.set(0.02, -0.01, side * 0.14);
        fin.rotation.z = side * 0.6;
        addMesh(fish, fin);
      }
      fish.position.set(0, 0.17, 0);
      pond.add(fish);
      this.koi.push({
        group: fish,
        radiusX: 1.0 + random() * 2.55,
        radiusZ: 0.65 + random() * 1.65,
        speed: 0.11 + random() * 0.12,
        phase: random() * Math.PI * 2,
      });
    }

    const padMaterial = new THREE.MeshStandardMaterial({
      color: "#4f704e",
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const lotusMaterial = new THREE.MeshStandardMaterial({
      color: "#b77c78",
      roughness: 0.72,
    });
    for (let index = 0; index < 13; index += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 1.2 + random() * 2.6;
      const pad = new THREE.Mesh(new THREE.CircleGeometry(0.28 + random() * 0.3, 9), padMaterial);
      pad.rotation.x = -Math.PI / 2;
      pad.position.set(
        Math.cos(angle) * radius,
        0.165,
        Math.sin(angle) * radius * 0.7,
      );
      pond.add(pad);
      if (index % 4 === 0) {
        const lotus = new THREE.Mesh(
          new THREE.ConeGeometry(0.15, 0.22, 6),
          lotusMaterial,
        );
        lotus.position.set(pad.position.x, 0.26, pad.position.z);
        pond.add(lotus);
      }
    }

    for (const angle of [0.2, 1.8, 3.35, 4.75]) {
      const x = Math.cos(angle) * 6.05;
      const z = Math.sin(angle) * 4.95;
      const post = addBox(
        pond,
        [0.23, 0.85, 0.23],
        this.materials.stoneDark,
        [x, 0.43, z],
      );
      post.rotation.y = angle;
      addCylinder(
        pond,
        0.15,
        0.22,
        0.22,
        8,
        this.materials.stone,
        [x, 0.94, z],
      );
    }

    this.circles.push({ x: 12.3, z: 10.2, radius: 5.35 });
  }

  private createCenser() {
    const censer = new THREE.Group();
    censer.name = "CourtyardCenser";
    censer.position.set(0, 0, 2.8);
    this.root.add(censer);

    addBox(
      censer,
      [2.2, 0.24, 2.2],
      this.materials.stoneDark,
      [0, 0.12, 0],
    );
    addCylinder(censer, 0.72, 0.86, 0.42, 10, this.materials.bronze, [0, 0.37, 0]);
    addCylinder(censer, 0.82, 0.72, 0.62, 12, this.materials.bronze, [0, 0.82, 0]);
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.82, 0.075, 8, 28),
      this.materials.gold,
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.12;
    addMesh(censer, rim);
    for (const side of [-1, 1]) {
      const handle = new THREE.Mesh(
        new THREE.TorusGeometry(0.26, 0.045, 7, 22, Math.PI),
        this.materials.gold,
      );
      handle.position.set(side * 0.86, 0.83, 0);
      handle.rotation.z = side * Math.PI / 2;
      addMesh(censer, handle);
    }
    for (const x of [-0.26, 0, 0.26]) {
      const stick = addCylinder(
        censer,
        0.012,
        0.012,
        0.78,
        5,
        this.materials.deepRed,
        [x, 1.5, 0],
      );
      stick.rotation.z = x * 0.9;
      const ember = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 6, 4),
        new THREE.MeshBasicMaterial({ color: "#e09a4b" }),
      );
      ember.position.set(x + x * 0.35, 1.9, 0);
      censer.add(ember);
    }

    const smokeTexture = makeCanvasTexture(
      128,
      256,
      (context, width, height) => {
        context.clearRect(0, 0, width, height);
        const gradient = context.createRadialGradient(
          width * 0.5,
          height * 0.56,
          2,
          width * 0.5,
          height * 0.55,
          width * 0.46,
        );
        gradient.addColorStop(0, "rgba(230,232,222,0.5)");
        gradient.addColorStop(0.35, "rgba(210,216,208,0.18)");
        gradient.addColorStop(1, "rgba(203,211,204,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
      },
      1,
      1,
      8,
    );
    for (let index = 0; index < 24; index += 1) {
      const material = new THREE.SpriteMaterial({
        map: smokeTexture,
        color: "#edf0e8",
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(0, 1.9, 0);
      sprite.scale.set(0.45, 0.8, 1);
      censer.add(sprite);
      this.smoke.push({
        sprite,
        offset: index / 24,
        drift: random() * Math.PI * 2,
      });
    }
    this.circles.push({ x: 0, z: 2.8, radius: 1.25 });
  }

  private createCourtyardDetails() {
    for (const [x, z] of [
      [-8.4, -2.8],
      [8.4, -2.8],
      [-8.2, 20],
      [8.2, 20],
    ]) {
      const lantern = createStoneLantern(this.materials);
      lantern.position.set(x, 0, z);
      this.root.add(lantern);
      this.circles.push({ x, z, radius: 0.6 });
    }

    for (const side of [-1, 1]) {
      const banner = addBox(
        this.root,
        [1.2, 5.6, 0.08],
        this.materials.banner,
        [side * 11.8, 4.9, -12.95],
      );
      banner.rotation.z = side * 0.03;
      addBox(
        this.root,
        [0.78, 4.95, 0.06],
        this.materials.paper,
        [side * 11.8, 4.9, -12.89],
        false,
        true,
      );
      for (const xOffset of [-0.18, 0.18]) {
        addBox(
          this.root,
          [0.035, 3.3, 0.055],
          this.materials.deepRed,
          [side * 11.8 + xOffset, 4.9, -12.84],
          false,
          true,
        );
      }
    }

    for (const side of [-1, 1]) {
      const rack = new THREE.Group();
      rack.position.set(side * 4.9, 0, 15.5);
      addBox(rack, [0.25, 2.4, 0.25], this.materials.woodDark, [-1.05, 1.2, 0]);
      addBox(rack, [0.25, 2.4, 0.25], this.materials.woodDark, [1.05, 1.2, 0]);
      addBox(rack, [2.5, 0.16, 0.22], this.materials.wood, [0, 2.3, 0]);
      for (let index = 0; index < 5; index += 1) {
        const charm = new THREE.Mesh(
          new THREE.PlaneGeometry(0.28, 0.52),
          index % 2 === 0 ? this.materials.paper : this.materials.banner,
        );
        charm.position.set(-0.78 + index * 0.39, 1.93 - (index % 2) * 0.06, 0.02);
        charm.rotation.z = (index - 2) * 0.03;
        rack.add(charm);
      }
      this.root.add(rack);
      this.circles.push({ x: side * 4.9, z: 15.5, radius: 0.75 });
    }

    for (const [x, z, rotation] of [
      [-20.5, -19, 0.3],
      [19.4, -18.4, -0.25],
      [-18.8, 21, 1.2],
      [19.2, 21.5, -1.1],
    ]) {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.25 + random() * 0.55, 1),
        this.materials.stoneDark,
      );
      rock.scale.set(1.15, 0.58, 1.4);
      rock.position.set(x, 0.3, z);
      rock.rotation.set(0.1, rotation, 0.05);
      addMesh(this.root, rock);
      this.circles.push({ x, z, radius: 1.5 });
    }
  }

  private createDust() {
    const count = 320;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (random() - 0.5) * 44;
      positions[index * 3 + 1] = 1 + random() * 11;
      positions[index * 3 + 2] = -28 + random() * 58;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: "#e6dfc2",
      size: 0.045,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    this.root.add(points);
    return points;
  }

  private createInteractionMarkers() {
    this.interactions.push(
      {
        id: "gate",
        kind: "gate",
        title: "山门",
        detail: "回望来处，听风穿过门洞",
        position: [0, 0, 28.8],
        radius: 4.2,
      },
      {
        id: "censer",
        kind: "incense",
        title: "上香体验",
        detail: "游戏化文化演出 · 不承诺愿望结果",
        position: [0, 0, 2.8],
        radius: 3.4,
      },
      {
        id: "wish-tree",
        kind: "wish-tree",
        title: "许愿树",
        detail: "系一枚只保存在本机的愿望签",
        position: [-9.3, 0, 9.4],
        radius: 4.8,
      },
      {
        id: "pond",
        kind: "pond",
        title: "许愿池",
        detail: "记录此刻心绪，听一池水声",
        position: [7.0, 0, 10.2],
        radius: 4.2,
      },
      {
        id: "fortune",
        kind: "fortune",
        title: "财神民俗展陈",
        detail: "了解游戏化民俗展陈",
        position: [-19.1, 0, 1.5],
        radius: 4.2,
      },
      {
        id: "vow-hall",
        kind: "vow-hall",
        title: "还愿堂",
        detail: "以一段文字完成游戏中的还愿仪式",
        position: [19.1, 0, 1.5],
        radius: 4.2,
      },
      {
        id: "main-hall",
        kind: "main-hall",
        title: "静心殿",
        detail: "进入殿内，完成一段呼吸体验",
        position: [0, 0, -8.1],
        radius: 4.8,
      },
    );

    for (const interaction of this.interactions) {
      const marker = new THREE.Group();
      marker.name = `InteractionMarker-${interaction.id}`;
      marker.position.set(
        interaction.position[0],
        this.getGroundHeight(interaction.position[0], interaction.position[2]) + 0.04,
        interaction.position[2],
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.78, 0.025, 7, 36),
        new THREE.MeshBasicMaterial({
          color: "#d9bf80",
          transparent: true,
          opacity: 0.12,
          depthWrite: false,
        }),
      );
      ring.name = "MarkerRing";
      ring.rotation.x = Math.PI / 2;
      marker.add(ring);
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08, 0),
        new THREE.MeshBasicMaterial({
          color: "#e5cf91",
          transparent: true,
          opacity: 0.2,
          depthWrite: false,
        }),
      );
      gem.name = "MarkerGem";
      gem.position.y = 1.18;
      marker.add(gem);
      this.markers.set(interaction.id, marker);
      this.root.add(marker);
    }
  }
}
