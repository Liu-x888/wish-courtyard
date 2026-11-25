import * as THREE from "three";
import type { CharacterPreset } from "./types";
import { addBox, addCylinder, addMesh } from "./modeling";

export interface CharacterAvatar {
  root: THREE.Group;
  update: (time: number, speed: number) => void;
  setPreset: (preset: CharacterPreset) => void;
  dispose: () => void;
}

interface CharacterMaterials {
  robe: THREE.MeshStandardMaterial;
  robeLight: THREE.MeshStandardMaterial;
  trim: THREE.MeshStandardMaterial;
  skin: THREE.MeshStandardMaterial;
  hair: THREE.MeshStandardMaterial;
  shoe: THREE.MeshStandardMaterial;
  sash: THREE.MeshStandardMaterial;
}

const createCharacterMaterials = (): CharacterMaterials => ({
  robe: new THREE.MeshStandardMaterial({
    color: "#56706a",
    roughness: 0.88,
    flatShading: true,
  }),
  robeLight: new THREE.MeshStandardMaterial({
    color: "#bec4b2",
    roughness: 0.84,
    flatShading: true,
  }),
  trim: new THREE.MeshStandardMaterial({
    color: "#91392f",
    roughness: 0.7,
  }),
  skin: new THREE.MeshStandardMaterial({
    color: "#c79a78",
    roughness: 0.92,
  }),
  hair: new THREE.MeshStandardMaterial({
    color: "#252321",
    roughness: 0.94,
  }),
  shoe: new THREE.MeshStandardMaterial({
    color: "#2b2823",
    roughness: 0.92,
  }),
  sash: new THREE.MeshStandardMaterial({
    color: "#a3814d",
    roughness: 0.55,
    metalness: 0.08,
  }),
});

