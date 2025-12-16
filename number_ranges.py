import numpy as np

numbers = np.arange(1, 11)  # 1 to 10

# Pick random numbers 1000 times
samples = np.random.choice(numbers, size=1000)

# Probability examples
prob_7 = np.sum(samples == 7) / len(samples)
prob_even = np.sum(samples % 2 == 0) / len(samples)
prob_gt6 = np.sum(samples > 6) / len(samples)

print(f"Probability of picking 7: {prob_7:.3f}")
print(f"Probability of picking even number: {prob_even:.3f}")
print(f"Probability of picking number > 6: {prob_gt6:.3f}")
