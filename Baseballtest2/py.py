import random

#Goal of the code is in order to get the bases to work, in which the number of runs is correct
#I am using the idea of the 7 length boolean array, in which the first three are booleans to start with
#I then turn the boolean on
homeScore = []
awayScore = []
hitsHomeTotalA = []
hitsAwayTotalA = []
testOne = []
testTwo = []
testThree = []

possession = random.randint(1, 2)  # the team that start with ball is random
for x in range(1,10):  # loops 9 times for the 9 innings
 BasesArrayHome = [False, False, False, False, False, False, False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
 BasesArrayAway = [False, False, False, False, False, False, False]
 hitsHome = 0
 hitsAway = 0#These variables need to be reset as if not they keep on adding upon each other.
 runsHome = 0
 runsAway = 0
 testSingle = 0
 testDouble = 0
 testTriple = 0
 if possession == 1:
     outs = 0
     while outs<3:
         hitSingle = False
         hitDouble = False
         hitTriple = False
         rbi = random.randint(1, 100)
         if rbi <= 100 and rbi > 75 :
             hitSingle = True  # testing purposes, is the reason why RBI is so high
             hitsHome += 1
         if rbi <= 75 and rbi > 50:
             hitDouble = True
             hitsHome += 1
         if rbi <= 50 and rbi >25 :
             hitTriple = True
             hitsHome += 1
         else:
             outs += 1
         if hitSingle == True:
             testSingle+=1
             for x in range(4, 0 , -1):
                 BasesArrayHome[x] = BasesArrayHome[x+1]#Going through the array backwards, moving everything back
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True#Have to turn the first one back to true. What we were talking about in class, the first one doesn't turn back to true, so i do it here
             for a in range(3, 7):
                 if BasesArrayHome[a] == True:
                     runsHome+=1
                     #BasesArrayHome = [False, False, False, False, False, False, False]#ASk if we reset this here
                     #BasesArrayAway = [False, False, False, False, False, False, False]
         if hitDouble == True:
             testDouble+=1
             for x in range(4, 0, -1):
                 BasesArrayHome[x] = BasesArrayHome[x+2]
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True
             for a in range(3, 7):
                 if BasesArrayHome[a] == True:
                     runsHome+=1
                     #BasesArrayHome = [False, False, False, False, False, False, False]
                     #BasesArrayAway = [False, False, False, False, False, False, False]
         if hitTriple == True:
             testTriple+=1
             for x in range(4, 0, -1):
                 BasesArrayHome[x] = BasesArrayHome[x+2]#KEEP ON GETING ERROR
                 BasesArrayHome[x] = True
             BasesArrayHome[0] = True
             for a in range(3, 7):
                 if BasesArrayHome[a] == True:
                     runsHome+=1#Going through position 3 to 6 and adding the run if base is true
                     #BasesArrayHome = [False, False, False, False, False, False, False]
                     #BasesArrayAway = [False, False, False, False, False, False, False]
     BasesArrayHome = [False, False, False, False, False, False, False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
     BasesArrayAway = [False, False, False, False, False, False, False]
     possession = 2
 if possession == 2:
     outs = 0
     while outs<3:
         hitSingle = False
         hitDouble = False
         hitTriple = False
         noHit = False
         rbi = random.randint(1, 100)
         if rbi <= 100 and rbi > 75 :
             hitSingle = True  # testing purposes, is the reason why RBI is so high
             hitsAway += 1
         if rbi <= 75 and rbi > 50:
             hitDouble = True
             hitsAway += 1
         if rbi <= 50 and rbi >25 :
             hitTriple = True
             hitsAway += 1
         else:
             outs += 1
         if hitSingle == True:
             for a in range(4, 0 , -1):
                 BasesArrayAway[a] = BasesArrayAway[a+1]#using the idea of the decrement and going from end to front
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             for a in range(3, 7):
                 if BasesArrayAway[a] == True:
                     runsAway+=1#Checking the really fourth spot, and if there is a true, then there is a run!
                     #BasesArrayHome = [False, False, False, False, False, False, False]
                     #BasesArrayAway = [False, False, False, False, False, False, False]
         if hitDouble == True:
             for a in range(4, 0 , -1):
                 BasesArrayAway[a] = BasesArrayAway[a+2]
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             for a in range(3, 7):
                 if BasesArrayAway[a] == True:
                     runsAway+=1
                     #BasesArrayHome = [False, False, False, False, False, False, False]
                     #BasesArrayAway = [False, False, False, False, False, False, False]
         if hitTriple == True:
             for a in range(4, 0 , -1):
                 BasesArrayAway[a] = BasesArrayAway[a+2]#WHY ERROR!!
                 BasesArrayAway[a] = True
             BasesArrayAway[0] = True
             for a in range(3, 7):
                 if BasesArrayAway[a] == True:
                     runsAway+=1
                     #BasesArrayHome = [False, False, False, False, False, False, False]
                     #BasesArrayAway = [False, False, False, False, False, False, False]
     BasesArrayHome = [False, False, False, False, False, False, False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
     BasesArrayAway = [False, False, False, False, False, False, False]
     possession = 1

 hitsHomeTotalA.append(hitsHome)#Adding the hits to display the end
 hitsAwayTotalA.append(hitsAway)
 homeScore.append(runsHome)
 awayScore.append(runsAway)
 testOne.append(testSingle)
 testTwo.append(testDouble)
 testThree.append(testTriple)
 print("Singles: ", testOne)
 print("Doubles: ", testTwo)
 print("Triples: ", testThree)
 print("Home team hits, ", hitsHomeTotalA )
 print("Away team hits, ", hitsAwayTotalA)
 print("Home Teams Bases: ", BasesArrayHome)
 print("Away Teams Bases: ", BasesArrayAway)
home_print1 = ""
away_print2 = ""
print("        1   2   3   4   5   6   7   8   9    F ")  # Label innings and the finals
for i in range(0, 9):
 home_print1 = home_print1 + " " + " " + " " +  str(homeScore[i])  # create quarter score string
 away_print2 = away_print2 + " " + " " + " " +  str(awayScore[i])

# print final scores

print("Home:" + home_print1 + ": " + str(sum(homeScore)))

print("Away:" + away_print2 + ": " + str(sum(awayScore)))
