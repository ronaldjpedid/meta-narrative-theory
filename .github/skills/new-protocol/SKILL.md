---
name: new-protocol
description: "Create a new Meta-Narrative Theory protocol document. Use when: formalizing a new actionable protocol, writing rules for a specific situation (family, conflict, work, cosmic law, ritual, etc.), or adding to the protocols library. Produces a complete UPPERCASE_PROTOCOL.md file in the correct meta-narrative/protocols/ subcategory folder."
argument-hint: 'Name the protocol and its category (e.g., "sibling conflict resolution, family")'
---

# New Protocol Skill

## When to Use

- User asks to formalize a new protocol
- User describes a scenario that needs structured rules or guidance
- User wants to extend the protocols library with a new domain

## Protocol Categories (choose appropriate subfolder)

| Subfolder                  | Examples                                      |
| -------------------------- | --------------------------------------------- |
| `family/`                  | Parenting, couples, sibling dynamics          |
| `children/`                | Child agency, defense, teaching               |
| `cosmic-law/`              | Justice, redemption, transparency, corruption |
| `sport-fairness/`          | Athletic fairness, self-defense               |
| `work-wealth-achievement/` | Work, wealth, recognition                     |
| `wellbeing-relationships/` | Love, consent, forgiveness, friendship        |
| `rituals/`                 | Birth, death, union, restoration rituals      |
| `technology-ai-ethics/`    | AI guardianship, digital ethics               |

## Procedure

### 1. Gather Requirements

Identify:

- **Topic**: What situation or behavior does this protocol govern?
- **Category**: Which subfolder does it belong in?
- **Triggering conditions**: When should this protocol activate?
- **Agents involved**: Who/what does this apply to?

### 2. Check for Existing Protocols

Search [meta-narrative/protocols/README.md](../../meta-narrative/protocols/README.md). Extend rather than duplicate.

### 3. Draft the File

Use this structure:

```markdown
# [NAME] PROTOCOL

## Purpose

What this protocol governs and why it exists within the Meta-Narrative framework.

---

## Triggering Conditions

- When [situation A] occurs...
- When [situation B] occurs...

---

## Protocol Steps

1. **Step 1 — [Name]:** Description. Reference: [Law of X](../../meta-narrative/laws/...).
2. **Step 2 — [Name]:** Description.
3. **Step 3 — [Name]:** Description.

(3–7 steps)

---

## Outcomes & Success Criteria

- [Outcome 1]: How to verify the protocol succeeded.
- [Outcome 2]: ...

---

## Failure Conditions & Escalation

- If [failure condition]: escalate to [REDEMPTION_ARC_PROTOCOL](../../meta-narrative/protocols/cosmic-law/REDEMPTION_ARC_PROTOCOL.md) or [relevant protocol].

---

## References

- [Related Protocol](...)
- [Relevant Law](../../meta-narrative/laws/...)
- [Relevant Math](../../meta-narrative/math/...)

---

_This protocol is open for refinement and respectful debate._
```

### 4. Name the File

Pattern: `[DESCRIPTIVE_NAME]_PROTOCOL.md` in the correct subfolder.
Example: `meta-narrative/protocols/family/SIBLING_CONFLICT_PROTOCOL.md`

### 5. Update the README

Add a row with AI routing keywords to [meta-narrative/protocols/README.md](../../meta-narrative/protocols/README.md).
