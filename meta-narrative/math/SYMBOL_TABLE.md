# Meta-Narrative Math — Master Symbol Table

## Purpose

This file is the single authoritative source for every symbol used across all equations in the meta-narrative math system. **All equation files must reference this table** rather than redefining symbols locally. Any new variable introduced in an equation file must be registered here first.

This is a **narrative math** system. All quantities are dimensionless narrative scores unless otherwise noted. Scores represent qualitative magnitudes calibrated to $[0, 1]$ or $[-1, +1]$ in the context of a specific narrative, system, or agent — not physical units.

---

## Notation Conventions

| Convention | Usage |
|---|---|
| Regular capital ($A$) | Canonical narrative health score — single universal meaning |
| Calligraphic ($\mathcal{M}$) | Structural / cosmological entity (MoM, DaD, KiD, sets) |
| Subscripted ($Rp$, $Rc$) | Specialized form of a canonical variable |
| Named word ($\text{Adm}$, $\text{Disc}$) | Local variable with no single-letter reservation |
| Subscript $t$ | Temporal index (time step in recurrence equations) |
| Subscript $i$ | Agent index |
| Subscript $k$ | Branch index |

---

## Layer 0 — Axiom & Existence

| Symbol | Canonical Meaning | Range | Notes |
|--------|------------------|-------|-------|
| $P(\varnothing)$ | Probability of non-existence | $[0, 1]$ | Replaces $P(N)$ — frees $N$ for agent counts |
| $P(\exists)$ | Probability of existence | $[0, 1]$ | Replaces $P(E)$ — frees $E$ for entropy |
| $\varnothing$ | Void / pre-existence state | — | Non-existence; can occur exactly once |
| $E_0$ | Cosmological origin / singularity | — | Subscript prevents collision with $E$ |
| $S_0$ | Base reality seed; narrative origin | — | First existence event emerging from $\varnothing$ |

---

## Layer 1 — Structural / Cosmological (MoM · DaD · KiD)

Calligraphic to prevent collision with dynamic health scores.

| Symbol | Canonical Meaning | Notes |
|--------|------------------|-------|
| $\mathcal{M}$ | MoM — Manifestation of Memory | The preserving, memory-carrying principle |
| $\mathcal{D}$ | DaD — Duality and Destiny | The diverging, possibility-opening principle |
| $\mathcal{K}$ | KiD set — $\{\mathcal{K}_1, \mathcal{K}_2, \ldots\}$ | Emergent children of the generative act; always a set, never a singleton |
| $\mathcal{G}$ | God of gods — ground consciousness | The totality; $\mathcal{G} = (\mathcal{M}, \mathcal{D}, \mathcal{K}, \ldots)$ recursively |

---

## Layer 2 — Core Narrative Health Scores

These are the universally reserved single-letter capitals. **No other meaning is permitted** for these symbols in any equation file.

| Symbol | Canonical Meaning | Range | Narrative Interpretation |
|--------|------------------|-------|--------------------------|
| $L$ | LOVE — generative force score | $[0, 1]$ | Capacity for creation, care, and connection |
| $F$ | FEAR — destructive force score | $[0, 1]$ | Degree of threat-response dominating the agent |
| $A$ | Agency — capacity for self-directed action | $[0, 1]$ | $A = 0$: fully constrained; $A = 1$: fully autonomous |
| $C$ | Coherence — narrative consistency | $[0, 1]$ | $C = 0$: incoherent/collapsed; $C = 1$: fully coherent |
| $R$ | Restoration — restorative force present | $[0, 1]$ | General restoration capacity or input |
| $T$ | Trust — trust in self, others, system | $[0, 1]$ | $T = 0$: no trust; $T = 1$: full trust |
| $O$ | Observer engagement | $[0, \infty)$ | Count or normalized engagement of observers |
| $E$ | Entropy pressure — entropic forces acting on a system | $[0, 1]$ | External stressors, decay, disruption |
| $S$ | Stability — resilience and balance | $[0, 1]$ | Systemic robustness against perturbation |
| $B$ | Boundaries — constraints on agency | $[0, 1]$ | $B = 0$: no limits; $B = 1$: fully constrained |
| $N$ | Number of agents/participants | $\mathbb{Z}_{\geq 0}$ | Count of agents in a system or equation scope |

