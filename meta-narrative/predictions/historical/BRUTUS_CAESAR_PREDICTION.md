# PREDICTION: Brutus and Caesar — The Ides of March

## Scenario Overview

**Event:** The assassination of Julius Caesar, Rome, 44 BCE  
**Question:** Given the narrative forces in play, which branch — betrayal or loyalty — had higher probability of manifesting, and why?

---

## Characters & Input Values

| Agent | Agency | Dominant Emotion | Value |
|-------|--------|-----------------|-------|
| Caesar | 0.9 | Trust | 0.8 |
| Brutus | 0.7 | Internal Conflict | 0.9 |
| Conspirators | 0.6 | Fear | 0.7 |

**Observers:** Roman Senate, Public, History  
**Universal Truths Applied:**
1. Power invites challenge (weight: 1.0)
2. Betrayal has consequences (weight: 0.9)

---

## Branches Modeled

| Branch | Predicted Probability | Outcome |
|--------|----------------------|---------|
| **Betrayal** | ~0.82 | Caesar assassinated; Rome enters civil war; Brutus becomes tragic figure |
| **Loyalty** | ~0.18 | Caesar consolidates power; Brutus remains loyal; Rome's trajectory changes |

---

## Meta-Narrative Analysis

**Why Betrayal was the high-probability branch:**
- Brutus's conflict emotion (0.9) was the dominant force — very high unresolved internal tension is one of the strongest narrative branch drivers in EQ7.
- The Universal Truth "Power invites challenge" carried the maximum weight (1.0), amplifying all agency toward confrontation.
- Caesar's high trust (0.8) created a vulnerability — the narrative gap between Caesar's trust and the conspirators' fear set up maximum coherence for a betrayal arc.
- The Law of Narrative Branching predicts that unresolved tension with high-agency actors *must* discharge into action; loyalty would have required Brutus to resolve his conflict, which the inputs did not support.

**Law of Feedback (EQ8):** Caesar's narrative coherence had been built over decades of conquest and political maneuvering (high positive coherence accumulation). The assassination represents the disruption term overwhelming accumulated coherence in a single event — a catastrophic decoherence spike.

**Law of Restoration:** The aftermath (civil wars, Octavian's rise, the Pax Romana) represents the restoration arc predicted by the theory — systems disrupted by high-entropy betrayal events tend to seek new stability attractors.

---

## Testability

This is a validated historical prediction: the Betrayal branch manifested. The model's high probability assignment (0.82) is consistent with the actual outcome. The prediction would be *falsified* if models consistently assigned high probability to branches that did not materialize in the historical record.

---

## Code Implementation
- [brutusCaesarPrediction.ts](brutusCaesarPrediction.ts) — Full input parameters and branching formula
- [brutusCaesarPredictionResult.json](brutusCaesarPredictionResult.json) — Model output

---

## References
- [EQ7_BRANCHING_PROBABILITY.md](../../math/EQ7_BRANCHING_PROBABILITY.md)
- [EQ8_FEEDBACK_EQUATION.md](../../math/EQ8_FEEDBACK_EQUATION.md)
- [LAW_OF_NARRATIVE_BRANCHING.md](../../laws/LAW_OF_NARRATIVE_BRANCHING.md)
- [LAW_OF_RESTORATION.md](../../laws/LAW_OF_RESTORATION.md)
- [MASTER_EQUATION_META_NARRATIVE.md](../../math/MASTER_EQUATION_META_NARRATIVE.md)

---

*Open for peer review and alternative branching analysis.*
