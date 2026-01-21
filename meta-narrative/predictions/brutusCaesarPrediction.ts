// Brutus and Caesar meta-narrative prediction sample
// 🛡️ Mr Alex Prime
import {
  predictNarrative,
  Character,
  UniversalTruth,
  NarrativeBranch,
  GenericNarrativeInput,
} from "../code/metaNarrativePredictor.ts";

const brutusCaesarInput: GenericNarrativeInput = {
  scene: "The Ides of March",
  seed: "Rome, 44 BCE (Ides of March)",
  characters: [
    {
      name: "Caesar",
      agency: { value: 0.9, actor: "Caesar", actions: ["rule", "trust"] },
      emotion: { type: "Trust", value: 0.8 },
    },
    {
      name: "Brutus",
      agency: { value: 0.7, actor: "Brutus", actions: ["betray", "support"] },
      emotion: { type: "Conflict", value: 0.9 },
      choices: ["Betray", "Support"],
    },
    {
      name: "Conspirators",
      agency: { value: 0.6, actor: "Group", actions: ["plot"] },
      emotion: { type: "Fear", value: 0.7 },
    },
  ],
  universalTruths: [
    { statement: "Power invites challenge", weight: 1.0 },
    { statement: "Betrayal has consequences", weight: 0.9 },
  ],
  observers: ["Roman Senate", "public", "history"],
  branches: [
    {
      name: "Betrayal",
      formula: (p) =>
        0.7 * p["A_Brutus"] +
        0.9 * p["E_Brutus"] +
        1.0 * p["U_1"] +
        0.9 * p["U_2"],
      coherenceFormula: (p) =>
        1.0 * p["U_1"] +
        0.9 * p["U_2"] +
        0.7 * p["A_Brutus"] +
        0.9 * p["E_Brutus"],
      outcome:
        "Caesar is assassinated, Rome enters chaos, Brutus is a tragic figure.",
    },
    {
      name: "Loyalty",
      formula: (p) =>
        0.7 * p["A_Brutus"] + 0.1 * (1 - p["E_Brutus"]) + 0.5 * p["U_1"],
      coherenceFormula: (p) =>
        1.0 * p["U_1"] + 0.7 * p["A_Brutus"] + 0.9 * (1 - p["E_Brutus"]),
      outcome:
        "Caesar consolidates power, Brutus is loyal, Rome’s fate changes.",
    },
  ],
  metaDetails: {
    M: {
      value: 0.8,
      who: "Brutus",
      what: "choice",
      where: "Rome, 44 BCE (Ides of March)",
      why: "conflict of loyalty",
      how: "betrayal or support",
    },
    C: {
      value: 0.7,
      participants: ["Brutus", "Caesar"],
      type: "trust/conflict",
      strength: 0.7,
    },
    S: { value: 0.5, factors: ["political instability"] },
    R: {
      value: 0.9,
      description: "risk of betrayal",
      likelihood: 0.9,
      impact: 1.0,
    },
    D: { value: 0.8, insight: "Brutus must choose" },
    Ag: { value: 0.7, actor: "Brutus", actions: ["betray", "support"] },
    B: { value: 0.6, limits: ["loyalty", "ambition"] },
    L: { value: 0.7, leader: "Caesar", style: "autocratic" },
    O: { value: 3, roles: ["Roman Senate", "public", "history"] },
    UV: {
      value: 0.95,
      principles: ["Power invites challenge", "Betrayal has consequences"],
    },
  },
};

export const brutusCaesarPrediction = predictNarrative(brutusCaesarInput);