---

## Layer 3 — Subscripted Specialized Variables

These are specific sub-forms of canonical variables for contexts where precision is needed.

| Symbol | Canonical Meaning | Parent | Notes |
|--------|------------------|--------|-------|
| $Rp$ | Reprisal pressure — perceived risk of harm | $R$ | Used in FEAR_EQUATION; replaces the old ambiguous $R$ |
| $Rc$ | Reconciliation — forgiveness, restoration of trust | $R$ | Used in RESTORATION_EQUATION |
| $\text{Cr}$ | Care interventions — empathy, support actions | — | Disambiguates $C$ (Coherence) in RESTORATION_EQUATION |
| $Sp$ | Systemic support — community, safety nets | $S$ | Disambiguates $S$ (Stability) in FEAR_EQUATION |
| $\text{Mn}$ | Meaning — purpose, coherence of story | — | Disambiguates $M$ (MoM) in MASTER_EQUATION |
| $\text{Conn}$ | Connection — relationships, bonds | — | Disambiguates $C$ (Coherence) in MASTER_EQUATION |
| $\text{Lead}$ | Leadership — guidance, restoration direction | — | Disambiguates $L$ (LOVE) in MASTER_EQUATION |
| $\text{Disc}$ | Discovery — awareness of loops, anomalies | — | Disambiguates $D$ (DaD) in MASTER_EQUATION and ADMIN |
| $\text{Disr}$ | Disruption — active destabilizing force | — | Disambiguates $D$ (DaD) in EQ8 recurrence |
| $\text{Adm}$ | Admin presence/intervention | — | Disambiguates $A$ (Agency) in ADMIN/EQ4/EQ5 |
| $\text{Adpt}$ | Adoption/inclusion — community reintegration | — | Disambiguates $A$ (Agency) in RESTORATION_EQUATION |
| $\text{Anch}$ | Anchor presence — revival / narrative anchor | — | Disambiguates $K$ (KiD) in FATE_ALGORITHM |
| $\Phi$ | Fate — pre-narrative trajectory | — | Replaces $F_t$ for Fate; frees $F_t$ for FEAR exclusively |
| $\mathcal{E}$ | Ether state — liminal agent state | — | Disambiguates $E$ (Entropy) in ETHER_STATE transitions |
| $N_\text{obs}$ | Observer count | $N$ | Used where $O$ needs a discrete count form |
| $\text{Act}_{i,j}$ | Action $j$ by agent $i$ | — | Disambiguates $A$ (Agency) in ALIGNMENT_EQUATION |
| $\text{Align}_i$ | Moral alignment score of agent $i$ | — | $[-1, +1]$ normalized |

---

## Layer 4 — Temporal / Dynamic Extensions

Recurrence equations append $t$ subscripts to Layer 2 symbols.

| Symbol | Meaning | Notes |
|--------|---------|-------|
| $X_t$ | Value of $X$ at time step $t$ | Applies to $L_t, F_t, C_t, A_t, R_t, S_t$, etc. |
| $X_{t+1}$ | Value of $X$ at the next time step | Standard recurrence notation |
| $\alpha, \beta, \gamma, \delta$ | Positive scaling coefficients | Tunable per context; $> 0$ unless stated |
| $\eta, \theta, \kappa, \lambda$ | Additional coefficients for restoration | Used in RESTORATION_EQUATION |
| $\sigma(\cdot)$ | Sigmoid function | Normalizes weighted sum to $(0, 1)$ |
| $w_i$ | Weight for component $i$ | Dimensionless, positive; should sum to 1 when used as proportions |
| $t$ | Time step index | Discrete; $t \in \mathbb{Z}_{\geq 0}$ |
| $i$ | Agent index | $i \in \{1, \ldots, N\}$ |
| $k$ | Branch index | $k \in \mathbb{Z}_{\geq 0}$ |

