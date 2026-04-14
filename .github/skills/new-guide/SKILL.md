---
name: new-guide
description: "Create a Meta-Narrative Theory guide for a specific profession, life path, or demographic. Use when: writing a life guide, drafting a how-to for a new profession, creating guidance for healers/parents/activists/entrepreneurs/etc. Produces a complete GUIDE_FOR_X.md file in meta-narrative/guides/ following the canonical format with principles, practical insights, and inspiration."
argument-hint: 'Name the profession, role, or audience (e.g., "nurses", "refugees", "gamers")'
---

# New Guide Skill

## When to Use

- User asks to create a new life-path or profession guide
- User identifies an audience not yet represented in `meta-narrative/guides/`
- User wants to apply Meta-Narrative principles to a specific group

## Procedure

### 1. Gather Requirements

Ask (or infer):

- **Audience**: Who is this guide for? (profession, demographic, situation)
- **Key challenges**: What unique challenges does this group face?
- **Relevant laws/protocols**: Which of the 12 laws apply most directly?

### 2. Check for Existing Guides

Review [meta-narrative/guides/README.md](../../meta-narrative/guides/README.md). Avoid duplication — suggest extending an existing guide if very similar.

### 3. Draft the File

Use this canonical structure:

```markdown
# GUIDE FOR [AUDIENCE]

## Purpose

Who this guide is for and what it helps them do within the Meta-Narrative framework.

---

## Meta-Narrative Principles for [Audience]

### 1. [Principle Name] — Law of [X]

Description of how this law/principle applies to this audience.

### 2. [Principle Name] — Law of [X]

...

(3–6 principles)

---

## Practical Insights

- **[Insight 1]:** Concrete, actionable advice.
- **[Insight 2]:** Concrete, actionable advice.
- **[Insight 3]:** ...

(4–7 insights)

---

## Relevant Protocols

- [Protocol Name](../../meta-narrative/protocols/category/PROTOCOL_NAME.md) — how it applies.

---

## Inspiration

A short motivational paragraph connecting this audience to the larger Meta-Narrative mission.

---

## References

- [Related Guide](...)
- [Relevant Law](../../meta-narrative/laws/...)

---

_Open for future expansion. Every path matters in the meta-narrative._
```

### 4. Name the File

Pattern: `GUIDE_FOR_[AUDIENCE_IN_CAPS].md` — e.g., `GUIDE_FOR_NURSES.md`.

### 5. Update the README

Add a row to [meta-narrative/guides/README.md](../../meta-narrative/guides/README.md) with the file link and a 1-line description.
