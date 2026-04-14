# Meta-Narrative Predictions Index & Guide

This folder is dedicated to predictions, forecasts, and scenario modeling using the meta-narrative system. Each prediction demonstrates how the theory's equations, laws, and branching logic can be applied to anticipate outcomes — whether historical, modern, or speculative.

## Purpose
- To showcase the predictive power and testability of the meta-narrative theory.
- To provide worked examples of branching probability, feedback modeling, and the LOVE/FEAR axis applied to real events.
- To encourage experimentation, peer review, and refinement of predictions.

---

## Folder Structure

```
predictions/
  historical/   — Predictions applied to completed historical events (validatable)
  modern/       — Predictions applied to ongoing present-day events (falsifiable over time)
```

---

## Historical Predictions

| Prediction | Domain | Branches | Files |
|------------|--------|----------|-------|
| [Brutus & Caesar — Ides of March (44 BCE)](historical/BRUTUS_CAESAR_PREDICTION.md) | Ancient Rome / Political Betrayal | Betrayal (~82%) · Loyalty (~18%) | [.ts](historical/brutusCaesarPrediction.ts) · [result](historical/brutusCaesarPredictionResult.json) |

**Historical scenarios are fully validatable** — the prediction model can be judged against what actually occurred.

---

## Modern Predictions

| Prediction | Domain | Branches | Files |
|------------|--------|----------|-------|
| [ICE vs The People — America, Present Day](modern/ICE_VS_PEOPLE_PREDICTION.md) | Immigration enforcement / Solidarity | Solidarity Triumph · Escalation · Truth & Reconciliation · Stalemate | [.ts](modern/iceVsPeoplePrediction.ts) · [result](modern/iceVsPeoplePredictionResult.json) |

**Modern scenarios are open predictions** — live documents updated as outcomes evolve.

---

## How to Add a Prediction

1. Choose the appropriate subfolder: `historical/` for completed events, `modern/` for ongoing ones.
2. Create a TypeScript model file (e.g., `yourScenarioPrediction.ts`) following the pattern in `brutusCaesarPrediction.ts`.
3. Create a companion Markdown file (`YOUR_SCENARIO_PREDICTION.md`) documenting:
   - Scenario overview and question
   - Characters, agency, and emotion inputs
   - Branches modeled with relative probabilities
   - Meta-Narrative analysis citing equations and laws
   - Testability / falsification criteria
   - Cross-references
4. Add your prediction to this README index table.
5. Run `npx ts-node your-file.ts` and commit the result JSON.

---

## Equations Used in Predictions

| Equation | Role |
|----------|------|
| [EQ7 — Branching Probability](../math/EQ7_BRANCHING_PROBABILITY.md) | Calculates relative probability of each narrative branch |
| [EQ8 — Feedback Equation](../math/EQ8_FEEDBACK_EQUATION.md) | Models coherence accumulation and disruption events |
| [EQ6 — Observer Principle](../math/EQ6_OBSERVER_PRINCIPLE.md) | Weights observer impact on narrative trajectory |
| [LOVE Equation](../math/LOVE_EQUATION.md) | Quantifies constructive force |
| [FEAR Equation](../math/FEAR_EQUATION.md) | Quantifies destructive force |

---

## Contribution Guidelines
- Use clear, logical, testable reasoning.
- Reference relevant meta-narrative equations, laws, and protocols.
- Always include falsification criteria — predictions without them are not valid under the theory.
- Encourage peer review and discussion.

---

_Open for future expansion and respectful debate._
