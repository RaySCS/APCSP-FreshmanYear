
import random
names=["Bob  ",'Joe  ','Steve','Mike ','Luke ','Mark ','John ', 'Aaron', 'James']

class Player(object):
   def __init__(self):
       self.name = random.choice(names)
       self.shooting = random.randint(38, 60)
       self.passing = random.randint(10, 100)
       self.rebound = random.randint(10, 100)
       self.PTS = 0
       self.AST = 0
       self.REB = 0

   def displayPlayer(self):
       print(self.name, " ", self.shooting, " ", self.passing, " ", self.rebound)#Using the information

   def displayStats(self):
       print(self.name, " ", self.PTS)

   def AddPts(self):
       self.PTS = self.PTS + 2


class Team(object):
   def __init__(self):
       self.players = []

   def add_players(self):
       for i in range(0, 5):
           self.players.append(Player())
           self.players[i].displayPlayer()

   def show_Stats(self):
       for i in range(0, 5):
           self.players[i].displayStats()

print("You are playing this team:")
print("Name    SH   PA   RB")
team2 = Team()
team2.add_players()
response = "0"
print("Your team is:")
print("Name    SH   PA   RB")
while response == "0":
   team1 = Team()
   team1.add_players()
   response = input("Do you accept these players? 0 for no, 1 for yes")
# initial score lists
score1 = []
score2 = []


def PlayQ():
   quarter_Time = 12 * 60  # restart quarter time to 12 minutes
   # possession=random.randint(1,2) #the team that start with ball is random
   # reset quarter score
   s1 = 0
   s2 = 0
   # simulate one possession
   possession = random.randint(1, 2)
   while quarter_Time > 0:
       poss_Time = random.randint(10, 24)  # poss time 10 to 24 seconds
       quarter_Time = quarter_Time - poss_Time  # decrease quarter time
       if possession == 1:
           pNum = random.randint(0, 4)
           possession = 2  # switch possession
           if random.randint(1, 100) <= team1.players[pNum].shooting:
               team1.players[pNum].AddPts()
               s1 = s1 + 2
       else:
           pNum = random.randint(0, 4)
           possession = 1
           if random.randint(1, 100) <= team1.players[pNum].shooting:
               team2.players[pNum].AddPts()
               s2 = s2 + 2
   score1.append(s1)
   score2.append(s2)


for i in range(0, 4):  # loops 4 times for each quarter
   PlayQ()

# print out quarter scores and final score1
score_print1 = ""
score_print2 = ""
print(" Q1 Q2 Q3 Q4  F")  # Label quarters and final

for i in range(0, 4):
   score_print1 = score_print1 + " " + str(score1[i])  # create quarter score string
   score_print2 = score_print2 + " " + str(score2[i])

# print final scores

print(score_print1 + ": " + str(sum(score1)))
print(score_print2 + ": " + str(sum(score2)))

# initial score lists

print("Your player's stats")
print("Name    Pts")
team1.show_Stats()


