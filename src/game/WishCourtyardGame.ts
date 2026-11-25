import * as THREE from "three";
import { createCharacter, type CharacterAvatar } from "./characters";
import type {
  CharacterPreset,
  GameCallbacks,
  HudState,
  Interaction,
  NearestInteraction,
  ViewMode,
} from "./types";
import { WishWorld } from "./world";

const PLAYER_RADIUS = 0.38;
const EYE_HEIGHT = 1.68;

const damp = (current: number, target: number, lambda: number, delta: number) =>
  THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));

const createSkyDome = () => {
  const geometry = new THREE.SphereGeometry(110, 32, 18);
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color("#7f9297") },
      horizonColor: { value: new THREE.Color("#c4c8bc") },
      bottomColor: { value: new THREE.Color("#d8d4c8") },
      sunDirection: { value: new THREE.Vector3(-0.45, 0.68, 0.58).normalize() },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      uniform vec3 sunDirection;
      varying vec3 vWorldPosition;
      void main() {
        vec3 direction = normalize(vWorldPosition);
        float heightMix = smoothstep(-0.08, 0.72, direction.y);
        vec3 color = mix(bottomColor, horizonColor, smoothstep(-0.18, 0.05, direction.y));
        color = mix(color, topColor, heightMix);
        float sunGlow = pow(max(dot(direction, sunDirection), 0.0), 18.0);
        color += vec3(0.19, 0.13, 0.07) * sunGlow;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(geometry, material);
  sky.name = "SkyDome";
  sky.frustumCulled = false;
  return sky;
};

const createDistantScenery = () => {
  const group = new THREE.Group();
  group.name = "DistantScenery";
  const colors = ["#59655e", "#4c5c58", "#647069", "#48554f"];
  const placements = [
    [-48, -44, 16, 7, 19],
    [-30, -62, 22, 11, 24],
    [-6, -72, 29, 13, 28],
    [20, -66, 24, 10, 25],
    [44, -50, 18, 8, 20],
    [58, -18, 15, 7, 18],
    [-61, -9, 17, 8, 20],
  ];
  placements.forEach(([x, z, width, height, depth], index) => {
    const material = new THREE.MeshStandardMaterial({
      color: colors[index % colors.length],
      roughness: 1,
      flatShading: true,
    });
    const mountain = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1, 1),
      material,
    );
    mountain.position.set(x, -2.5, z);
    mountain.scale.set(width, height, depth);
    mountain.rotation.set(0.08, index * 1.27, 0.04);
    group.add(mountain);
  });
  return group;
};

export class WishCourtyardGame {
  private readonly container: HTMLElement;
  private readonly callbacks: GameCallbacks;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.PerspectiveCamera;
  private readonly world = new WishWorld();
  private readonly avatar: CharacterAvatar;
  private readonly keys = new Set<string>();
  private readonly clock = new THREE.Clock();
  private readonly velocity = new THREE.Vector3();
  private readonly playerPosition = new THREE.Vector3(0, 0, 24.5);
  private readonly resizeObserver: ResizeObserver;
  private frameId = 0;
  private elapsedTime = 0;
  private yaw = 0;
  private pitch = -0.045;
  private verticalPosition = 0;
  private viewMode: ViewMode = "first";
  private preset: CharacterPreset = "female";
  private started = false;
  private inactive = false;
  private disposed = false;
  private nearest: Interaction | null = null;
  private lastZone = "";
  private lastNearestId: string | null = null;

  constructor(container: HTMLElement, callbacks: GameCallbacks) {
    this.container = container;
    this.callbacks = callbacks;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    this.renderer.domElement.className = "game-canvas";
    this.renderer.domElement.tabIndex = 0;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(58, 1, 0.08, 180);
    this.camera.rotation.order = "YXZ";
    this.scene.background = new THREE.Color("#aeb9b3");
    this.scene.fog = new THREE.FogExp2("#aeb8b2", 0.0088);

    this.scene.add(createSkyDome());
    this.scene.add(createDistantScenery());
    this.scene.add(this.world.root);
    this.avatar = createCharacter(this.preset);
    this.scene.add(this.avatar.root);
    this.avatar.root.visible = false;

    this.setupLighting();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.bindEvents();
    this.resize();
    this.syncPlayerToGround(0);
    this.updateCamera(0);
    this.callbacks.onReady();
    this.animate();
  }

