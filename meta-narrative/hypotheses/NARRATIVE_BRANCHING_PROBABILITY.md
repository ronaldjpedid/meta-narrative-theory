# Narrative Branching Probability (Mathematical Model)

Let $S_0$ be the base reality seed. At each narrative decision point $k$, the probability of branching into a new narrative thread $b_k$ can be modeled as:

$$
P(b_k) = f(\text{Agency}_k, \text{Coherence}_k, \text{Stability}_k, \text{Observer}_k)
$$

Where:
- $\text{Agency}_k$: The sum of agency exercised at branch $k$.
- $\text{Coherence}_k$: Narrative coherence at branch $k$.
- $\text{Stability}_k$: Emergent stability at branch $k$.
- $\text{Observer}_k$: Number and engagement of observers at branch $k$.
- $f$ is a function (e.g., weighted sum, logistic, or Markov process) that determines the likelihood of a branch forming.

**Example (weighted sum):**
$$
P(b_k) = \sigma(w_1 \cdot \text{Agency}_k + w_2 \cdot \text{Coherence}_k + w_3 \cdot \text{Stability}_k + w_4 \cdot \text{Observer}_k)
$$
Where $\sigma$ is a sigmoid function to keep $P(b_k)$ in $[0,1]$.

---

*This model formalizes how narrative branching is influenced by agency, coherence, stability, and observer participation.*
