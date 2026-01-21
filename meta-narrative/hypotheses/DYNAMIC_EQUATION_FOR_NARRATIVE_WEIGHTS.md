# Dynamic Equation for Evolving Narrative Weights

Let $w_i(t)$ be the narrative weight (influence) of participant $i$ at time $t$.

A dynamic update equation can be modeled as:

$$
w_i(t+1) = w_i(t) + \gamma \cdot \text{Agency}_i(t) + \delta \cdot \text{Emotion}_i(t) - \lambda \cdot \text{Counterweight}_i(t)
$$

Where:
- $w_i(t+1)$: Updated weight for participant $i$.
- $w_i(t)$: Current weight.
- $\text{Agency}_i(t)$: Agency exercised by $i$ at time $t$ (actions, choices).
- $\text{Emotion}_i(t)$: Emotional polarity (positive or negative) expressed by $i$ at time $t$.
- $\text{Counterweight}_i(t)$: Stabilizing or opposing forces acting on $i$ (e.g., checks, narrative resistance).
- $\gamma, \delta, \lambda$: Coefficients tuning the influence of agency, emotion, and counterweights.

**Interpretation:**
- Narrative weights evolve as a function of agency, emotion, and counterbalancing forces.
- Positive agency and emotion increase influence; counterweights reduce it.

---

*This equation formalizes how narrative influence is dynamic, shaped by ongoing actions, emotions, and systemic checks.*
