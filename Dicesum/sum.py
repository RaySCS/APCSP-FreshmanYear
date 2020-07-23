import random
import numpy as np
import matplotlib.pyplot as plt
sum = []
low = 1
high = 6
die1 = np.random.random_integers(low, high, 1000)#First die is simulated
die2 = np.random.random_integers(low, high, 1000)#Second die is simulated

def check():
    global die1
    global die2
    for x in range(1000):
        sumofEach = die1[x] + die2[x]#The sum of both die
        sum.append(sumofEach)
    plt.hist(sum, bins = range(min(sum), max(sum)+2 ), align="mid")
    plt.ylabel('Number of Dice Rolls')
    plt.xlabel("Sum of Dice Rolls")
    plt.title('Number of Dice Rolls that Have a Certain Sum')
    plt.show()
check()