// ICE vs The People: Meta-Narrative Prediction
// 🛡️ Mr Alex Prime
import { predictNarrative, GenericNarrativeInput } from "../../code/metaNarrativePredictor.ts";

const iceVsPeopleInput: GenericNarrativeInput = {
  scene: "America, Present Day",
  seed: "Current America: ICE vs The People",
  characters: [
    {
      name: "AmericanPeople",
      agency: { value: 0.85, actor: "The People", actions: ["organize", "support", "resist", "care"] },
      emotion: { type: "Solidarity", value: 0.95 },
      choices: ["Resist", "Comply", "Support Immigrants"]
    },
    {
      name: "ICEAgents",
      agency: { value: 0.7, actor: "ICE", actions: ["enforce", "detain", "deport", "intimidate"] },
      emotion: { type: "Fear/Control", value: 0.8 },
      choices: ["Enforce Strictly", "Show Leniency"]
    }
  ],
  universalTruths: [
    { statement: "Love and solidarity can overcome fear.", weight: 1.0 },
    { statement: "Systems of control provoke resistance.", weight: 0.9 },
    { statement: "Truth exposes injustice.", weight: 0.95 },
    { statement: "Exploitation breeds unrest.", weight: 0.85 }
  ],
  observers: ["Media", "Global Community", "History"],
  branches: [
    {
      name: "People's Solidarity Triumphs",
      formula: (p) => 0.9 * p["A_AmericanPeople"] + 1.0 * p["E_AmericanPeople"] + 1.0 * p["U_1"] + 0.95 * p["U_3"],
      coherenceFormula: (p) => 1.0 * p["U_1"] + 0.9 * p["A_AmericanPeople"] + 1.0 * p["E_AmericanPeople"],
      outcome: "Mass mobilization, legal victories, and community support weaken ICE's power. Policies shift toward justice and restoration."
    },
    {
      name: "ICE Escalates Control",
      formula: (p) => 0.8 * p["A_ICEAgents"] + 0.8 * p["E_ICEAgents"] + 0.9 * p["U_2"] + 0.85 * p["U_4"],
      coherenceFormula: (p) => 0.9 * p["U_2"] + 0.8 * p["A_ICEAgents"] + 0.8 * p["E_ICEAgents"],
      outcome: "ICE increases enforcement, sparking unrest and international condemnation. Resistance grows stronger over time."
    },
    {
      name: "Truth and Reconciliation",
      formula: (p) => 0.95 * p["U_3"] + 0.9 * p["A_AmericanPeople"] + 0.8 * (1 - p["E_ICEAgents"]),
      coherenceFormula: (p) => 1.0 * p["U_3"] + 0.9 * p["A_AmericanPeople"],
      outcome: "Investigations and public pressure lead to reforms, apologies, and healing. ICE is restructured or replaced."
    },
    {
      name: "Stalemate and Polarization",
      formula: (p) => 0.7 * p["A_AmericanPeople"] + 0.7 * p["A_ICEAgents"] - 0.5 * Math.abs(p["E_AmericanPeople"] - p["E_ICEAgents"]),
      coherenceFormula: (p) => 0.5 * (p["E_AmericanPeople"] + p["E_ICEAgents"]),
      outcome: "Society remains divided, with ongoing conflict and no clear resolution. Both sides experience fatigue."
    }
  ],
  metaDetails: {
    M: {
      value: 0.9,
      who: "The People",
      what: "struggle for justice",
      where: "America, Present Day",
      why: "defense of rights and dignity",
      how: "solidarity, truth, and resistance"
    },
    C: {
      value: 0.8,
      participants: ["AmericanPeople", "ICEAgents"],
      type: "conflict/solidarity",
      strength: 0.8
    },
    S: { value: 0.7, factors: ["media coverage", "legal action", "community support"] },
    R: {
      value: 0.85,
      description: "risk of escalation",
      likelihood: 0.8,
      impact: 0.9
    },
    D: { value: 0.9, insight: "Solidarity and truth are key" },
    Ag: { value: 0.85, actor: "The People", actions: ["organize", "support", "resist"] },
    B: { value: 0.7, limits: ["fear", "division"] },
    L: { value: 0.8, leader: "Community Leaders", style: "collaborative" },
    O: { value: 3, roles: ["Media", "Global Community", "History"] },
    UV: {
      value: 0.95,
      principles: ["Love and solidarity can overcome fear.", "Truth exposes injustice."]
    }
  }
};

export const iceVsPeoplePrediction = predictNarrative(iceVsPeopleInput);
