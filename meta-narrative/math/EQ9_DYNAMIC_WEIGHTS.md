# EQ9: Dynamic Weights

## Equation
$$
w_i(t+1) = w_i(t) + \gamma \cdot \text{Agency}_i(t) + \delta \cdot \text{Emotion}_i(t) - \lambda \cdot \text{Counterweight}_i(t)
$$

## Description
The weight of a component ($w_i$) at the next time step is updated based on its current value, agency, emotion, and a counterweight, each scaled by parameters $\gamma$, $\delta$, and $\lambda$.

## Relation to the Grand Assumption
This equation models the adaptive, evolving nature of systems, where weights (influence, importance) change dynamically in response to internal and external factors.

## Predictive Science
- Predicts how the influence of different components will evolve over time.
- Provides a tool for modeling adaptive, learning, or evolving systems in both physics and narrative.

## How to Test
- Physics: Apply to models of adaptive networks, learning systems, or evolving universes.
- Narrative: Use in story engines to simulate dynamic changes in narrative importance or influence.

---

## References

- [LAW_OF_AGENCY.md](../laws/LAW_OF_AGENCY.md) — agency $\gamma$ parameter drives weight evolution
- [LAW_OF_RECURSION.md](../laws/LAW_OF_RECURSION.md) — dynamic feedback loop is the mechanism of weight updating
- [EQ5_NARRATIVE_MODEL_WEIGHTS.md](EQ5_NARRATIVE_MODEL_WEIGHTS.md) — the static weights that this equation makes dynamic
- [EQ8_FEEDBACK_EQUATION.md](EQ8_FEEDBACK_EQUATION.md) — feedback coherence equation this informs
- [EMOTIONAL_STATES_AND_ALGORITHMS.md](EMOTIONAL_STATES_AND_ALGORITHMS.md) — emotion $\delta$ parameter drives emotional weighting
- [MASTER_EQUATION_META_NARRATIVE.md](MASTER_EQUATION_META_NARRATIVE.md) — dynamic weights feed into overall system health

---

_Open for future expansion and respectful debate._