export const createCharacter = (
  preset: CharacterPreset,
): CharacterAvatar => {
  const root = new THREE.Group();
  root.name = "PlayerAvatar";
  const rig = new THREE.Group();
  root.add(rig);
  const materials = createCharacterMaterials();
  let currentPreset = preset;

  const body = new THREE.Group();
  rig.add(body);

  const robe = new THREE.Mesh(
    new THREE.CylinderGeometry(0.26, 0.48, 1.13, 9, 2),
    materials.robe,
  );
  robe.position.y = 1.08;
  addMesh(body, robe);

  const frontPanel = new THREE.Mesh(
    new THREE.PlaneGeometry(0.38, 0.78),
    materials.robeLight,
  );
  frontPanel.position.set(0, 1.08, 0.425);
  frontPanel.rotation.x = -0.08;
  addMesh(body, frontPanel);

  addBox(body, [0.56, 0.11, 0.32], materials.sash, [0, 1.28, 0.03]);
  addBox(body, [0.11, 0.58, 0.05], materials.trim, [0.13, 1.5, 0.29]).rotation.z =
    -0.43;
  addBox(body, [0.11, 0.58, 0.05], materials.trim, [-0.13, 1.5, 0.29]).rotation.z =
    0.43;
  addBox(body, [0.68, 0.13, 0.34], materials.robe, [0, 1.6, 0]);

  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.35, 1.55, 0);
    body.add(shoulder);
    const upperSleeve = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.18, 0.62, 8),
      materials.robe,
    );
    upperSleeve.position.y = -0.28;
    upperSleeve.rotation.z = side * 0.12;
    addMesh(shoulder, upperSleeve);
    const forearm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.16, 0.54, 7),
      materials.robeLight,
    );
    forearm.position.set(side * 0.02, -0.78, 0.04);
    addMesh(shoulder, forearm);
    const hand = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.09, 1),
      materials.skin,
    );
    hand.position.set(side * 0.02, -1.08, 0.06);
    addMesh(shoulder, hand);
    shoulder.name = side < 0 ? "ArmLeft" : "ArmRight";
  }

  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.17, 0.74, 0);
    body.add(leg);
    const legMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.13, 0.68, 7),
      materials.robe,
    );
    legMesh.position.y = -0.34;
    addMesh(leg, legMesh);
    const shoe = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.11, 0.34),
      materials.shoe,
    );
    shoe.position.set(0, -0.7, 0.07);
    addMesh(leg, shoe);
    leg.name = side < 0 ? "LegLeft" : "LegRight";
  }

  const neck = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.1, 0.14, 8),
    materials.skin,
  );
  neck.position.y = 1.72;
  addMesh(body, neck);
  const head = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.205, 2),
    materials.skin,
  );
  head.scale.set(0.9, 1.07, 0.92);
  head.position.y = 1.92;
  addMesh(body, head);

  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.215, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6),
    materials.hair,
  );
  hairCap.scale.set(0.91, 1.03, 0.93);
  hairCap.position.set(0, 1.95, -0.025);
  addMesh(body, hairCap);

  const maleHair = new THREE.Group();
  addCylinder(maleHair, 0.09, 0.12, 0.24, 7, materials.hair, [0, 2.2, -0.02]);
  addBox(maleHair, [0.23, 0.035, 0.035], materials.sash, [0, 2.28, -0.02]);
  body.add(maleHair);

  const femaleHair = new THREE.Group();
  const bun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.125, 2),
    materials.hair,
  );
  bun.scale.set(1.09, 0.92, 1);
  bun.position.set(0, 2.17, -0.1);
  addMesh(femaleHair, bun);
  for (let index = 0; index < 4; index += 1) {
    const braid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.065 - index * 0.008, 1),
      materials.hair,
    );
    braid.position.set(
      Math.sin(index * 0.8) * 0.025,
      1.86 - index * 0.13,
      -0.19,
    );
    addMesh(femaleHair, braid);
  }
  const hairPin = addCylinder(
    femaleHair,
    0.018,
    0.018,
    0.36,
    5,
    materials.sash,
    [0.12, 2.18, -0.02],
  );
  hairPin.rotation.z = Math.PI / 2.6;
  hairPin.rotation.y = 0.22;
  body.add(femaleHair);

  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 5, 4),
      materials.hair,
    );
    eye.position.set(side * 0.075, 1.94, 0.205);
    body.add(eye);
  }

  const beltTassel = new THREE.Group();
  beltTassel.position.set(0.32, 1.22, 0.26);
  for (let index = 0; index < 3; index += 1) {
    addCylinder(
      beltTassel,
      0.012,
      0.006,
      0.36,
      4,
      materials.trim,
      [(index - 1) * 0.035, -0.22, 0],
    );
  }
  addMesh(
    beltTassel,
    new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.012, 4, 8), materials.sash),
  );
  body.add(beltTassel);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.54, 20),
    new THREE.MeshBasicMaterial({
      color: "#17201b",
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.015;
  root.add(shadow);

  const legs = [
    body.getObjectByName("LegLeft"),
    body.getObjectByName("LegRight"),
  ];
  const arms = [
    body.getObjectByName("ArmLeft"),
    body.getObjectByName("ArmRight"),
  ];

  const setPreset = (nextPreset: CharacterPreset) => {
    currentPreset = nextPreset;
    maleHair.visible = nextPreset === "male";
    femaleHair.visible = nextPreset === "female";
    if (nextPreset === "female") {
      materials.robe.color.set("#687f78");
      materials.robeLight.color.set("#d7cdb8");
      materials.trim.color.set("#9d4037");
    } else {
      materials.robe.color.set("#405e59");
      materials.robeLight.color.set("#c4c8b8");
      materials.trim.color.set("#8f382e");
    }
  };

  const update = (time: number, speed: number) => {
    const moving = Math.min(1, speed / 3.2);
    const phase = time * (7.6 + moving * 2.2);
    const stride = Math.sin(phase) * 0.5 * moving;
    legs.forEach((leg, index) => {
      if (leg) {
        leg.rotation.x = index === 0 ? stride : -stride;
      }
    });
    arms.forEach((arm, index) => {
      if (arm) {
        arm.rotation.x = index === 0 ? -stride * 0.74 : stride * 0.74;
        arm.rotation.z = (index === 0 ? -1 : 1) * (0.09 + moving * 0.03);
      }
    });
    body.position.y = moving > 0.02 ? Math.abs(Math.sin(phase)) * 0.025 : 0;
    body.rotation.z = Math.sin(time * 1.3) * 0.004;
    beltTassel.rotation.z = Math.sin(time * 3.3) * (0.05 + moving * 0.16);
  };

  const dispose = () => {
    root.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
      }
    });
    Object.values(materials).forEach((material) => material.dispose());
    shadow.material.dispose();
  };

  setPreset(preset);
  return { root, update, setPreset, dispose };
};
