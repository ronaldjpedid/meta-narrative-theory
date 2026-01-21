// branchingProbability.ts — Predictive Branching Model
// 🛡️ Mr Alex Prime

export interface BranchingInputs {
  agency: number;
  coherence: number;
  stability: number;
  observer: number;
  weights?: { w1?: number; w2?: number; w3?: number; w4?: number };
}

/**
 * Calculates the probability of a narrative branch using EQ7.
 * @param inputs BranchingInputs
 * @returns Probability (0-1)
 */
export function branchingProbability(inputs: BranchingInputs): number {
  const { agency, coherence, stability, observer, weights = {} } = inputs;
  const w1 = weights.w1 ?? 1;
  const w2 = weights.w2 ?? 1;
  const w3 = weights.w3 ?? 1;
  const w4 = weights.w4 ?? 1;
  const sum = w1 * agency + w2 * coherence + w3 * stability + w4 * observer;
  return 1 / (1 + Math.exp(-sum)); // Sigmoid normalization
}