  start(preset: CharacterPreset) {
    this.preset = preset;
    this.avatar.setPreset(preset);
    this.started = true;
    this.inactive = false;
    this.playerPosition.set(0, 0, 24.5);
    this.yaw = 0;
    this.pitch = -0.045;
    this.syncPlayerToGround(0);
    this.emitHud(true);
    this.requestPointerLock();
  }

  resume() {
    if (!this.started) {
      return;
    }
    this.inactive = false;
    this.callbacks.onPauseChange(false);
    this.requestPointerLock();
  }

  setInactive(value: boolean) {
    this.inactive = value;
    this.keys.clear();
    if (value && document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  setPreset(preset: CharacterPreset) {
    this.preset = preset;
    this.avatar.setPreset(preset);
  }

  toggleView() {
    if (!this.started || this.inactive) {
      return;
    }
    this.viewMode = this.viewMode === "first" ? "third" : "first";
    this.avatar.root.visible = this.viewMode === "third";
    this.emitHud(true);
  }

  exitToMenu() {
    this.started = false;
    this.inactive = false;
    this.keys.clear();
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
    this.avatar.root.visible = false;
    this.callbacks.onInteraction(null);
    this.callbacks.onPauseChange(false);
    this.callbacks.onHud({
      zone: "山门 · 入口",
      viewMode: this.viewMode,
      started: false,
    });
  }

  requestPointerLock() {
    if (!this.started || this.inactive) {
      return;
    }
    this.renderer.domElement.requestPointerLock();
  }

  teleportForTest(x: number, z: number) {
    this.playerPosition.set(x, this.world.getGroundHeight(x, z), z);
    this.velocity.set(0, 0, 0);
    this.syncPlayerToGround(0);
    this.updateInteraction();
    this.emitHud(true);
  }

  getDebugState() {
    return {
      x: Number(this.playerPosition.x.toFixed(3)),
      y: Number(this.playerPosition.y.toFixed(3)),
      z: Number(this.playerPosition.z.toFixed(3)),
      zone: this.getZone(),
      viewMode: this.viewMode,
      started: this.started,
      inactive: this.inactive,
      nearest: this.nearest?.id ?? null,
    };
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frameId);
    this.resizeObserver.disconnect();
    this.unbindEvents();
    this.world.dispose();
    this.avatar.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
        object.geometry.dispose();
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        materials.forEach((material) => material.dispose());
      }
    });
  }

  private setupLighting() {
    const hemisphere = new THREE.HemisphereLight("#e1e8e5", "#52604f", 2.35);
    this.scene.add(hemisphere);
    this.scene.add(new THREE.AmbientLight("#dce2dc", 0.42));

    const sun = new THREE.DirectionalLight("#f0ddbd", 3.15);
    sun.position.set(-15, 23, 17);
    sun.target.position.set(0, 2.8, -4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(3072, 3072);
    sun.shadow.camera.left = -38;
    sun.shadow.camera.right = 38;
    sun.shadow.camera.top = 38;
    sun.shadow.camera.bottom = -28;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 72;
    sun.shadow.bias = -0.00018;
    sun.shadow.normalBias = 0.025;
    sun.shadow.radius = 3.5;
    this.scene.add(sun, sun.target);

    const fill = new THREE.DirectionalLight("#9cb7bd", 0.9);
    fill.position.set(16, 10, -13);
    fill.target.position.set(0, 2, -12);
    this.scene.add(fill, fill.target);

    const courtyardGlow = new THREE.PointLight("#ffd6a0", 2.2, 22, 2);
    courtyardGlow.position.set(0, 5.5, 7);
    this.scene.add(courtyardGlow);
  }

  private bindEvents() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("pointerlockchange", this.handlePointerLockChange);
    this.renderer.domElement.addEventListener("click", this.handleCanvasClick);
    window.addEventListener("blur", this.handleBlur);
  }

  private unbindEvents() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("pointerlockchange", this.handlePointerLockChange);
    this.renderer.domElement.removeEventListener("click", this.handleCanvasClick);
    window.removeEventListener("blur", this.handleBlur);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    if (["w", "a", "s", "d", "e", "v", "shift"].includes(key)) {
      event.preventDefault();
    }
    this.keys.add(key);
    if (event.repeat) {
      return;
    }
    if (key === "v") {
      this.toggleView();
    }
    if (key === "e" && this.started && !this.inactive && this.nearest) {
      this.callbacks.onInteract(this.nearest);
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.keys.delete(event.key.toLowerCase());
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (
      document.pointerLockElement !== this.renderer.domElement ||
      !this.started ||
      this.inactive
    ) {
      return;
    }
    this.yaw -= event.movementX * 0.00185;
    this.pitch = THREE.MathUtils.clamp(
      this.pitch - event.movementY * 0.00162,
      -1.15,
      1.05,
    );
  };

  private handlePointerLockChange = () => {
    const locked = document.pointerLockElement === this.renderer.domElement;
    this.callbacks.onLockChange(locked);
    if (this.started && !locked && !this.inactive) {
      this.callbacks.onPauseChange(true);
    }
  };

  private handleCanvasClick = () => {
    if (
      this.started &&
      !this.inactive &&
      document.pointerLockElement !== this.renderer.domElement
    ) {
      this.requestPointerLock();
    }
  };

  private handleBlur = () => {
    this.keys.clear();
  };

  private resize() {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private canOccupy(x: number, z: number) {
    if (x < -33.1 || x > 33.1 || z < -34.2 || z > 35.2) {
      return false;
    }
    for (const obstacle of this.world.obstacles) {
      if (
        x + PLAYER_RADIUS > obstacle.minX &&
        x - PLAYER_RADIUS < obstacle.maxX &&
        z + PLAYER_RADIUS > obstacle.minZ &&
        z - PLAYER_RADIUS < obstacle.maxZ
      ) {
        return false;
      }
    }
    for (const circle of this.world.circles) {
      const minimumDistance = circle.radius + PLAYER_RADIUS;
      const dx = x - circle.x;
      const dz = z - circle.z;
      if (dx * dx + dz * dz < minimumDistance * minimumDistance) {
        return false;
      }
    }
    return true;
  }

  private movePlayer(delta: number) {
    const forward =
      (this.keys.has("w") ? 1 : 0) - (this.keys.has("s") ? 1 : 0);
    const strafe =
      (this.keys.has("d") ? 1 : 0) - (this.keys.has("a") ? 1 : 0);
    const input = new THREE.Vector2(strafe, forward);
    if (input.lengthSq() > 1) {
      input.normalize();
    }

    const sprinting = this.keys.has("shift");
    const speed = sprinting ? 4.45 : 2.72;
    const forwardX = -Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);
    const rightX = Math.cos(this.yaw);
    const rightZ = -Math.sin(this.yaw);
    const targetX = (forwardX * input.y + rightX * input.x) * speed;
    const targetZ = (forwardZ * input.y + rightZ * input.x) * speed;
    this.velocity.x = damp(this.velocity.x, targetX, input.lengthSq() > 0 ? 11 : 8, delta);
    this.velocity.z = damp(this.velocity.z, targetZ, input.lengthSq() > 0 ? 11 : 8, delta);

    const moveX = this.velocity.x * delta;
    const moveZ = this.velocity.z * delta;
    const currentGround = this.world.getGroundHeight(
      this.playerPosition.x,
      this.playerPosition.z,
    );
    const nextX = this.playerPosition.x + moveX;
    if (
      this.canOccupy(nextX, this.playerPosition.z) &&
      Math.abs(
        this.world.getGroundHeight(nextX, this.playerPosition.z) - currentGround,
      ) < 0.32
    ) {
      this.playerPosition.x = nextX;
    } else {
      this.velocity.x *= 0.15;
    }
    const nextZ = this.playerPosition.z + moveZ;
    if (
      this.canOccupy(this.playerPosition.x, nextZ) &&
      Math.abs(
        this.world.getGroundHeight(this.playerPosition.x, nextZ) - currentGround,
      ) < 0.32
    ) {
      this.playerPosition.z = nextZ;
    } else {
      this.velocity.z *= 0.15;
    }

    this.syncPlayerToGround(delta);
    const moveSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    this.avatar.root.position.set(
      this.playerPosition.x,
      this.playerPosition.y,
      this.playerPosition.z,
    );
    this.avatar.root.rotation.y = this.yaw + Math.PI;
    this.avatar.update(this.elapsedTime, moveSpeed);
  }

  private syncPlayerToGround(delta: number) {
    const ground = this.world.getGroundHeight(
      this.playerPosition.x,
      this.playerPosition.z,
    );
    this.playerPosition.y = ground;
    const target = ground + EYE_HEIGHT;
    this.verticalPosition =
      delta === 0 ? target : damp(this.verticalPosition, target, 15, delta);
  }

  private updateCamera(delta: number) {
    const speedRatio = Math.min(1, Math.hypot(this.velocity.x, this.velocity.z) / 3.4);
    const bob =
      this.viewMode === "first"
        ? Math.sin(this.elapsedTime * 9.2) * 0.018 * speedRatio
        : 0;
    if (this.viewMode === "first") {
      this.camera.position.set(
        this.playerPosition.x,
        this.verticalPosition + bob,
        this.playerPosition.z,
      );
      this.camera.rotation.x = this.pitch;
      this.camera.rotation.y = this.yaw;
      this.camera.rotation.z = Math.sin(this.elapsedTime * 4.8) * 0.0025 * speedRatio;
      return;
    }

    const lookDirection = new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch),
    );
    const target = new THREE.Vector3(
      this.playerPosition.x,
      this.verticalPosition + 0.02,
      this.playerPosition.z,
    );
    const desired = target
      .clone()
      .addScaledVector(lookDirection, -6.15)
      .add(new THREE.Vector3(0, 1.26, 0));
    desired.x = THREE.MathUtils.clamp(desired.x, -33.2, 33.2);
    desired.z = THREE.MathUtils.clamp(desired.z, -34.3, 34.7);
    desired.y = Math.max(
      desired.y,
      this.world.getGroundHeight(desired.x, desired.z) + 0.55,
    );
    if (this.camera.position.distanceToSquared(desired) > 3600) {
      this.camera.position.copy(desired);
    } else {
      this.camera.position.x = damp(this.camera.position.x, desired.x, 14, delta);
      this.camera.position.y = damp(this.camera.position.y, desired.y, 14, delta);
      this.camera.position.z = damp(this.camera.position.z, desired.z, 14, delta);
    }
    this.camera.lookAt(
      target.clone().addScaledVector(lookDirection, 7).add(new THREE.Vector3(0, 0.48, 0)),
    );
  }

  private updateInteraction() {
    let nearest: Interaction | null = null;
    let nearestDistance = Number.POSITIVE_INFINITY;
    for (const interaction of this.world.interactions) {
      const dx = this.playerPosition.x - interaction.position[0];
      const dz = this.playerPosition.z - interaction.position[2];
      const distance = Math.hypot(dx, dz);
      if (distance <= interaction.radius && distance < nearestDistance) {
        nearest = interaction;
        nearestDistance = distance;
      }
    }
    this.nearest = nearest;
    const nextId = nearest?.id ?? null;
    if (nextId !== this.lastNearestId) {
      this.lastNearestId = nextId;
      this.world.setHighlighted(nextId);
      const payload: NearestInteraction | null = nearest
        ? {
            id: nearest.id,
            title: nearest.title,
            detail: nearest.detail,
          }
        : null;
      this.callbacks.onInteraction(payload);
    }
  }

  private getZone() {
    const { x, z } = this.playerPosition;
    if (z > 24) {
      return "山门 · 入口";
    }
    if (z < -10.5) {
      return "静心殿 · 前庭";
    }
    if (x < -18.8) {
      return "财神民俗展陈";
    }
    if (x > 18.8) {
      return "还愿堂";
    }
    if (x < -6.3 && z > 2.5) {
      return "许愿树 · 西庭";
    }
    if (x > 6.3 && z > 2.5) {
      return "许愿池 · 东庭";
    }
    return "中央庭院";
  }

  private emitHud(force = false) {
    const zone = this.getZone();
    if (force || zone !== this.lastZone) {
      this.lastZone = zone;
      const hud: HudState = {
        zone,
        viewMode: this.viewMode,
        started: this.started,
      };
      this.callbacks.onHud(hud);
    }
  }

  private animate = () => {
    if (this.disposed) {
      return;
    }
    this.frameId = requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.05);
    this.elapsedTime += delta;
    if (this.started && !this.inactive) {
      this.movePlayer(delta);
      this.updateInteraction();
      this.emitHud();
    }
    this.updateCamera(delta);
    this.world.update(this.elapsedTime);
    this.renderer.render(this.scene, this.camera);
  };
}
