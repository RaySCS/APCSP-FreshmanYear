import random


homeScore = []
awayScore = []
hitsHomeTotalA = []
hitsAwayTotalA = []
hitsHomeTotal = 0
hitsAwayTotal = 0
runsHome = 0
runsAway = 0
for x in range(1,10):  # loops 9 times for the 9 innings
  possession = random.randint(1, 2)  # the team that start with ball is random
  hitsHome = 0
  hitsAway = 0
  BasesArrayHome = [False,False,False,"", "", "", ""]
  BasesArrayAway = [False,False,False,"", "", "", ""]
  while possession == 1:
      outs = 0
      while outs<3:
          if random.randint(1, 100) <= 50:
              hitsHome+=1#Increase hit count
              hitsHomeTotal+=1
              for x in range(4, 0 , -1):
                  BasesArrayHome[x+1] = BasesArrayHome[x]
              BasesArrayHome[0] = True
          else:
              outs+=1
      possession = 2
  while possession == 2:
      outs = 0
      while outs<3:
          if random.randint(1, 100) <= 50:
              hitsAway+=1#50% chance
              hitsAwayTotal+=1
              for a in range(4, 0 , -1):
                  BasesArrayAway[a+1] = BasesArrayAway[a]
              BasesArrayAway[0] = True
          else:
              outs+=1
      possession = 1
  hitsHomeTotalA.append(hitsHomeTotal)#Adding the hits to display the end
  hitsAwayTotalA.append(hitsAwayTotal)
  homeScore.append(runsHome)
  awayScore.append(runsAway)
  print("Home Teams Bases: ", BasesArrayHome)
  print("Away Teams Bases: ", BasesArrayAway)
home_print1 = ""
away_print2 = ""
print("      1 2 3 4 5 6 7 8 9  F  H")  # Label quarters and final
for i in range(0, 9):
  home_print1 = home_print1 + " " + str(homeScore[i])  # create quarter score string
  away_print2 = away_print2 + " " + str(awayScore[i])

# print final scores

print("Home:" + home_print1 + ": " + str(sum(homeScore)))

print("Away:" + away_print2 + ": " + str(sum(awayScore)))

