import numpy as np

# Coin flips
flips = np.random.choice(['Heads', 'Tails'], size=1000)
prob_heads = np.sum(flips == 'Heads') / len(flips)
print(f"Probability of Heads: {prob_heads:.3f}")

# Dice rolls
rolls = np.random.randint(1, 7, size=1000)
prob_4 = np.sum(rolls == 4) / len(rolls)
prob_even = np.sum(rolls % 2 == 0) / len(rolls)
print(f"Probability of rolling 4: {prob_4:.3f}")
print(f"Probability of rolling even number: {prob_even:.3f}")