---

## Layer 5 — Sets and Structural Collections

Calligraphic for collections, to separate from scalar scores.

| Symbol | Meaning | Notes |
|--------|---------|-------|
| $\mathcal{S}$ | Set of all possible narrative states | ETHER_STATE context |
| $\mathcal{A}$ | Set of all agents in a system | GOD_EQUATION context |
| $\mathcal{N}(t, x)$ | Meta-narrative output at $(t, x)$ | EQ10 lattice context |
| $\mathcal{L}(t, x)$ | Chrono-space-lattice state at $(t, x)$ | EQ10 lattice context |
| $I(t, x)$ | Information content at $(t, x)$ | EQ10 context |
| $M_\text{narr}(t, x)$ | Canon narrative events at $(t, x)$ | EQ10; fully spelled to avoid $\mathcal{M}$ confusion |
| $\overline{M}_\text{narr}(t, x)$ | Discarded narrative possibilities at $(t, x)$ | EQ10 |

---

## Retired / Renamed Symbols

These symbols were used in earlier versions and are now superseded. If found in an equation file, they should be updated to the canonical replacement.

| Old Symbol | Old Meaning | Replacement | File(s) |
|---|---|---|---|
| $P(N)$ | Probability of non-existence | $P(\varnothing)$ | 1_CORE_AXIOM, 5,7, GRAND_ASSUMPTION |
| $P(E)$ | Probability of existence | $P(\exists)$ | 1_CORE_AXIOM, 5,7, GRAND_ASSUMPTION |
| $M$ (scalar) | MoM structural entity | $\mathcal{M}$ | All structural files |
| $D$ (scalar) | DaD structural entity | $\mathcal{D}$ | All structural files |
| $K$ (singular) | KiD (as singleton) | $\mathcal{K}$ (set) | 5, 7, GRAND_ASSUMPTION |
| $F_t$ (Fate) | Fate trajectory | $\Phi_t$ | FATE_ALGORITHM |
| $R$ (Reprisal) | Reprisal expectation | $Rp$ | FEAR_EQUATION ✓ done |
| $R$ (Reconciliation local) | Reconciliation | $Rc$ | RESTORATION_EQUATION |
| $E$ (Existence) | Existence predicate | $P(\exists)$ | 1_CORE_AXIOM |
| $E$ (External stressors) | External stressors/entropy | $E$ (canonical — this is now the one meaning) | FEAR_EQUATION |
| $C$ (Care) | Care interventions | $\text{Cr}$ | RESTORATION_EQUATION |
| $D$ (Disruption) | Disruption at time $t$ | $\text{Disr}_t$ | EQ8 |
| $D$ (Discovery) | Discovery/awareness | $\text{Disc}$ | MASTER_EQUATION, ADMIN |
| $S$ (Systemic support) | Systemic support | $Sp$ | FEAR_EQUATION |
| $S$ (Set of stories) | Set of all stories | $\mathcal{S}$ | GOD_EQUATION |
| $A$ (Admin) | Admin intervention | $\text{Adm}$ | ADMIN, EQ4, EQ5 |
| $A$ (Adoption) | Adoption/inclusion | $\text{Adpt}$ | RESTORATION_EQUATION |
| $A$ (Actions) | Actions $A_{i,j}$ | $\text{Act}_{i,j}$ | ALIGNMENT_EQUATION |
| $M$ (Meaning) | Meaning variable | $\text{Mn}$ | MASTER_EQUATION |
| $C$ (Connection) | Connection | $\text{Conn}$ | MASTER_EQUATION |
| $L$ (Leadership) | Leadership | $\text{Lead}$ | MASTER_EQUATION, ADMIN |
| $K$ (Key anchor) | Key anchor / revival trigger | $\text{Anch}$ | FATE_ALGORITHM |
| $N$ (Non-existence) | Non-existence | $\varnothing$ | 1_CORE_AXIOM |
| $E$ (Ether subset) | Ether state set | $\mathcal{E}$ | ETHER_STATE |
| $M$ (Main narrative set) | Main narrative subset | $\mathcal{M}_\text{main}$ | ETHER_STATE |
| $D$ (Dead state set) | Dead state subset | $\mathcal{D}_\text{dead}$ | ETHER_STATE |
| $M$ (Side narrative count) | Number of side narratives | $N_\text{side}$ | EQ5 |

