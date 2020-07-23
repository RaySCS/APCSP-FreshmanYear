import random
import numpy as np
import matplotlib.pyplot as plt
def run():
    avgarray = []
    low = 1
    high = 6
    avg =0
    sum = 0
    for i in range(1000):
        first = np.random.random_integers(low, high, 1)#Generating the first dice
        second = np.random.random_integers(low, high, 1)#Generating the second dice
        sum = (int(first) + int(second))#getting the sum of each first
        avg = sum/2#Taking the average of two
        avgarray.append(avg)
    plt.hist(avgarray,bins=np.arange(min(avgarray),max(avgarray)+2,.5))#implementing the average.
    plt.ylabel('Number of Dice Rolls')
    plt.xlabel("Average of Dice Rolls")
    plt.title('Number of Dice Rolls that Have a Certain Average')
    plt.show()
run()