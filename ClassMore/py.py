import random

def displayRules():
   print("Welcome to MasterMind, a game which involves an intellectual mindset or just pure luck!")  # Below are rules
   print("Rules: ")
   print("-The computer selects a sequence of four colors out of six, which are red, green, orange, blue, yellow, and purple")
   print("-You input a sequence of FOUR/SIX/EIGHT colors,depending on what mode you choose. (enter full color names)")
   print("-Once you have selected a sequence press return and then you will see how accurate you were")
   print("-If you are told a white peg, then you have the right color, but not the right position for one of the colors")
   print("-If you are told a black peg, then you have the right color, and right position for one of the colors ")
   print("-Format should be as followed, ex: red, green, orange, blue")
   print("-SEQUENCE AND COLORS ARE KEY TO SUCCESS")
   print("")
   beginGame()
gameOver = False
playAgain = False

def beginGame():
   compChoice=[]
   global gameOver
   i=0#Used for while loop increment value
   Attempts=0#Increase the increment every attempt made
   games=10#10 games as increment allows.
   askGameMode = input("Would you like to play one player or two player? Specify one or two")
   if askGameMode=="one":
       onePlayer(Attempts, games, i, compChoice)
   if askGameMode=="two":
       twoPlayer(Attempts, i)
def twoPlayer(Attempts,i):
   print("Rules are still applicable, but now one player will make code, other player guesses")
   print("Choose one person to be player one, the other player two")
   print("You may choose your own category of things to code and decode")
   askRounds = int(input("How many games would you like to play?"))
   askCat = input("Player One, before you enter the sequence, enter the four possible choices with commas player two may choose")
   catDisplay = askCat.split(",")
   print("Choices Possible: ", catDisplay)
   askPlayerOne = input("Player one, input the sequence of four colors you wish to code, remember to make it different from the possibilities")
   playerOneGuess = askPlayerOne.split(",")  # Allows for Letters to be splitted. Gives in an array format. Could split by any character
   global gameOver
   while i<askRounds and gameOver==False:
       i += 1
       Attempts += 1
       twoPlayerScenarios(playerOneGuess, Attempts, askRounds)

def twoPlayerScenarios(playerOneGuess, Attempts, askRounds):
   positionCheck1 = False
   positionCheck2 = False
   positionCheck3 = False
   positionCheck4 = False
   global gameOver
   BlackPegs = 0
   WhitePegs = 0
   playerOneWon = 0
   playerTwoWon = 0
   askPlayerTwo = input("Player two, input the sequence which you believe is corresponding to player ones sequence")
   playerTwoGuess = askPlayerTwo.split(",")
   for a in range(0, len(playerOneGuess)):
       white = False
       for c in range(0, len(playerTwoGuess)):
           if playerOneGuess[a] == playerTwoGuess[c]:
               white = True  # If any match found, boolean is true, white peg is true then
               WhitePegs += 1
   if playerOneGuess[0] == playerTwoGuess[0]:
       positionCheck1 = True
   if playerOneGuess[1] == playerTwoGuess[1]:
       positionCheck2 = True
   if playerOneGuess[2] == playerTwoGuess[2]:
       positionCheck3 = True
   if playerOneGuess[3] == playerTwoGuess[3]:
       positionCheck4 = True
   if white == True and positionCheck1 == True:
       BlackPegs += 1
   if white == True and positionCheck2 == True:
       BlackPegs += 1
   if white == True and positionCheck3 == True:
       BlackPegs += 1
   if white == True and positionCheck4 == True:
       BlackPegs += 1
   if BlackPegs == 4:
       BlackPegs = 4
       WhitePegs = 4
       print("Player Two, you have won!")
       playerTwoWon += 1
       print("Player One sequence ", playerOneGuess)
       print("Player One Games Won: ", playerOneWon)
       print("Player Two Games Won: ", playerTwoWon)
       gameOver = True
   if Attempts >= askRounds:
       print("Player One, you have won!")
       playerOneWon += 1
       print("Player One sequence ", playerOneGuess)
       print("Player One Games Won: ", playerOneWon)
       print("Player Two Games Won: ", playerTwoWon)
       gameOver = True
   newWhitePeg = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
   print("Black Pegs: ", BlackPegs)
   print("White Pegs: ", newWhitePeg)

def onePlayer(Attempts, games, i, compChoice):
   import random
   askLevel = input("Would you like to play easy, medium, or hard?")#Three different category levels
   if askLevel == "hard":
       arrayColors = ["red", "orange", "green", "blue", "yellow", "purple", "gray", "pink"]#LogicFlow-Higher level=more colors
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are are duplicates")
       for x in range(0,8):
           compChoice.append(arrayColors[random.randrange(0, len(arrayColors))])
   if askLevel == "medium":
       arrayColors = ["red", "orange", "green", "blue", "yellow", "purple"]
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are are duplicates")
       for x in range(0,6):
           compChoice.append(arrayColors[random.randrange(0, len(arrayColors))])
   if askLevel == "easy":
       arrayColors = ["red", "orange", "green", "blue"]  # Array of colors
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are no duplicates")
       for x in range(0,4):
           compChoice.append(arrayColors[random.randrange(0, len(arrayColors))])
   while i<games and gameOver==False:
       i+=1
       Attempts += 1
       scenarios(askLevel,compChoice,Attempts,games)#Passing parameters, abstracting to make functions more useful


def scenarios(askLevel,compChoice,Attempts,games):
   global gameOver
   global playAgain
   gamesWon = 0
   gamesLost = 0
   positionCheck1 = False#In order to detect when black peg is neccessary to be added
   positionCheck2 = False
   positionCheck3 = False
   positionCheck4 = False
   BlackPegs = 0
   WhitePegs = 0
   user = input("What is your guess? ie: red, green, blue, orange")
   userGuess = user.split(",")  # Allows for Letters to be splitted. Gives in an array format. Could split by any character
   for i in range(0, len(compChoice)):
       white = False
       for b in range(0, len(userGuess)):
           if (compChoice[i] == userGuess[b]):
               white = True  # If any match found, boolean is true, white peg is true then
               WhitePegs += 1
           else:
               white=False
   if compChoice[0] == userGuess[0]:
       positionCheck1 = True
   if compChoice[1] == userGuess[1]:
       positionCheck2 = True
   if compChoice[2] == userGuess[2]:
       positionCheck3 = True
   if compChoice[3] == userGuess[3]:
       positionCheck4 = True
   if white == True and positionCheck1 == True:
       BlackPegs += 1
       secure1 = True
   if white == True and positionCheck2 == True:
       BlackPegs += 1
       secure2 = True
   if white == True and positionCheck3 == True:
       BlackPegs += 1
       secure3 = True
   if white == True and positionCheck4 == True:
       BlackPegs += 1
       secure4 = True
   if BlackPegs == 4:
       BlackPegs=4
       WhitePegs = 4
       print("YOU HAVE WON!!")
       gamesWon+=1
       print("Games Won: ", gamesWon)
       print("Games Lost: ", gamesLost)
       gameOver=True#Just in order to know when to start and finish game
       playAgain=True
   if Attempts >= games:
       print("YOU HAVE LOST!")
       gamesLost+=1
       print("Computer Choice: ", compChoice)
       print("Games Won: ", gamesWon)
       print("Games Lost: ", gamesLost)
       gameOver=True
       playAgain=True
   newWhitePeg = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
   print("Black Pegs: ", BlackPegs)
   print("White Pegs: ", newWhitePeg)
   print(compChoice)
displayRules()
