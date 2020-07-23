import random

#Goal of the code is in order to get the bases to work, in which the number of runs is correct
#I am using the idea of the 7 length boolean array, in which the first three are booleans to start with
#I then turn the boolean on
homeScore = []
awayScore = []
hitsHomeTotalA = []
hitsAwayTotalA = []
runsHome = 0
runsAway = 0
for x in range(1,10):  # loops 9 times for the 9 innings
 possession = random.randint(1, 2)  # the team that start with ball is random
 hitsHome = 0
 hitsAway = 0
 BasesArrayHome = [False,False,False,"", "", "", ""]#Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
 BasesArrayAway = [False,False,False,"", "", "", ""]
 while possession == 1:
     outs = 0
     while outs<3:
         hitSingle = False
         hitDouble = False
         hitTriple = False
         if random.randint(1, 100) <= 80:
             hitSingle = True#testing purposes, is the reason why RBI is so high
             hitsHome+=1
         if random.randint(1,100) <=70:
             hitDouble = True
             hitsHome += 1
         if random.randint(1,100) <=60:
             hitTriple = True
             hitsHome += 1
         if hitSingle == True:
             for x in range(4, 0 , -1):
                 BasesArrayHome[x] = BasesArrayHome[x+1]#Going through the array backwards, moving everything back
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True#Have to turn the first one back to true. What we were talking about in class, the first one doesn't turn back to true, so i do it here
             if BasesArrayHome[3] == True:
                 runsHome+=1
         if hitDouble == True:
             for x in range(4, 0 , -2):
                 BasesArrayHome[x] = BasesArrayHome[x+1]
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True
             if BasesArrayHome[3] == True:
                 runsHome+=1
         if hitTriple == True:
             for x in range(4, 0 , -3):
                 BasesArrayHome[x] = BasesArrayHome[x+1]
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True
             if BasesArrayHome[3] == True:
                 runsHome+=1
         else:
             outs+=1
     possession = 2
 while possession == 2:
     outs = 0
     while outs<3:
         hitSingle = False
         hitDouble = False
         hitTriple = False
         if random.randint(1, 100) <= 80:
             hitSingle = True
             hitsAway+=1
         if random.randint(1, 100) <= 70:
             hitDouble = True
             hitsAway+=1
         if random.randint(1, 100) <= 60:
             hitTriple = True
             hitsAway+=1
         if hitSingle == True:
             for a in range(4, 0 , -1):
                 BasesArrayAway[a] = BasesArrayAway[a+1]#using the idea of the decrement and going from end to front
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             if BasesArrayAway[3] == True:
                 runsAway+=1#Checking the really fourth spot, and if there is a true, then there is a run!
         if hitDouble == True:
             for a in range(4, 0 , -2):
                 BasesArrayAway[a] = BasesArrayAway[a+1]
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             if BasesArrayAway[3] == True:
                 runsAway+=1
         if hitTriple == True:
             for a in range(4, 0 , -3):
                 BasesArrayAway[a] = BasesArrayAway[a+1]
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             if BasesArrayAway[3] == True:
                 runsAway+=1
         else:
             outs+=1

     possession = 1
 hitsHomeTotalA.append(hitsHome)#Adding the hits to display the end
 hitsAwayTotalA.append(hitsAway)
 homeScore.append(runsHome)
 awayScore.append(runsAway)
 print("Home team hits, ", hitsAwayTotalA )
 print("Home Teams Bases: ", BasesArrayHome)
 print("Away Teams Bases: ", BasesArrayAway)
home_print1 = ""
away_print2 = ""
print("       1  2  3  4  5  6  7  8  9   F ")  # Label innings and the finals
for i in range(0, 9):
 home_print1 = home_print1 + " " + " " + str(homeScore[i])  # create quarter score string
 away_print2 = away_print2 + " " + " " +  str(awayScore[i])

# print final scores

print("Home:" + home_print1 + ": " + str(sum(homeScore)))

print("Away:" + away_print2 + ": " + str(sum(awayScore)))


