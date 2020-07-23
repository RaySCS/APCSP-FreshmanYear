import random

import numpy as np#just a variable
import matplotlib.pyplot as plt#just variable. You can get different types of graphs with matplotlib.
sum = []
low = 1
high = 6#just max and min values
d1 = np.random.random_integers(low, high, 10)#1000 means that many times. Does the loop and .append. Just need to copy+paste this in order to see what happens with two dice
d2 = np.random.random_integers(low, high, 10)

for x in range(10):
   sumofEach = d1[x] + d2[x]
   sum.append(sumofEach)

plt.hist(d1, bins = range(min(d1), max(d1)+2 ), align="mid")#allows us to see the frequency
plt.show()#graphes
