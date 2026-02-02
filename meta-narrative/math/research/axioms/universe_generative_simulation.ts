// Universe Generative Simulation (Minimal Example)
// This simulation is intentionally simple to avoid high memory usage.

// Variable definitions:
// L: Love/generativity (enabling constant, 1 = generative, 0 = non-generative)
// F: Fear/entropy (opposing force, 0 = none, >0 = destabilizing)
// A: Agency (number of agents or active entities)
// O: Observation (number of observers or observation events)
// T: Threshold (minimum value for universe persistence)
// U: Universe viability (calculated as U = (L - F + A + O) / T)

interface UniverseState {
  n: number;
  L: number;
  F: number;
  A: number;
  O: number;
  T: number;
  U: number;
}

function generativeFunction(state: UniverseState): UniverseState {
  // Example: Each step doubles A and O, L remains 1, F remains 0, T increases slowly
  return {
    n: state.n + 1,
    L: 1,
    F: 0,
    A: state.A * 2,
    O: state.O * 2,
    T: state.T + 1,
    U: (1 - 0 + state.A * 2 + state.O * 2) / (state.T + 1),
  };
}

function runSimulation(steps: number = 5): UniverseState[] {
  const history: UniverseState[] = [];
  let state: UniverseState = {
    n: 0,
    L: 1,
    F: 0,
    A: 1,
    O: 1,
    T: 1.5,
    U: (1 - 0 + 1 + 1) / 1.5,
  };
  history.push(state);
  for (let i = 0; i < steps; i++) {
    state = generativeFunction(state);
    history.push(state);
  }
  return history;
}

// Example usage:
const result = runSimulation(5);
console.table(result);
