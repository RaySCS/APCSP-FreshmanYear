import random


# Goal of the code is in order to get the bases to work, in which the number of runs is correct
# I am using the idea of the 7 length boolean array, in which the first three are booleans to start with
# I then turn the boolean on
def baseBall():
  names = ["Bob  ", 'Joe  ', 'Steve', 'Mike ', 'Luke ', 'Mark ', 'John ', 'Aaron', 'James']

  class Player(object):
      def __init__(self):
          self.name = random.choice(names)
          self.average = random.randint(54, 76)
          self.power = random.randint(20, 35)
          self.speed = random.randint(80, 95)
          self.single = 0
          self.double = 0
          self.triple = 0
          self.homerun = 0

      def displayPlayer(self):
          print(self.name, " ", self.average, " ", self.power, " ", self.speed)  # Using the information

      def displayStats(self):
          print(self.name, " ",  self.single,  " ", self.double, " ", self.triple, " ", self.homerun)

      def AddHits(self):
          self.HTS = self.HTS + 1
      def AddSingle(self):
          self.single+=1
      def AddDouble(self):
          self.double+=1
      def AddTriple(self):
          self.triple+=1
      def AddHomeRun(self):
          self.homerun+=1

  class Team(object):
      def __init__(self):
          self.players = []

      def add_players(self):
          for i in range(0, 9):
              self.players.append(Player())
              self.players[i].displayPlayer()

      def show_Stats(self):
          for i in range(0, 9):
              self.players[i].displayStats()

  print("Oponent Team:")
  print("Name    AV  PW  SD")
  team2 = Team()
  team2.add_players()
  response = "0"
  print("Your team is:")
  print("Name    AV  PW  SD")
  while response == "0":
      team1 = Team()
      team1.add_players()
      response = input("Do you accept these players? 0 for no, 1 for yes")

  homeScore = []
  awayScore = []
  hitsHomeTotalA = []
  hitsAwayTotalA = []
  runsHome = 0
  runsAway = 0
  inningHits = 0
  inningHitsAway = 0
  possession = 1
  i = 0
  innings = 10
  for x in range(1, innings):  # loops 9 times for the 9 innings
      BasesArrayHome = [False, False, False, False, False, False, False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
      BasesArrayAway = [False, False, False, False, False, False, False]
      hitsHome = 0
      hitsAway = 0  # These variables need to be reset as if not they keep on adding upon each other.
      runsHome = 0
      runsAway = 0
      if possession == 1:
          outs = 0
          hit = False
          while outs != 3:
              playerNumber = random.randint(0, 8)
              determineHit = random.randint(1, 100)#This determines if they hit the ball or not, firstly
              if determineHit >= team1.players[playerNumber].average:
                  outs += 1
              if determineHit <= team1.players[playerNumber].average:
                  hitSingle = False
                  hitDouble = False
                  hitTriple = False
                  hitHomeRun = False
                  hitType = random.randint(1, 100)#Now this determines what type of hit they get
                  if team1.players[playerNumber].average > hitType and hitDouble==False and hitTriple==False and hitHomeRun==False:
                      hitSingle = True
                      hitsHome += 1
                  if team1.players[playerNumber].speed > hitType and hitSingle==False and hitTriple==False and hitHomeRun==False:
                      hitDouble = True#All turning true
                      hitsHome += 1
                  if team1.players[playerNumber].speed > 30 and hitSingle==False and hitDouble==False and hitHomeRun==False:
                      hitTriple = True
                      hitsHome += 1
                  if team1.players[playerNumber].power > hitType and hitSingle==False and hitDouble==False and hitTriple==False:
                      hitHomeRun = True#LEFT OFF HERE
                      hitsHome += 1
                  if hitSingle == True:
                      for x in range(5, -1, -1):
                          BasesArrayHome[x + 1] = BasesArrayHome[x]  # NEED TO DO -1,-1
                      BasesArrayHome[0] = True  # Single means first spot is true
                      team1.players[playerNumber].AddSingle()
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1
                              BasesArrayHome[a] = False
                      hitSingle = False
                  if hitDouble == True:
                      for x in range(4, -1, -1):
                          BasesArrayHome[x + 2] = BasesArrayHome[x]
                      BasesArrayHome[1] = True  # Double means second spot is true
                      team1.players[playerNumber].AddDouble()
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1
                              BasesArrayHome[a] = False
                      hitDouble = False#just taking into account whatever boolean turns on first
                  if hitTriple == True:
                      for x in range(3, -1, -1):
                          BasesArrayHome[x + 3] = BasesArrayHome[x]
                      BasesArrayHome[2] = True  # Triple means third spot is true
                      team1.players[playerNumber].AddTriple()
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1  # Going through position 3 to 6 and adding the run if base is true
                              BasesArrayHome[a] = False
                      hitTriple = False
                  if hitHomeRun == True:
                      for x in range(2, -1, -1):
                          BasesArrayHome[x + 4] = BasesArrayHome[x]  # HOME RUN means advance four
                      BasesArrayHome[3] = True  # HOME RUN means fourth spot is true
                      team1.players[playerNumber].AddHomeRun()#Home run isnt being added
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1  # Going through position 3 to 6 and adding the run if base is true
                              BasesArrayHome[a] = False
                      hitHomeRun = False
              possession = 2
      if possession == 2:
          outs = 0
          hit = False
          while outs != 3:
              hitOrNot = random.randint(1, 2)
              if hitOrNot == 2:
                  outs += 1
              if hitOrNot == 1:
                  hitSingle = False
                  hitDouble = False
                  hitTriple = False
                  hitHomeRun = False
                  rbi = random.randint(1, 100)
                  if rbi <= 100 and rbi > 80:
                      hitSingle = True  # testing purposes, is the reason why RBI is so high
                      hitsAway += 1
                  if rbi <= 80 and rbi > 60:
                      hitDouble = True
                      hitsAway += 1
                  if rbi <= 60 and rbi > 40:
                      hitTriple = True
                      hitsAway += 1
                  if rbi <= 40 and rbi > 20:
                      hitsAway = True
                  if hitSingle == True:
                      for a in range(5, -1, -1):
                          BasesArrayAway[a + 1] = BasesArrayAway[
                              a]  # using the idea of the decrement and going from end to front'
                      BasesArrayAway[0] = True
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1  # Checking the really fourth spot, and if there is a true, then there is a run!
                              BasesArrayAway[a] = False
                  if hitDouble == True:
                      for a in range(4, -1, -1):
                          BasesArrayAway[a + 2] = BasesArrayAway[a]
                          BasesArrayAway[1] = True
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False

                  if hitTriple == True:
                      for a in range(3, -1, -1):
                          BasesArrayAway[a + 3] = BasesArrayAway[a]  # WHY ERROR!!
                      BasesArrayAway[2] = True
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False

                  if hitHomeRun == True:
                      for a in range(2, -1, -1):
                          BasesArrayAway[a + 4] = BasesArrayAway[a]  # WHY ERROR!!
                      BasesArrayAway[3] = True
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False
          possession = 1
          if runsHome == runsAway:
              innings += 1#IF there is a tie
      homeScore.append(runsHome)
      awayScore.append(runsAway)
      home_print1 = ""
      away_print2 = ""
  print("       1  2  3  4  5  6  7  8  9   F ")  # Label innings and the finals
  for i in range(0, 9):
      home_print1 = home_print1 + " " + " " + str(homeScore[i])  # create quarter score string
      away_print2 = away_print2 + " " + " " + str(awayScore[i])

  print("Home:" + home_print1 + ": " + str(sum(homeScore)))

  print("Away:" + away_print2 + ": " + str(sum(awayScore)))

  print("Stats My team")
  print("Name    S   D   T   H")
  team1.show_Stats()


baseBall()


