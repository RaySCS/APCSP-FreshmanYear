import random

import numpy as np
import matplotlib.pyplot as plt
sum = []
lowDay = 1
highDay = 365
genBirthday = np.random.random_integers(lowDay, highDay, 30)#1000 means that many times. Does the loop and .append. Just need to copy+paste this in order to see what happens with two dice

yes = 0
numClasses = 10

def make():
    global yes
    global numClasses
    sameBday = False
    for p in range(0, numClasses):
        oneClassShare = False
        shares = 0
        for x in range(30):
            for a in range(30):
                if x != a:
                    if(genBirthday[x] == genBirthday[a]):
                        sameBday = True
                        oneClassShare = True
                        shares+=1
    print(shares)
    #Just put into a print statement or you could do a while loop and everytime onclassshare is true just add one to share.
make()

#plt.hist(d1, bins = range(min(d1), max(d1)+2 ), align="mid")#allows us to see the frequency
plt.show()#graphes

