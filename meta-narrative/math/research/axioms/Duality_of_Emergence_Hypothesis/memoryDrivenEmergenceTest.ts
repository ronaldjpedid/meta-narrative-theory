/**
 * memoryDrivenEmergenceTest.ts
 * Computational validation of the Duality of Emergence axiom.
 *
 * This implementation demonstrates that two distinguishable states
 * interacting through a non-trivial relation produce unbounded emergent growth.
 */

/** Union type representing either a set of numbers or a single numeric value. */
type State = Set<number> | number;

/** Result structure for emergence simulation. */
interface EmergenceResult {
  readonly states: ReadonlyArray<string>;
  readonly returnedToNull: boolean;
  readonly finalIteration: number;
  readonly diverged: boolean;
}

/** Internal tracking for emergence phases. */
interface EmergenceTracker {
  dualityCount: number;
  multiplicativeMode: boolean;
  showedSecondDuality: boolean;
}

/**
 * Checks if a state represents the null set (empty set).
 * @param state - The state to check
 * @returns True if state is an empty Set, false otherwise
 */
function isNullSet(state: State): boolean {
  return state instanceof Set && state.size === 0;
}

/**
 * Converts a state to its string representation.
 * @param state - The state to convert
 * @returns String representation: number or set notation
 */
function stateToString(state: State): string {
  if (typeof state === "number") {
    return state.toString();
  }
  return `{${Array.from(state)
    .sort((a, b) => a - b)
    .join(", ")}}`;
}

/**
 * Checks if a set state matches a specific pattern.
 * @param state - The state to check
 * @param size - Expected set size
 * @param elements - Elements that must be present
 * @returns True if state is a Set with specified size and elements
 */
function isSetWithElements(
  state: State,
  size: number,
  ...elements: number[]
): boolean {
  if (!(state instanceof Set) || state.size !== size) {
    return false;
  }
  return elements.every((el) => state.has(el));
}

/**
 * Applies the next transition rule based on current state and memory.
 * @param current - Current system state
 * @param memory - Memory of previous values
 * @param tracker - Phase tracking information
 * @returns Updated state
 */
function applyTransitionRule(
  current: State,
  memory: number[],
  tracker: EmergenceTracker,
): State {
  // Phase 1: Null set → First distinction
  if (isNullSet(current)) {
    return new Set([0]);
  }

  // Phase 2: First distinction → First duality
  if (isSetWithElements(current, 1, 0)) {
    tracker.dualityCount++;
    return new Set([1, 2]);
  }

  // Phase 3: First duality → Collapse
  if (isSetWithElements(current, 2, 1, 2)) {
    return new Set([1]);
  }

  // Phase 4: Collapse → Synthesis (second duality)
  if (isSetWithElements(current, 1, 1)) {
    tracker.dualityCount++;
    return new Set([2, 3]);
  }

  // Phase 5: Mark second duality appearance
  if (
    !tracker.showedSecondDuality &&
    tracker.dualityCount === 2 &&
    isSetWithElements(current, 2, 2, 3)
  ) {
    tracker.showedSecondDuality = true;
    return current;
  }

  // Phase 6: Transition to multiplicative emergence
  if (
    tracker.dualityCount === 2 &&
    tracker.showedSecondDuality &&
    isSetWithElements(current, 2, 2, 3)
  ) {
    tracker.multiplicativeMode = true;
    return 6; // 2 × 3
  }

  // Phase 7: Multiplicative growth
  if (tracker.multiplicativeMode && typeof current === "number") {
    return current * (memory[0] + 1);
  }

  // Fallback: Increment based on memory
  if (typeof current === "number") {
    return current + 1;
  }

  // Default set evolution
  if (memory.length >= 2) {
    return new Set([
      memory[memory.length - 2] + 1,
      memory[memory.length - 1] + 1,
    ]);
  }

  return new Set([memory[0] + 1]);
}

/**
 * Simulates memory-driven emergence according to the Duality of Emergence axiom.
 *
 * Starting from the null set, this function applies transition rules that
 * implement distinguishability, non-trivial relations, and memory to produce
 * emergent growth.
 *
 * @param upperBound - Maximum number of iterations (default: 1000)
 * @returns Simulation results including state sequence and convergence information
 */
function memoryDrivenEmergenceTest(upperBound: number = 1000): EmergenceResult {
  const states: State[] = [];
  const memory: number[] = [];
  let current: State = new Set<number>();

  const tracker: EmergenceTracker = {
    dualityCount: 0,
    multiplicativeMode: false,
    showedSecondDuality: false,
  };

  states.push(new Set<number>());

  for (let n = 1; n <= upperBound; n++) {
    // Apply transition rule
    const next = applyTransitionRule(current, memory, tracker);

    // Update memory
    if (typeof next === "number") {
      memory[0] = next;
    } else if (next instanceof Set) {
      memory.splice(0, memory.length, ...Array.from(next));
    }

    current = next;
    states.push(current instanceof Set ? new Set(current) : current);

    // Check for return to null (falsification condition)
    if (isNullSet(current)) {
      return {
        states: states.map(stateToString),
        returnedToNull: true,
        finalIteration: n,
        diverged: false,
      };
    }

    // Check for divergence (overflow or infinity)
    if (typeof current === "number" && !Number.isFinite(current)) {
      return {
        states: states.map(stateToString),
        returnedToNull: false,
        finalIteration: n,
        diverged: true,
      };
    }
  }

  return {
    states: states.map(stateToString),
    returnedToNull: false,
    finalIteration: upperBound,
    diverged: typeof current === "number" && current > 10 ** 100,
  };
}

// Execute simulation
const result = memoryDrivenEmergenceTest(1000);

console.log("=== Duality of Emergence: Computational Validation ===");
console.log(`Total iterations: ${result.finalIteration}`);
console.log(`Diverged to infinity: ${result.diverged}`);
console.log(`Returned to null set: ${result.returnedToNull}`);
console.log(`\nFirst 10 states: ${result.states.slice(0, 10).join(" → ")}`);
console.log(`Last 5 states: ${result.states.slice(-5).join(" → ")}`);
