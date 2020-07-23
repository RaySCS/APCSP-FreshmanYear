import random


homeScore = []
awayScore = []
i = 0
games = 10
runsHome = 0#Does this go in the while loop?
runsAway = 0
while i<games:  # loops 9 times for the 9 innings
   possession = random.randint(1, 2)  # the team that start with ball is random
   s1 = 0
   s2 = 0
   hitsHome = 0
   hitsAway = 0
   officialRun = 4
   while possession == 1:
       outs = 0
       while outs<3:
           if random.randint(1, 100) <= 50:
               hitsHome+=1#Increase base count
           else:
               outs+=1
           if hitsHome == officialRun:
               runsHome += 1
       possession = 2
   while possession == 2:
       outs = 0
       while outs<3:
           if random.randint(1, 100) <= 50:
               hitsAway+=1#50% chance
           else:
               outs+=1
           if hitsAway == officialRun:
               runsAway += 1
       possession = 1
   i+=1
   # add scores to lists after inning ends
   #print("Hits Home:", hitsHome)
   #print("Hits Away:", hitsAway)
   homeScore.append(runsHome)
   awayScore.append(runsAway)
# print out quarter scores and final score1
home_print1 = ""
away_print2 = ""
print("      1 2 3 4 5 6 7 8 9  F")  # Label quarters and final
for i in range(0, 9):
   home_print1 = home_print1 + " " + str(homeScore[i])  # create quarter score string
   away_print2 = away_print2 + " " + str(awayScore[i])

# print final scores

print("Home:" + home_print1 + ": " + str(sum(homeScore)))

print("Away:" + away_print2 + ": " + str(sum(awayScore)))

