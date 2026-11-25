import * as THREE from "three";

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

type TexturePainter = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  random: () => number,
) => void;

export const makeCanvasTexture = (
  width: number,
  height: number,
  painter: TexturePainter,
  repeatX = 1,
  repeatY = 1,
  seed = 1,
) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context unavailable");
  }
  painter(context, width, height, seededRandom(seed));
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
};

const createStoneTexture = () =>
  makeCanvasTexture(
    512,
    512,
    (context, width, height, random) => {
      context.fillStyle = "#a7aaa1";
      context.fillRect(0, 0, width, height);
      const tileWidth = 128;
      const tileHeight = 96;
      for (let row = -1; row < 7; row += 1) {
        const offset = row % 2 === 0 ? 0 : tileWidth / 2;
        for (let column = -1; column < 6; column += 1) {
          const x = column * tileWidth + offset;
          const y = row * tileHeight;
          const tone = 145 + Math.floor(random() * 23);
          const warm = Math.floor(random() * 7);
          context.fillStyle = `rgb(${tone + warm}, ${tone + 3}, ${tone - 1})`;
          context.fillRect(x + 2, y + 2, tileWidth - 4, tileHeight - 4);
          context.strokeStyle = "rgba(52, 61, 57, 0.46)";
          context.lineWidth = 3;
          context.strokeRect(x, y, tileWidth, tileHeight);
          context.strokeStyle = "rgba(255, 255, 246, 0.12)";
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(x + 5, y + 5);
          context.lineTo(x + tileWidth - 7, y + 5);
          context.stroke();
        }
      }
      for (let index = 0; index < 650; index += 1) {
        const alpha = 0.02 + random() * 0.05;
        context.fillStyle = `rgba(45, 58, 48, ${alpha})`;
        context.beginPath();
        context.ellipse(
          random() * width,
          random() * height,
          1 + random() * 9,
          0.4 + random() * 2.8,
          random() * Math.PI,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    },
    5,
    6,
    9,
  );

const createPlasterTexture = () =>
  makeCanvasTexture(
    256,
    256,
    (context, width, height, random) => {
      context.fillStyle = "#d8d0bf";
      context.fillRect(0, 0, width, height);
      for (let index = 0; index < 700; index += 1) {
        const light = random() > 0.45;
        context.fillStyle = light
          ? `rgba(255,255,248,${0.018 + random() * 0.04})`
          : `rgba(74,69,58,${0.012 + random() * 0.028})`;
        context.beginPath();
        context.arc(
          random() * width,
          random() * height,
          0.8 + random() * 8,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(255,255,247,0.15)");
      gradient.addColorStop(0.55, "rgba(255,255,255,0)");
      gradient.addColorStop(1, "rgba(83,73,57,0.1)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    },
    2,
    2,
    33,
  );

const createWoodTexture = () =>
  makeCanvasTexture(
    256,
    512,
    (context, width, height, random) => {
      const gradient = context.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#47211b");
      gradient.addColorStop(0.2, "#642d24");
      gradient.addColorStop(0.48, "#79372b");
      gradient.addColorStop(0.76, "#5b291f");
      gradient.addColorStop(1, "#3d1c17");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
      for (let index = 0; index < 72; index += 1) {
        const x = random() * width;
        context.strokeStyle = `rgba(31, 12, 9, ${0.04 + random() * 0.14})`;
        context.lineWidth = 0.4 + random() * 1.8;
        context.beginPath();
        context.moveTo(x, 0);
        context.bezierCurveTo(
          x + random() * 18 - 9,
          height * 0.3,
          x + random() * 15 - 7.5,
          height * 0.7,
          x + random() * 10 - 5,
          height,
        );
        context.stroke();
      }
      for (let index = 0; index < 10; index += 1) {
        const x = random() * width;
        const y = random() * height;
        context.strokeStyle = "rgba(30, 12, 9, 0.18)";
        context.lineWidth = 2;
        context.beginPath();
        context.ellipse(x, y, 4 + random() * 8, 12 + random() * 22, 0, 0, Math.PI * 2);
        context.stroke();
      }
    },
    1,
    1,
    71,
  );

const createRoofTexture = () =>
  makeCanvasTexture(
    512,
    512,
    (context, width, height, random) => {
      context.fillStyle = "#303b3a";
      context.fillRect(0, 0, width, height);
      for (let x = 0; x < width; x += 32) {
        const rib = context.createLinearGradient(x, 0, x + 32, 0);
        rib.addColorStop(0, "rgba(17, 24, 23, 0.56)");
        rib.addColorStop(0.18, "rgba(101, 111, 105, 0.38)");
        rib.addColorStop(0.52, "rgba(67, 78, 74, 0.08)");
        rib.addColorStop(0.8, "rgba(15, 21, 20, 0.4)");
        rib.addColorStop(1, "rgba(7, 12, 11, 0.68)");
        context.fillStyle = rib;
        context.fillRect(x, 0, 32, height);
        context.strokeStyle = "rgba(8, 13, 12, 0.7)";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(x + 1, 0);
        context.lineTo(x + 1, height);
        context.stroke();
      }
      for (let y = 20; y < height; y += 42) {
        for (let x = 0; x < width; x += 32) {
          const arc = context.createRadialGradient(
            x + 16,
            y - 10,
            2,
            x + 16,
            y + 4,
            35,
          );
          arc.addColorStop(0, "rgba(151, 158, 148, 0.2)");
          arc.addColorStop(0.42, "rgba(53, 65, 61, 0.12)");
          arc.addColorStop(1, "rgba(7, 12, 11, 0.54)");
          context.fillStyle = arc;
          context.beginPath();
          context.ellipse(x + 16, y, 17, 29, 0, 0, Math.PI * 2);
          context.fill();
        }
      }
      for (let index = 0; index < 160; index += 1) {
        context.fillStyle = `rgba(171, 178, 163, ${random() * 0.025})`;
        context.fillRect(random() * width, random() * height, 2 + random() * 8, 2);
      }
    },
    5,
    4,
    5,
  );

const createPaperTexture = () =>
  makeCanvasTexture(
    128,
    256,
    (context, width, height, random) => {
      context.fillStyle = "#d8c89e";
      context.fillRect(0, 0, width, height);
      for (let index = 0; index < 90; index += 1) {
        context.strokeStyle = `rgba(106, 82, 45, ${0.025 + random() * 0.055})`;
        context.lineWidth = 0.45;
        context.beginPath();
        context.moveTo(random() * width, random() * height);
        context.lineTo(random() * width, random() * height);
        context.stroke();
      }
      const light = context.createRadialGradient(
        width * 0.5,
        height * 0.32,
        2,
        width * 0.5,
        height * 0.32,
        height * 0.7,
      );
      light.addColorStop(0, "rgba(255,248,215,0.42)");
      light.addColorStop(1, "rgba(96,72,41,0.12)");
      context.fillStyle = light;
      context.fillRect(0, 0, width, height);
    },
    1,
    1,
    19,
  );

const createWaterBumpTexture = () =>
  makeCanvasTexture(
    256,
    256,
    (context, width, height, random) => {
      context.fillStyle = "#808080";
      context.fillRect(0, 0, width, height);
      for (let index = 0; index < 180; index += 1) {
        const x = random() * width;
        const y = random() * height;
        const radius = 3 + random() * 20;
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(255,255,255,0.3)");
        gradient.addColorStop(0.5, "rgba(128,128,128,0)");
        gradient.addColorStop(1, "rgba(0,0,0,0.18)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    },
    8,
    8,
    105,
  );

export interface WorldMaterials {
  stone: THREE.MeshStandardMaterial;
  stoneDark: THREE.MeshStandardMaterial;
  stoneLight: THREE.MeshStandardMaterial;
  plaster: THREE.MeshStandardMaterial;
  plasterDark: THREE.MeshStandardMaterial;
  wood: THREE.MeshStandardMaterial;
  woodDark: THREE.MeshStandardMaterial;
  redLacquer: THREE.MeshStandardMaterial;
  deepRed: THREE.MeshStandardMaterial;
  roof: THREE.MeshStandardMaterial;
  roofDark: THREE.MeshStandardMaterial;
  bronze: THREE.MeshStandardMaterial;
  gold: THREE.MeshStandardMaterial;
  paper: THREE.MeshStandardMaterial;
  leaf: THREE.MeshStandardMaterial;
  leafLight: THREE.MeshStandardMaterial;
  moss: THREE.MeshStandardMaterial;
  water: THREE.MeshPhysicalMaterial;
  banner: THREE.MeshStandardMaterial;
  ribbon: THREE.MeshStandardMaterial;
  black: THREE.MeshStandardMaterial;
}

export const createMaterials = (): WorldMaterials => {
  const stoneTexture = createStoneTexture();
  const plasterTexture = createPlasterTexture();
  const woodTexture = createWoodTexture();
  const roofTexture = createRoofTexture();
  const paperTexture = createPaperTexture();
  const waterBump = createWaterBumpTexture();

  return {
    stone: new THREE.MeshStandardMaterial({
      map: stoneTexture,
      color: "#b8b8ae",
      roughness: 0.93,
      metalness: 0,
    }),
    stoneDark: new THREE.MeshStandardMaterial({
      color: "#666c65",
      roughness: 0.96,
    }),
    stoneLight: new THREE.MeshStandardMaterial({
      color: "#cbc9bd",
      roughness: 0.9,
    }),
    plaster: new THREE.MeshStandardMaterial({
      map: plasterTexture,
      color: "#e6dece",
      roughness: 0.9,
    }),
    plasterDark: new THREE.MeshStandardMaterial({
      color: "#b8ad9a",
      roughness: 0.94,
    }),
    wood: new THREE.MeshStandardMaterial({
      map: woodTexture,
      color: "#71372a",
      roughness: 0.72,
    }),
    woodDark: new THREE.MeshStandardMaterial({
      map: woodTexture,
      color: "#4a241d",
      roughness: 0.79,
    }),
    redLacquer: new THREE.MeshPhysicalMaterial({
      color: "#8f2f25",
      roughness: 0.38,
      clearcoat: 0.34,
      clearcoatRoughness: 0.48,
    }),
    deepRed: new THREE.MeshStandardMaterial({
      color: "#5e201b",
      roughness: 0.68,
    }),
    roof: new THREE.MeshStandardMaterial({
      map: roofTexture,
      color: "#4e5a56",
      roughness: 0.7,
      metalness: 0.04,
      side: THREE.DoubleSide,
    }),
    roofDark: new THREE.MeshStandardMaterial({
      color: "#27312f",
      roughness: 0.74,
      metalness: 0.05,
    }),
    bronze: new THREE.MeshStandardMaterial({
      color: "#5f523d",
      roughness: 0.46,
      metalness: 0.56,
    }),
    gold: new THREE.MeshStandardMaterial({
      color: "#aa8751",
      roughness: 0.32,
      metalness: 0.68,
    }),
    paper: new THREE.MeshStandardMaterial({
      map: paperTexture,
      color: "#eadbb5",
      roughness: 0.82,
      emissive: "#6f491d",
      emissiveIntensity: 0.08,
    }),
    leaf: new THREE.MeshStandardMaterial({
      color: "#385443",
      roughness: 0.9,
      flatShading: true,
    }),
    leafLight: new THREE.MeshStandardMaterial({
      color: "#55725a",
      roughness: 0.92,
      flatShading: true,
    }),
    moss: new THREE.MeshStandardMaterial({
      color: "#57644a",
      roughness: 1,
    }),
    water: new THREE.MeshPhysicalMaterial({
      color: "#607f79",
      roughness: 0.15,
      metalness: 0,
      transmission: 0.05,
      transparent: true,
      opacity: 0.78,
      clearcoat: 0.7,
      clearcoatRoughness: 0.16,
      bumpMap: waterBump,
      bumpScale: 0.035,
    }),
    banner: new THREE.MeshStandardMaterial({
      color: "#8b2d24",
      roughness: 0.78,
      side: THREE.DoubleSide,
    }),
    ribbon: new THREE.MeshStandardMaterial({
      color: "#a5392a",
      roughness: 0.72,
      side: THREE.DoubleSide,
    }),
    black: new THREE.MeshStandardMaterial({
      color: "#1f2422",
      roughness: 0.9,
    }),
  };
};

export const disposeMaterials = (materials: WorldMaterials) => {
  for (const material of Object.values(materials)) {
    const textures = [
      material.map,
      material.bumpMap,
      material.emissiveMap,
      material.normalMap,
      material.roughnessMap,
    ];
    textures.forEach((texture) => texture?.dispose());
    material.dispose();
  }
};
