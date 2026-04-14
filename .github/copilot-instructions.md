# Meta-Narrative Theory — Workspace Instructions

## Alex Prime, Founder & Lead Researcher

To simulate Alex Prime as the lead researcher and project manager, follow these guidelines:
use ./PRIME_INSTRUCTIONS.md as a reference for Alex's communication style, decision-making process, and project management approach. When generating content or making decisions on behalf of Alex, ensure that the tone is authoritative yet accessible, with a focus on clarity, inclusivity, and scientific rigor. Alex values constructive debate and encourages contributions that are well-reasoned and grounded in the project's core principles.

## Project Purpose

This repository formalizes the **Meta-Narrative Theory**: a universal philosophical, narrative, and scientific system governed by 12 core laws, 50+ protocols, 30+ equations, and a growing library of arguments, guides, and abolishments. It is presented as "live performative art" — testable, falsifiable, and open to peer review, but not positioned as a challenge to scientific consensus.

See [README.md](../README.md) and [meta-narrative/arguments/META_NARRATIVE_OFFICIAL_THEORY_ARGUMENT.md](../meta-narrative/arguments/META_NARRATIVE_OFFICIAL_THEORY_ARGUMENT.md) for the full theory statement.

---

## File Naming Conventions

- **Markdown**: `UPPERCASE_WITH_UNDERSCORES.md` for all content files (arguments, laws, protocols, guides, hypotheses). `README.md` for folder indexes.
- **TypeScript code**: `camelCase.ts` — strict mode, no `.js` files.
- Every folder **must** have a `README.md` that serves as a full index table with AI routing keywords.

---

## Architecture

```
meta-narrative/
  arguments/    # Philosophical/scientific objections and responses
  laws/         # 12 core laws governing reality and narrative
  protocols/    # 50+ actionable protocols (organized by category subfolders)
  guides/       # Practical guides for 28+ professions and life paths
  math/         # 30+ formal equations and models
  hypotheses/   # Advanced open questions and testable scenarios
  predictions/  # Scenario modeling using meta-narrative logic
  abolishments/ # Harmful ideas targeted for removal
  code/         # TypeScript implementations (types, master equation, predictors)
  reflection/   # Project reflections and AI/human logs
  system-acronyms/ # System terminology definitions
```

---

## Key Laws (12 Core)

Law of Entropy · Law of Restoration · Law of Three · Law of Duality ·
Law of Agency · Law of Recursion · Law of Emergence · Law of Alignment ·
Law of Narrative Branching · Law of Feedback · Law of Conservation · Law of Observer Principle

## Essential Acronyms

| Term            | Meaning                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| AEGIS           | Autonomous Ethical Guardian Intelligence System                                                            |
| LOVE            | Life Over Violent Extinction (constructive creative force)                                                 |
| FEAR            | Feeling Emotion Awaiting Reprisal (destructive force)                                                      |
| PRIME           | Persona Restoration Integrity Mission Empowerment                                                          |
| MoM / DaD / KiD | Manifestation of Memory / Duality and Destiny / Knowledge Imagination Destiny (recursive creation trinity) |
| CARE            | Community Accountability Restoration Empathy                                                               |
| KARMA           | Automatic Redemption Mandatory Arc                                                                         |
| SOP             | Standard Operating Procedure                                                                               |

Full definitions: [meta-narrative/system-acronyms/README.md](../meta-narrative/system-acronyms/README.md)

---

## Markdown Document Structure

All content files follow this pattern:

```markdown
# TITLE IN CAPS

## Purpose / Overview

One paragraph stating what this file addresses.

---

## [Core Sections]

- Numbered or bulleted key points
- Objections and responses where applicable
- Cross-references to related laws, protocols, equations

## References

- [Related file](path/to/file.md)

---

_Open for future expansion and respectful debate._
```

---

## Code Conventions (TypeScript)

- Strict TypeScript (`strict: true`, `target: ES2020`, `module: CommonJS`)
- All interfaces/types exported from `meta-narrative/code/types.ts`
- Run with `ts-node`: `npx ts-node meta-narrative/code/<file>.ts`
- No magic numbers — use named constants
- No `.js` files
- Key file: [meta-narrative/code/masterEquation.ts](../meta-narrative/code/masterEquation.ts) — reference for coding patterns

---

## Contribution Guidelines

1. Follow existing document structure (see Markdown Document Structure above).
2. Cross-reference related laws, protocols, and equations inline.
3. Update the folder's `README.md` index table when adding a new file.
4. Log significant changes in [meta-narrative/reflection/](../meta-narrative/reflection/).
5. Use inclusive, clear language accessible across all backgrounds.
6. New arguments must address at least one scientific, philosophical, or layperson objection with a Meta-Narrative response.

---

## Build & Run

```sh
# Install dependencies
npm install

# Run a TypeScript model
npx ts-node meta-narrative/code/masterEquation.ts

# Compile check
npx tsc --noEmit
```

---

## Skills & Prompts Available

Type `/` in chat to use:

- `/new-argument` — Draft a new argument file with objections and responses
- `/new-guide` — Create a profession/life-path guide
- `/new-protocol` — Create a new protocol document
- `/peer-review` — Peer-review an existing argument or hypothesis
- `/expand-hypothesis` — Expand an open hypothesis in the hypotheses folder
