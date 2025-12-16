import math

# Areas
radius_big = 10
radius_small = 3

area_big = math.pi * radius_big**2
area_small = math.pi * radius_small**2

prob_inside_small = area_small / area_big

print(f"Probability of landing in small circle: {prob_inside_small:.3f}")
