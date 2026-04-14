---
name: new-argument
description: "Draft a new Meta-Narrative Theory argument file. Use when: creating a new argument, responding to a scientific objection, addressing a philosophical challenge, writing a domain-specific counter-argument (quantum, Newtonian, religious, moral, etc.). Produces a complete UPPERCASE_WITH_UNDERSCORES.md file in meta-narrative/arguments/ following the canonical objections-and-response format."
argument-hint: 'Describe the domain or objection to address (e.g., "evolutionary biology", "moral nihilism")'
---

# New Argument Skill

## When to Use

- User asks to create a new argument document
- User asks to address a new scientific, philosophical, or layperson objection
- User asks to formalize a defense against a specific worldview or discipline

## Procedure

### 1. Gather Requirements

Ask the user (or infer from context):

- **Domain**: What discipline or worldview does this argument address? (e.g., neuroscience, Islam, existentialism, layperson skepticism)
- **Core objection(s)**: What are the 2–5 primary objections this domain raises against Meta-Narrative Theory?
- **Desired tone**: Academic / accessible / both

### 2. Check for Existing Arguments

Search `meta-narrative/arguments/` for similar files using [arguments README](../../meta-narrative/arguments/README.md). Avoid duplication — extend if a close match exists.

### 3. Draft the File

Use this exact structure:

```markdown
# [DOMAIN] AND META-NARRATIVE [SCIENCE/THEORY/ARGUMENT]

## Overview

One paragraph — what domain this addresses and why it matters to the theory.

---

## [Domain] Objections

- **[Objection 1 Name]:** Description of the challenge.
- **[Objection 2 Name]:** Description of the challenge.
- (2–5 objections total)

---

## Meta-Narrative Response

- [Response to Objection 1] — cite the relevant Law, Equation, or Protocol.
- [Response to Objection 2]
- Closing statement: the framework's openness to cross-disciplinary testing.

---

## References

- [Relevant Law file](../../meta-narrative/laws/...)
- [Relevant Math file](../../meta-narrative/math/...)
- [Relevant Protocol](../../meta-narrative/protocols/...)

---

_This document is open for future expansion and respectful debate as new insights arise._
```

### 4. Name the File

Use `UPPERCASE_WITH_UNDERSCORES.md`. Pattern: `{DOMAIN}_ARGUMENT.md` or `{DOMAIN}_{TOPIC}_ARGUMENT.md`.

### 5. Update the README

Add the new file to the index table in [meta-narrative/arguments/README.md](../../meta-narrative/arguments/README.md) with AI routing keywords.

### 6. Suggest a Reflection Log Entry

Offer to add a short note to `meta-narrative/reflection/` documenting the new contribution.
