// metaNarrativePredictor.ts — Predictive Meta-Narrative Engine
// 🛡️ Mr Alex Prime
// See ../math/MASTER_EQUATION_META_NARRATIVE.md and ../lore/META_NARRATIVE_MATH_SAMPLE_BRUTUS_CAESAR.md

import {
  MasterEquationInputs,
  MetaNarrativeState,
  Meaning,
  Connection,
  Stability,
  Risk,
  Discovery,
  Agency,
  Boundaries,
  Leadership,
  UniversalValues,
  Observers,
} from "./types.ts";

export interface Character {
  name: string;
  agency: Agency;
  emotion: Emotion;
  choices?: string[];
}

export interface Emotion {
  type: string;
  value: number;
  [key: string]: string | number;
}

export interface UniversalTruth {
  statement: string;
  weight: number;
}

export interface NarrativeBranch {
  name: string;
  probability: number;
  coherence: number;
  outcome: string;
}

export interface NarrativePrediction {
  scene: string;
  seed: string;
  characters: Character[];
  universalTruths: UniversalTruth[];
  observers: string[];
  branches: NarrativeBranch[];
  metaNarrativeState: MetaNarrativeState;
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

// Generic narrative prediction engine
export interface GenericNarrativeInput {
  scene: string;
  seed: string;
  characters: Character[];
  universalTruths: UniversalTruth[];
  observers: string[];
  branches: {
    name: string;
    formula: (params: { [key: string]: number }) => number;
    coherenceFormula: (params: { [key: string]: number }) => number;
    outcome: string;
  }[];
  metaDetails: Partial<MasterEquationInputs>;
}

export function predictNarrative(
  input: GenericNarrativeInput,
): NarrativePrediction {
  // Map character/variable names to values for formulas
  const params: { [key: string]: number } = {};
  input.characters.forEach((c, i) => {
    params[`A_${c.name}`] = c.agency.value;
    params[`E_${c.name}`] = c.emotion.value;
  });
  input.universalTruths.forEach((u, i) => {
    params[`U_${i + 1}`] = u.weight;
  });

  // Calculate branches
  const branches: NarrativeBranch[] = input.branches.map((branch) => ({
    name: branch.name,
    probability: sigmoid(branch.formula(params)),
    coherence: branch.coherenceFormula(params),
    outcome: branch.outcome,
  }));

  // Meta-narrative state (example: sum of all branch scores)
  const MN = branches.reduce((acc, b) => acc + b.probability, 0);
  const metaNarrativeState: MetaNarrativeState = {
    MN,
    details: input.metaDetails as MasterEquationInputs,
  };

  return {
    scene: input.scene,
    seed: input.seed,
    characters: input.characters,
    universalTruths: input.universalTruths,
    observers: input.observers,
    branches,
    metaNarrativeState,
  };
}
