
export const SAMPLE_INPUT = `Aayush, चलिए Sheldon M. Ross की book का Section 1.3 "Probabilities Defined on Events" को, आपके format के अनुसार, line-by-line समझते हैं।

---

## 1.3 Probabilities Defined on Events (Events पर परिभाषित Probability)

**Original Text:**
> Consider an experiment whose sample space is S. For each event E of the sample space S, we assume that a number P(E) is defined and satisfies the following three conditions:

📖 Hinglish Explanation:
\`मान\` \`लीजिए\` \`कोई\` experiment \`है\` \`जिसका\` sample space $S$ \`है\`। $S$ \`के\` \`हर\` event $E$ \`के\` \`लिए\`, \`हम\` \`मानते\` \`हैं\` \`कि\` \`एक\` number $P(E)$ ( \`जिसे\` probability \`कहते\` \`हैं\`) defined \`है\`, \`जो\` \`नीचे\` \`दी\` \`गई\` \`तीन\` conditions \`को\` satisfy \`करता\` \`है\`:

---

**Original Text:**
> (i) $0 \\le P(E) \\le 1$.

📖 Hinglish Explanation:
(i) \`किसी\` \`भी\` event $E$ \`की\` probability \`हमेशा\` 0 \`और\` 1 \`के\` \`बीच\` (या \`उनके\` \`बराबर\`) \`होगी\`।
* $P(E) = 0$ \`का\` \`मतलब\` \`है\` event impossible (असंभव) \`है\`।
* $P(E) = 1$ \`का\` \`मतलब\` \`है\` event certain (निश्चित) \`है\`।

---

**Original Text:**
> (ii) $P(S) = 1$.

📖 Hinglish Explanation:
(ii) \`पूरे\` sample space $S$ \`की\` probability 1 \`होती\` \`है\`। \`इसका\` \`मतलब\` \`है\` \`कि\` experiment \`का\` \`कोई\` \`न\` \`कोई\` outcome \`तो\` \`निश्चित\` \`रूप\` \`से\` \`आएगा\`।

---

**Original Text:**
> (iii) For any sequence of events $E_1, E_2, ...$ that are mutually exclusive, that is, events for which $E_nE_m = \\emptyset$ when $n \\ne m$, then
> $P\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) = \\sum_{n=1}^{\\infty} P(E_n)$

📖 Hinglish Explanation:
(iii) \`अगर\` \`हमारे\` \`पास\` events \`का\` \`कोई\` sequence \`है\` ($E_1, E_2, ...$) \`जो\` **mutually exclusive** \`हैं\` ( \`यानी\` \`कोई\` \`भी\` \`दो\` events \`एक\` \`साथ\` \`नहीं\` \`हो\` \`सकते\`, $E_nE_m = \\emptyset$), \`तो\` \`उनके\` **union** ( \`यानी\` $E_1$ \`या\` $E_2$ \`या\` $E_3$...) \`के\` \`होने\` \`की\` probability, \`उनकी\` individual probabilities \`के\` **sum** (जोड़) \`के\` \`बराबर\` \`होती\` \`है\`।

---

**Original Text:**
> We refer to P(E) as the probability of the event E.

📖 Hinglish Explanation:
\`हम\` $P(E)$ \`को\` event $E$ \`की\` probability \`कहते\` \`हैं\`।

---

### Examples

**Original Text:**
> **Example 1.1** In the coin tossing example, if we assume that a head is equally likely to appear as a tail, then we would have
> $P(\\{H\\}) = P(\\{T\\}) = 1/2$
> On the other hand, if we had a biased coin and felt that a head was twice as likely to appear as a tail, then we would have
> $P(\\{H\\}) = 2/3, P(\\{T\\}) = 1/3$

📖 Hinglish Explanation:
* **Example 1.1:** Coin toss \`के\` example \`में\`, \`अगर\` \`हम\` \`मानें\` \`कि\` coin "fair" \`है\` ( \`यानी\` Head \`और\` Tail \`आने\` \`का\` chance \`बराबर\` \`है\`), \`तो\` $P(\\{H\\}) = 1/2$ \`और\` $P(\\{T\\}) = 1/2$ \`होगा\`।
* \`वहीं\` \`दूसरी\` \`ओर\`, \`अगर\` \`हमारे\` \`पास\` \`एक\` "biased" (बेईमान) coin \`होता\`, \`जहाँ\` Head \`आने\` \`का\` chance Tail \`से\` double (दोगुना) \`होता\`, \`तो\` $P(\\{H\\}) = 2/3$ \`और\` $P(\\{T\\}) = 1/3$ \`होता\`।
* ( \`ध्यान\` \`दें\`, \`दोनों\` cases \`में\` $P(S) = P(\\{H\\}) + P(\\{T\\}) = 1$ \`हो\` \`रहा\` \`है\`, \`जो\` Axiom (ii) \`और\` (iii) \`को\` satisfy \`करता\` \`है\`)।

---

**Original Text:**
> **Example 1.2** In the die tossing example, if we supposed that all six numbers were equally likely to appear, then we would have
> $P(\\{1\\}) = P(\\{2\\}) = P(\\{3\\}) = P(\\{4\\}) = P(\\{5\\}) = P(\\{6\\}) = 1/6$
> From (iii) it would follow that the probability of getting an even number would equal
> $P(\\{2, 4, 6\\}) = P(\\{2\\}) + P(\\{4\\}) + P(\\{6\\}) = 1/2$

📖 Hinglish Explanation:
* **Example 1.2:** Die (पासा) \`फेंकने\` \`के\` example \`में\`, \`अगर\` \`हम\` \`मानें\` \`कि\` \`सभी\` 6 numbers equally likely \`हैं\` ( \`सबका\` chance \`बराबर\` \`है\`), \`तो\` \`हर\` \`एक\` number \`की\` probability $1/6$ \`होगी\`।
* Condition (iii) \`का\` \`इस्तेमाल\` \`करके\`, \`हम\` \`एक\` "even number" \`आने\` \`की\` probability \`निकाल\` \`सकते\` \`हैं\`।
* Event $E = \\{2, 4, 6\\}$ \`है\`। \`चूंकि\` $\\{2\\}$, $\\{4\\}$, \`और\` $\\{6\\}$ \`तीनों\` mutually exclusive events \`हैं\` (2 \`और\` 4 \`एक\` \`साथ\` \`नहीं\` \`आ\` \`सकते\`), \`हम\` \`उनकी\` probabilities \`को\` \`सीधे\` \`जोड़\` \`सकते\` \`हैं\`:
    $P(\\{2, 4, 6\\}) = P(\\{2\\}) + P(\\{4\\}) + P(\\{6\\}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$.`;
