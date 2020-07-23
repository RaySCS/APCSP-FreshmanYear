import random

#Goal of the code is in order to get the bases to work, in which the number of runs is correct
#I am using the idea of the 7 length boolean array, in which the first three are booleans to start with
#I then turn the boolean on
def baseBall():
    homeScore = []
    awayScore = []
    hitsHomeTotalA = []
    hitsAwayTotalA = []
    runsHome = 0
    runsAway = 0
    totalHitsH = 0
    totalHitsA = 0
    possession = 1  # the team that start with ball
    i = 0
    innings = 9
    for x in range(0,innings):  # loops 9 times for the 9 innings
        i+=1
        BasesArrayHome = [False, False, False, False, False, False,False]  # Need a total of 7 spots first three represent the bases and then the rest equal the other possibilities
        BasesArrayAway = [False, False, False, False, False, False, False]
        hitsHome = 0
        hitsAway = 0  # These variables need to be reset as if not they keep on adding upon each other.
        runsHome = 0
        runsAway = 0
        testSingle = 0
        testDouble = 0
        testTriple = 0
        if possession == 1:
            outs = 0
            hit = False
            while outs != 3:
                hitOrNot = random.randint(1, 2)
                if hitOrNot == 2:
                    outs+=1
                if hitOrNot == 1:
                    hitSingle = False
                    hitDouble = False
                    hitTriple = False
                    hitHomeRun = False
                    rbi = random.randint(1, 100)
                    if rbi <= 100 and rbi > 80:
                        hitSingle = True  # testing purposes, is the reason why RBI is so even between all
                        hitsHome += 1
                        totalHitsH+=1#Adding to the total hits in the game
                    if rbi <= 80 and rbi > 60:
                        hitDouble = True
                        hitsHome += 1
                        totalHitsH+=1
                    if rbi <= 60 and rbi > 40:
                        hitTriple = True
                        hitsHome += 1
                        totalHitsH+=1
                    if rbi <= 40 and rbi > 20:
                        hitHomeRun = True
                        totalHitsH+=1
                        hitsHome+=1
                    if hitSingle == True:
                        for x in range(5, -1, -1):
                            BasesArrayHome[x + 1] = BasesArrayHome[x]  # NEED TO DO -1,-1
                        BasesArrayHome[0] = True  # Single means first spot is true
                        for a in range(3, 7):
                            if BasesArrayHome[a] == True:
                                runsHome += 1
                                BasesArrayHome[a] = False
                        hitSingle = False
                    if hitDouble == True:
                        for x in range(4, -1, -1):
                            BasesArrayHome[x + 2] = BasesArrayHome[x]
                        BasesArrayHome[1] = True  # Double means second spot is true
                        for a in range(3, 7):
                            if BasesArrayHome[a] == True:
                                runsHome += 1
                                BasesArrayHome[a] = False
                        hitDouble = False
                    if hitTriple == True:
                        for x in range(3, -1, -1):
                            BasesArrayHome[x + 3] = BasesArrayHome[x]
                        BasesArrayHome[2] = True  # Triple means third spot is true
                        for a in range(3, 7):
                            if BasesArrayHome[a] == True:
                                runsHome += 1  # Going through position 3 to 6 and adding the run if base is true
                                BasesArrayHome[a] = False
                        hitTriple = False
                    if hitHomeRun == True:
                        for x in range(2, -1, -1):
                            BasesArrayHome[x + 4] = BasesArrayHome[x]  # HOME RUN means advance four
                        BasesArrayHome[3] = True  # HOME RUN means fourth spot is true
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
                        totalHitsA+=1
                    if rbi <= 80 and rbi > 60:
                        hitDouble = True
                        hitsAway += 1
                        totalHitsA+=1
                    if rbi <= 60 and rbi > 40:
                        hitTriple = True
                        hitsAway += 1
                        totalHitsA+=1
                    if rbi <= 40 and rbi > 20:
                        hitHomeRun= False
                        hitsAway +=1
                        totalHitsA+=1
                    if hitSingle == True:
                        for a in range(5, -1, -1):
                            BasesArrayAway[a + 1] = BasesArrayAway[a]  # using the idea of the decrement and going from end to front'
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
            innings += 1#If there is a tie, add one more game
        hitsHomeTotalA.append(hitsHome)#Adding the hits to display the end
        hitsAwayTotalA.append(hitsAway)
        homeScore.append(runsHome)
        awayScore.append(runsAway)
        home_print1 = ""
        away_print2 = ""
    print("       1  2  3  4  5  6  7  8  9   F ")  # Label innings and the finals
    for i in range(0, 9):
        home_print1 = home_print1 + " " + " " + str(homeScore[i])  # create quarter score string
        away_print2 = away_print2 + " " + " " +  str(awayScore[i])

    print("Home:" + home_print1 + ": " + str(sum(homeScore)))

    print("Away:" + away_print2 + ": " + str(sum(awayScore)))
    print("Home Team Hits: ", totalHitsH)
    print("Away Team Hits: ", totalHitsA)

baseBall()