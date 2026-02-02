// memoryDrivenEmergenceTest.ts
// Test the memory-driven emergence sequence for irreversibility in TypeScript

// State type: can be a set of numbers or a single number (for multiplicative phase)
type State = Set<number> | number;

function isNullSet(state: State): boolean {
  return state instanceof Set && state.size === 0;
}

function stateToString(state: State): string {
  if (typeof state === "number") return state.toString();
  return `{${[...state].join(", ")}}`;
}

function memoryDrivenEmergenceTest(upperBound = 1000): {
  states: string[];
  returnedToNull: boolean;
} {
  let states: State[] = [];
  let memory: number[] = [];
  let current: State = new Set();
  states.push(new Set());

  let dualityCount = 0;
  let multiplicativeMode = false;
  let showedSecondDuality = false;

  for (let n = 1; n <= upperBound; n++) {
    if (isNullSet(current)) {
      current = new Set([0]);
    } else if (current instanceof Set && current.size === 1 && current.has(0)) {
      current = new Set([1, 2]);
      memory = [1, 2];
      dualityCount++;
    } else if (
      current instanceof Set &&
      current.size === 2 &&
      current.has(1) &&
      current.has(2)
    ) {
      current = new Set([1]);
      memory = [2];
    } else if (current instanceof Set && current.size === 1 && current.has(1)) {
      current = new Set([2, 3]);
      memory = [2, 3];
      dualityCount++;
    } else if (
      !showedSecondDuality &&
      dualityCount === 2 &&
      current instanceof Set &&
      current.size === 2 &&
      current.has(2) &&
      current.has(3)
    ) {
      // Show the second duality state before switching to multiplication
      showedSecondDuality = true;
      // Do not advance, just record this state
    } else if (
      dualityCount === 2 &&
      showedSecondDuality &&
      current instanceof Set &&
      current.size === 2 &&
      current.has(2) &&
      current.has(3)
    ) {
      multiplicativeMode = true;
      current = 2 * 3;
      memory = [2, 3];
    } else if (multiplicativeMode && typeof current === "number") {
      // Multiply by next integer until upper bound
      current = current * (n + 1);
      memory = [current];
    } else if (
      current instanceof Set &&
      current.size === 2 &&
      current.has(2) &&
      current.has(3)
    ) {
      current = new Set([1, 2, 3]);
      memory = [1, 2, 3];
    } else if (
      current instanceof Set &&
      current.size === 3 &&
      current.has(1) &&
      current.has(2) &&
      current.has(3)
    ) {
      current = 1 * 2 * 3;
      memory = [1, 2, 3];
    } else if (typeof current === "number") {
      current = current + 1;
      memory = [current];
    } else {
      if (memory.length >= 2) {
        current = new Set([
          memory[memory.length - 2] + 1,
          memory[memory.length - 1] + 1,
        ]);
        memory = [...current];
      } else {
        current = new Set([memory[0] + 1]);
        memory = [...current];
      }
    }
    states.push(current instanceof Set ? new Set(current) : current);
    if (isNullSet(current)) {
      return { states: states.map(stateToString), returnedToNull: true };
    }
  }
  return { states: states.map(stateToString), returnedToNull: false };
}

// Run the test and print results
const result = memoryDrivenEmergenceTest(1000);
console.log("States:", result.states.join(" -> "));
console.log("Returned to null set after duality?", result.returnedToNull);
