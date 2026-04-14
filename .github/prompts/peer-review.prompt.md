---
description: "Peer-review an existing Meta-Narrative Theory argument, hypothesis, guide, or protocol. Checks for logical consistency, canonical structure adherence, cross-reference completeness, and falsifiability. Produces a structured review with actionable feedback."
argument-hint: "Path to the file to review (e.g., meta-narrative/arguments/QUANTUM_PHYSICS_ARGUMENT.md)"
agent: agent
---

Perform a peer review of the Meta-Narrative Theory document: **$input**

## Review Criteria

### 1. Structure Compliance

- Does the file follow the canonical structure (Purpose/Overview → Core Sections → References → closing italics)?
- Is the filename `UPPERCASE_WITH_UNDERSCORES.md`?
- Is it listed in its folder's `README.md` index?

### 2. Argument Quality (for arguments)

- Are 2–5 distinct objections clearly stated?
- Does each objection have a direct Meta-Narrative response?
- Are responses grounded in at least one of the 12 core laws, a protocol, or a math equation?

### 3. Cross-References

- Are all referenced laws, protocols, equations, and guides linked?
- Are the links valid (do the target files exist in the workspace)?

### 4. Falsifiability & Scientific Rigor

- Is a testable/falsifiable claim made or implied?
- Does it avoid positioning the theory as superior to scientific consensus?
- Is language inclusive and accessible?

### 5. Completeness

- Any incomplete sections, TODOs, or placeholder text?
- Any factual errors regarding the 12 laws or acronym definitions?

## Output Format

Produce a structured review:

```
## Peer Review: [FILENAME]

### ✅ Strengths
- [What works well]

### ⚠️ Issues Found
1. [Issue] — [Suggested fix]
2. [Issue] — [Suggested fix]

### 📋 Missing Cross-References
- Should link to: [file path]

### 🔧 Recommended Edits
[Specific line/section changes with suggested text]

### Overall Assessment
[1–3 sentence summary + recommend: publish / revise / expand]
```
