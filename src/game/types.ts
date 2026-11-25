export type CharacterPreset = "female" | "male";
export type ViewMode = "first" | "third";
export type InteractionKind =
  | "gate"
  | "incense"
  | "wish-tree"
  | "pond"
  | "fortune"
  | "vow-hall"
  | "main-hall";

export interface Interaction {
  id: string;
  kind: InteractionKind;
  title: string;
  detail: string;
  position: [number, number, number];
  radius: number;
}

export interface HudState {
  zone: string;
  viewMode: ViewMode;
  started: boolean;
}

export interface NearestInteraction {
  id: string;
  title: string;
  detail: string;
}

export interface GameCallbacks {
  onReady: () => void;
  onHud: (state: HudState) => void;
  onInteraction: (interaction: NearestInteraction | null) => void;
  onInteract: (interaction: Interaction) => void;
  onPauseChange: (paused: boolean) => void;
  onLockChange: (locked: boolean) => void;
}
