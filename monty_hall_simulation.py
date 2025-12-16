import numpy as np

def monty_hall_sim(trials=10000, switch=True):
    wins = 0
    for _ in range(trials):
        doors = [0, 1, 2]  # 0 = car, 1 & 2 = goats
        car = np.random.choice(doors)
        choice = np.random.choice(doors)
        remaining_doors = [d for d in doors if d != choice and d != car]
        # Host opens a goat door (remaining_doors[0])
        if switch:
            choice = [d for d in doors if d != choice and d != remaining_doors[0]][0]
        if choice == car:
            wins += 1
    return wins / trials

print(f"Winning probability (switching): {monty_hall_sim(switch=True):.3f}")
print(f"Winning probability (staying): {monty_hall_sim(switch=False):.3f}")
