# Alignment Equation: Good, Evil, Hero, Villain

## Equations
**Net Impact:**
$$
\text{Net Impact}_i = \sum_{j} w_{i,j} \cdot A_{i,j}
$$
If $\text{Net Impact}_i > 0$, agent $i$ is “good” (hero-aligned).
If $\text{Net Impact}_i < 0$, agent $i$ is “evil” (villain-aligned).

**Normalized Alignment Score:**
$$
\text{Alignment}_i = \frac{\sum_{j \in \text{restorative}} w_{i,j} \cdot A_{i,j} - \sum_{k \in \text{harmful}} |w_{i,k}| \cdot A_{i,k}}{\sum_{j} |w_{i,j}| \cdot |A_{i,j}|}
$$
$\text{Alignment}_i$ ranges from $-1$ (pure villain) to $+1$ (pure hero).

## Description
This equation quantifies the moral alignment of any agent by weighing their restorative and harmful actions. It provides a rigorous, extensible foundation for modeling good, evil, heroism, and villainy in any system.

## Relation to the Grand Assumption
As agency and choice unfold, alignment emerges as a measurable property of agents, shaping the evolution of stories and systems.

## Predictive Science
- Predicts the alignment of agents based on their actions and impact.
- Enables simulation and analysis of moral dynamics in narrative and real-world systems.

## How to Test
- Physics: Apply to models of social, biological, or artificial agents and measure emergent alignment.
- Narrative: Use in story engines to simulate and analyze the evolution of heroism and villainy.

---

## References

- [LAW_OF_ALIGNMENT.md](../laws/LAW_OF_ALIGNMENT.md) — the law this equation directly formalizes
- [LAW_OF_DUALITY.md](../laws/LAW_OF_DUALITY.md) — good/evil ($+1/-1$) alignment range derives from the LOVE/FEAR duality
- [LAW_OF_AGENCY.md](../laws/LAW_OF_AGENCY.md) — agent actions ($A_{i,j}$) require agency
- [LAW_OF_RECURSION.md](../laws/LAW_OF_RECURSION.md) — alignment scores feed back into narrative coherence
- [MASTER_EQUATION_META_NARRATIVE.md](MASTER_EQUATION_META_NARRATIVE.md) — alignment leadership variable ($L$) uses this equation
- [LOVE_EQUATION.md](LOVE_EQUATION.md) — restorative alignment maps to LOVE
- [FEAR_EQUATION.md](FEAR_EQUATION.md) — harmful alignment maps to FEAR
- [MORAL_ARGUMENT.md](../arguments/MORAL_ARGUMENT.md) — philosophical grounding for alignment as moral measure
- [META_NARRATIVE_OFFICIAL_THEORY_ARGUMENT.md](../arguments/META_NARRATIVE_OFFICIAL_THEORY_ARGUMENT.md) — alignment in the full theory

---

_Open for future expansion and respectful debate._
