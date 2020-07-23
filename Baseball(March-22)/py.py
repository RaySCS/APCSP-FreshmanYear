import random


# Goal of the code is in order to get the bases to work, in which the number of runs is correct
# I am using the idea of the 7 length boolean array, in which the first three are booleans to start with
# I then turn the boolean on
def baseBall():
  names = ["Bob  ", 'Joe  ', 'Steve', 'Mike ', 'Luke ', 'Mark ', 'John ', 'Aaron', 'James']

  class Player(object):
      def __init__(self):
          self.name = random.choice(names)
          self.average = random.randint(1, 100)#Giving characterisitcs one through one hundred instead on 1-100
          self.power = random.randint(1, 100)
          self.speed = random.randint(1, 100)
          self.HTS = 0
          self.single = 0
          self.double = 0
          self.triple = 0
          self.homerun = 0
          self.HTSA = 0
          self.singleA = 0
          self.doubleA = 0
          self.tripleA = 0
          self.homerunA = 0

      def displayPlayer(self):
          print(self.name, " ", self.average, " ", self.power, " ", self.speed)  # Using the information

      def displayStats(self):
          print(self.name, " ",  self.single,  " ", self.double, " ", self.triple, " ", self.homerun)
      def displayStatsA(self):
          print(self.name, " ",  self.singleA,  " ", self.doubleA, " ", self.tripleA, " ", self.homerunA)

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
      def AddHitsA(self):
          self.HTSA = self.HTSA + 1
      def AddSingleA(self):
          self.singleA+=1
      def AddDoubleA(self):
          self.doubleA+=1
      def AddTripleA(self):
          self.tripleA+=1
      def AddHomeRunA(self):
          self.homerunA+=1

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
      def show_StatsA(self):
          for i in range(0, 9):
              self.players[i].displayStatsA()

  print("Oponent Team:")
  print("Name    AV  PW  SD")
  team2 = Team()
  team2.add_players()
  response = "0"
  print("Your team can be:")
  print("Name    AV  PW  SD")
  while response == "0":
      team1 = Team()
      team1.add_players()
      response = input("Do you wish to draft these players? 0 for no, 1 for yes")#Allowing the user to keep rolling until they are content

  homeScore = []
  awayScore = []
  possession = 1
  i = 0
  innings = 10
  hitsTotalHome = 0
  hitsTotalAway = 0
  for x in range(1, innings):  # loops 9 times for the 9 innings. IF tie occurs, then innings is added
      BasesArrayHome = [False, False, False, False, False, False, False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
      BasesArrayAway = [False, False, False, False, False, False, False]
      hitsHome = 0
      hitsAway = 0  # These variables need to be reset as if not they keep on adding upon each other.
      runsHome = 0
      runsAway = 0
      if possession == 1:
          outs = 0
          while outs != 3:
              playerNumber = random.randint(0, 8)
              determineHit = random.randint(1, 100)#This determines if they hit the ball or not, firstly
              if determineHit >= team1.players[playerNumber].average:
                  outs += 1
              if determineHit <= team1.players[playerNumber].average:
                  hitSingle = False#The code above tells if the player got a hit or not.
                  hitDouble = False
                  hitTriple = False
                  hitHomeRun = False
                  nothingElse = False
                  if team1.players[playerNumber].average > 10 and team1.players[playerNumber].average <50 and nothingElse==False:
                      hitSingle = True#THese numbers above represent what requirements a certain player has to meet in order to get a certain hit. And also need to make sure that they are not hitting another hit as well.
                      hitsHome += 1
                      hitsTotalHome+=1
                      nothingElse = False
                  if team1.players[playerNumber].speed > 100 and team1.players[playerNumber].speed < 40 and nothingElse==False:
                      hitDouble = True#All turning true
                      hitsHome += 1
                      hitsTotalHome+=1
                      nothingElse = False
                  if team1.players[playerNumber].speed >= 40 and team1.players[playerNumber].speed >= 0 and nothingElse==False:
                      hitTriple = True
                      hitsHome += 1
                      hitsTotalHome+=1
                      nothingElse = False
                  if team1.players[playerNumber].power > 1 and team1.players[playerNumber].power < 20 and nothingElse==False:
                      hitHomeRun = True
                      hitsHome += 1#As shown the chances of getting a homerun are hard
                      hitsTotalHome+=1
                      nothingElse = False

                  if hitSingle == True:
                      for x in range(5, -1, -1):
                          BasesArrayHome[x + 1] = BasesArrayHome[x]  # NEED TO DO -1,-1 in order to go from front to back of array.
                      BasesArrayHome[0] = True  # Single means first spot is true
                      team1.players[playerNumber].AddSingle()
                      team1.players[playerNumber].AddHits()
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
                      team1.players[playerNumber].AddHits()
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
                      team1.players[playerNumber].AddHits()
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1  # Going through position 3 to 6 and adding the run if base is true
                              BasesArrayHome[a] = False
                      hitTriple = False
                  if hitHomeRun == True:
                      for x in range(2, -1, -1):
                          BasesArrayHome[x + 4] = BasesArrayHome[x]  # HOME RUN means advance four
                      BasesArrayHome[3] = True  # HOME RUN means fourth spot is true
                      team1.players[playerNumber].AddHomeRun()#Home run is added to the players attributes
                      team1.players[playerNumber].AddHits()
                      for a in range(3, 7):
                          if BasesArrayHome[a] == True:
                              runsHome += 1  # Going through position 3 to 6 and adding the run if base is true
                              BasesArrayHome[a] = False
                      hitHomeRun = False
              possession = 2#Alternating possessions
      if possession == 2:
          outs = 0
          while outs != 3:
              playerNumber = random.randint(0, 8)
              determineHit = random.randint(1, 100)#This determines if they hit the ball or not, firstly
              if determineHit >= team2.players[playerNumber].average:
                  outs += 1
              if determineHit <= team2.players[playerNumber].average:
                  hitSingle = False#The code above tells if the player got a hit or not.
                  hitDouble = False
                  hitTriple = False
                  hitHomeRun = False
                  nothingElse = False
                  if team2.players[playerNumber].average > 10 and team2.players[playerNumber].average <50 and nothingElse==False:
                      hitSingle = True#THese numbers above represent what requirements a certain player has to meet in order to get a certain hit. And also need to make sure that they are not hitting another hit as well.
                      hitsAway += 1
                      hitsTotalAway+=1
                      nothingElse = False
                  if team2.players[playerNumber].speed > 100 and team2.players[playerNumber].speed < 40 and nothingElse==False:
                      hitDouble = True#All turning true
                      hitsAway += 1
                      hitsTotalAway += 1
                      nothingElse = False
                  if team2.players[playerNumber].speed >= 40 and team2.players[playerNumber].speed >= 0 and nothingElse==False:
                      hitTriple = True
                      hitsAway += 1
                      hitsTotalAway += 1
                      nothingElse = False
                  if team2.players[playerNumber].power > 1 and team2.players[playerNumber].power < 20 and nothingElse==False:
                      hitHomeRun = True
                      hitsAway += 1
                      hitsTotalAway += 1
                      nothingElse = False
                  if hitSingle == True:
                      for x in range(5, -1, -1):
                          BasesArrayAway[x + 1] = BasesArrayAway[x]  # NEED TO DO -1,-1 in order to go from front to back of array.
                      BasesArrayAway[0] = True  # Single means first spot is true
                      team2.players[playerNumber].AddSingleA()
                      team2.players[playerNumber].AddHitsA()
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False
                      hitSingle = False
                  if hitDouble == True:
                      for x in range(4, -1, -1):
                          BasesArrayAway[x + 2] = BasesArrayAway[x]  # NEED TO DO -1,-1 in order to go from front to back of array.
                      BasesArrayAway[0] = True  # Single means first spot is true
                      team2.players[playerNumber].AddDoubleA()
                      team2.players[playerNumber].AddHitsA()
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False
                      hitSingle = False
                  if hitTriple == True:
                      for x in range(3, -1, -1):
                          BasesArrayAway[x + 3] = BasesArrayAway[x]  # NEED TO DO -1,-1 in order to go from front to back of array.
                      BasesArrayAway[0] = True  # Single means first spot is true
                      team2.players[playerNumber].AddTripleA()
                      team2.players[playerNumber].AddHitsA()
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False
                      hitSingle = False
                  if hitHomeRun == True:
                      for x in range(2, -1, -1):
                          BasesArrayAway[x + 4] = BasesArrayAway[x]  # NEED TO DO -1,-1 in order to go from front to back of array.
                      BasesArrayAway[0] = True  # Single means first spot is true
                      team2.players[playerNumber].AddHomeRunA()
                      team2.players[playerNumber].AddHitsA()
                      for a in range(3, 7):
                          if BasesArrayAway[a] == True:
                              runsAway += 1
                              BasesArrayAway[a] = False
                      hitSingle = False
              possession = 1#Alternating possessions
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
  print("Home Team Total Hits:", hitsTotalHome)
  print("Stats of your drafted team")
  print("Name    S   D   T   H")
  team1.show_Stats()
  print("Stats of the oponents team")
  print("Name    S   D   T   H")
  team2.show_StatsA()


baseBall()