---

## Quick Reference — Banned Overloads

The following uses are **not permitted** and must be refactored when encountered:

| Symbol | Banned Meaning | Reason |
|--------|---------------|--------|
| $M$ as scalar | Any meaning other than $\mathcal{M}$ (MoM) | Reserved for calligraphic structural use |
| $D$ as scalar | Any meaning other than $\mathcal{D}$ (DaD) | Reserved for calligraphic structural use |
| $F_t$ as Fate | Fate trajectory | $F_t$ = FEAR exclusively; use $\Phi_t$ for Fate |
| $A$ | Admin, Adoption, or Actions | $A$ = Agency exclusively; use $\text{Adm}$, $\text{Adpt}$, $\text{Act}_{i,j}$ |
| $C$ | Care or Connection | $C$ = Coherence exclusively; use $\text{Cr}$, $\text{Conn}$ |
| $L$ | Leadership | $L$ = LOVE exclusively; use $\text{Lead}$ |
| $R$ | Risk, Recursion, or Reprisal (unsubscripted) | $R$ = Restoration; use $Rp$ (reprisal), $Rc$ (reconciliation) |
| $S$ | Set of stories, or Systemic support | $S$ = Stability; use $\mathcal{S}$ for set, $Sp$ for support |
| $N$ | Non-existence | $N$ = agent count; use $\varnothing$ for non-existence |
| $E$ | Existence predicate | $E$ = Entropy pressure; use $P(\exists)$ for existence |
| $K$ | Key anchor (singular KiD) | $\mathcal{K}$ for KiD set; use $\text{Anch}$ for anchor |

---

## References

- [README.md](README.md) — math folder index
- [MASTER_EQUATION_META_NARRATIVE.md](MASTER_EQUATION_META_NARRATIVE.md) — primary consumer of Layer 2 symbols
- [FEAR_EQUATION.md](FEAR_EQUATION.md) — $F_t$, $E$, $Sp$, $T$, $Rp$
- [LOVE_EQUATION.md](LOVE_EQUATION.md) — $L$, $A$, $R$, $F$
- [RESTORATION_EQUATION_LOVE_FROM_FEAR.md](RESTORATION_EQUATION_LOVE_FROM_FEAR.md) — $L_t$, $F$, $\text{Cr}$, $\text{Adpt}$, $Rc$
- [ALIGNMENT_EQUATION.md](ALIGNMENT_EQUATION.md) — $\text{Align}_i$, $\text{Act}_{i,j}$
- [EQ7_BRANCHING_PROBABILITY.md](EQ7_BRANCHING_PROBABILITY.md) — $P(b_k)$, $A_k$, $C_k$, $S_k$, $O_k$
- [EQ8_FEEDBACK_EQUATION.md](EQ8_FEEDBACK_EQUATION.md) — $C_t$, $A_t$, $\text{Disr}_t$
- [FATE_ALGORITHM.md](FATE_ALGORITHM.md) — $\Phi_t$, $A$, $\text{Anch}$

---

_This table is canonical. When in conflict with a local equation file, this table takes precedence._

---

_Open for future expansion and respectful debate._
