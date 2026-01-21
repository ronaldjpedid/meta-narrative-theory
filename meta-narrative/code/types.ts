// --- Universe Creation Types ---
export interface MoM {
  type: "MoM";
  memory: string;
  legacy: string;
}

export interface DaD {
  type: "DaD";
  destiny: string;
  duality: string;
}

export interface KiD {
  type: "KiD";
  knowledge: string;
  imagination: string;
  destiny: string;
}

export interface Universe {
  existence: boolean;
  singularity: string;
  duality: [MoM, DaD];
  loveEvent: string;
  synthesis: KiD;
  story: string;
}
// types.ts — Meta-Narrative Types
// 🛡️ Mr Alex Prime

export interface Meaning {
  value: number;
  who: string;
  what: string;
  where: string;
  why: string;
  how: string;
  [key: string]: string | number;
}

export interface Connection {
  value: number;
  participants: string[];
  type: string;
  strength: number;
  [key: string]: string | number | string[];
}

export interface Stability {
  value: number;
  factors: string[];
  [key: string]: string | number | string[];
}

export interface Risk {
  value: number;
  description: string;
  likelihood: number;
  impact: number;
  [key: string]: string | number;
}

export interface Discovery {
  value: number;
  insight: string;
  anomaly?: string;
  [key: string]: string | number | undefined;
}

export interface Agency {
  value: number;
  actor: string;
  actions: string[];
  [key: string]: string | number | string[];
}

export interface Boundaries {
  value: number;
  limits: string[];
  description?: string;
  [key: string]: string | number | string[] | undefined;
}

export interface Leadership {
  value: number;
  leader: string;
  style: string;
  [key: string]: string | number;
}

export interface UniversalValues {
  value: number;
  principles: string[];
  [key: string]: string | number | string[];
}

export interface Observers {
  value: number;
  roles: string[];
  [key: string]: string | number | string[];
}

export interface MasterEquationInputs {
  M: Meaning;
  C: Connection;
  S: Stability;
  R: Risk;
  D: Discovery;
  Ag: Agency;
  B: Boundaries;
  L: Leadership;
  O: Observers;
  UV?: UniversalValues;
  [key: string]: any;
}

export interface MetaNarrativeState {
  MN: number;
  details: MasterEquationInputs;
}
