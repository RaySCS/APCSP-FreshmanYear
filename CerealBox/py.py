import random
import statistics
import numpy as np
import matplotlib.pyplot as plt

def choosePrize():
   numTimesNeeded = 0
   sum = 0
   storeNums = []
   for x in range(1000):
       numTimesinEach = 0
       cerealBox = []
       notAllPrizes = False
       while notAllPrizes == False:
           prizes = ["a", "b", "c", "d", "e", "f"]#The prizes
           choiceRand = random.randint(0, 5)
           prizeChosen = prizes[choiceRand]
           numTimesNeeded+=1
           numTimesinEach+=1
           for x in range(len(prizeChosen)):
               cerealBox.append(prizeChosen)
           if "a" in cerealBox and "b" in cerealBox and "c" in cerealBox and "d" in cerealBox and "e" in cerealBox and "f" in cerealBox:
               notAllPrizes=True
       storeNums.append(numTimesinEach)#Stores each number of tries necessary. This helps with median and mean
       sum+=numTimesinEach
   print(storeNums)#Printing every trials number it took
   numMedian = statistics.median(storeNums)#Gets the median(middle)
   numMean = sum/1000#dividing by the number of trials which take place
   print("Median is: ", numMedian)
   print("Mean is: ", numMean)
   objects = ('MEDIAN', 'MEAN')
   y_pos = np.arange(len(objects))
   performance = [numMedian, numMean ]
   plt.bar(y_pos, performance, align='center')
   plt.xticks(y_pos, objects)
   plt.ylabel('Range')
   plt.xlabel("Meadian and Mean")
   plt.title('Median and Mean of Cereal Box Simulation(1000 times)')
   plt.show()


choosePrize()
