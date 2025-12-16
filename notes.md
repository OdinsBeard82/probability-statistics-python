# Week 1: Basic Probability

This week is about **building intuition**.

On the surface, everything here looks *very basic*: coins, dice, numbers, circles.
But that’s kind of the point.

Probability isn’t about jumping straight into formulas or ML algorithms. It’s about learning how to **think clearly about uncertainty**. If this foundation is shaky, everything later (Bayes, distributions, models) becomes harder than it needs to be.

So even though this feels simple, it’s important to slow down and get your head in the *right mindset*.

---

## What Is Probability?

At its core, probability answers one question:

**How likely is something to happen?**

It’s always a number between **0 and 1**:

* **0** → impossible
* **1** → guaranteed

The basic definition:

> **Probability = (number of favourable outcomes) / (total possible outcomes)**

This only works cleanly when all outcomes are equally likely — which is why all the early examples are deliberately simple.

---

## Sample Space

The **sample space** is just the list of *everything that could possibly happen*.

Examples:

* Coin flip → `{Heads, Tails}`
* Dice roll → `{1, 2, 3, 4, 5, 6}`
* Picking a number from 1–10 → `{1, 2, ..., 10}`

If the sample space isn’t clear, probability calculations don’t really mean anything.
Most mistakes later on come from misunderstanding this part.

---

## Coins and Dice

### Coin Flip

* Outcomes: Heads, Tails
* Probability of Heads:
  **1 / 2 = 0.5**

### Dice Roll

* Outcomes: 1–6
* Probability of rolling a 4:
  **1 / 6**
* Probability of rolling an even number (2, 4, 6):
  **3 / 6 = 1 / 2**

These examples are simple, but they train you to:

* count outcomes properly
* group events together
* think in ratios instead of guesses

---

## Probability with Numbers (1–10)

Pick a number at random from **1 to 10**.

Examples:

* Probability of picking a 7 → **1 / 10**
* Probability of picking an even number → **5 / 10**
* Probability of picking a number greater than 6 → **4 / 10**

This starts to connect probability to **ranges and conditions**, which shows up constantly later in ML when setting thresholds and decision rules.

---

## Geometric Probability (Circles Inside Circles)

Not all probability comes from counting numbers.

Sometimes it’s about **area**.

If a point is chosen randomly inside a shape, then probability depends on **relative size**.

Example:

* A small circle inside a big circle
* Probability of landing inside the small one:

> **Area of small circle / Area of big circle**

This idea comes back later in:

* Monte Carlo simulations
* numerical integration
* random sampling in higher dimensions

---

## The Monty Hall Problem

This is where intuition starts to fail.

Setup:

* 3 doors
* 1 car, 2 goats
* You pick a door
* The host opens a goat door
* You’re asked whether to **stay or switch**

Most people think: *“It’s 50–50 now.”*
That’s wrong.

Switching gives a **2/3 chance** of winning.

Why?

* Your original choice had a **1/3** chance
* The remaining unopened door carries the other **2/3**

This problem is important because it shows:

* intuition is unreliable
* probability is about structure, not feelings
* simulation can reveal what logic alone sometimes hides

---

## Why Simulations Matter

Instead of arguing with intuition, we can:

* simulate coin flips
* simulate dice rolls
* simulate Monty Hall thousands of times

With Python, you can actually **watch probabilities converge** as the number of trials increases.

This is the bridge between:

* theoretical probability
* real-world data
* how machine learning experiments actually work

---

## Key Takeaways

* This material feels basic — and that’s intentional
* Probability is about **thinking clearly**, not memorising formulas
* Always define the sample space first
* Simple examples build intuition for complex systems
* Simulation is a powerful way to test understanding

---

## Why This Matters Going Forward

Everything coming next — conditional probability, Bayes’ theorem, random variables — depends on *this way of thinking*.

Getting comfortable here sets the foundation and trains your brain to reason about uncertainty properly.

That’s the real goal of Week 1.
