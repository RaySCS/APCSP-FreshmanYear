import random


gameOver = False#signyfying when to keep certain loops running.
gamesWon = 0#Global variables which are used. Others are passed as parameters. Keeps track of win and losses combined.
gamesLost = 0

def displayRules():
 askName = input("Hello, What's your first name?")#Purpose of function: Display general rules
 print("Welcome", askName, "to MasterMind, a game which involves an intellectual mindset or just pure luck!")#Below are rules.
 print("Rules: ")#Purpose of function: Just display rules and call the begin game function
 print("-The computer selects a sequence of four colors out of six, which are red, green, orange, blue, yellow, and purple")
 print("-You input a sequence of FOUR/SIX colors,depending on what mode you choose. (enter full color names)")
 print("-Once you have selected a sequence press return and then you will see how accurate you were")
 print("-If you are told a white peg, then you have the right color, but not the right position for one of the colors")
 print("-If you are told a black peg, then you have the right color, and right position for one of the colors ")
 print("-Format should be as followed, ex: red, green, orange, blue")
 print("-SEQUENCE AND COLORS ARE KEY TO SUCCESS")
 print("")
 beginGame()#Organizing code in order to make sure everything is useful and makes sense. Calling the function to begin game


def beginGame():
   compChoice=[]#Purpose of function is to determine what option user wants(1v2). Then that corresponding function is called. Abstracting with functions
   global gameOver
   i=0#Used for while loop increment value
   Attempts=0#Increase the increment every attempt made
   games=10#10 games as increment allows.
   askGameMode = input("Would you like to play one player or two player? Specify one or two")#Two game options available
   if askGameMode=="one":
       onePlayer(Attempts, games, i, compChoice)#The neccessary parameters being passed
   if askGameMode=="two":
       twoPlayer(Attempts, i)#Passing the necessary parameters

def twoPlayer(Attempts,i):
   print("Rules are still applicable, but now one player will make code, other player guesses")#This function just displays rules for 2 player
   print("Choose one person to be player one, the other player two")#Also, it gets the player 1 entry and calls the scenarios for 2 player
   print("You may choose your own category of things to code and decode")
   askRounds = int(input("How many games would you like to play?"))
   askCat = input("Player One, before you enter the sequence, enter the four possible choices with commas player two may choose")
   catDisplay = askCat.split(",")
   print("Choices Possible: ", catDisplay)#For the 2nd players easeness
   askPlayerOne = input("Player one, input the sequence of four colors you wish to code, remember to make it different from the possibilities")
   playerOneGuess = askPlayerOne.split(",")  # Allows for Letters to be splitted. Gives in an array format. Could split by any character
   global gameOver
   while i<askRounds and gameOver==False:
       i += 1#Incrementing the value everytime the loop ran.
       Attempts += 1
       twoPlayerScenarios(playerOneGuess, Attempts, askRounds)

def twoPlayerScenarios(playerOneGuess, Attempts, askRounds):
    #Purpose of function: It is the function which determines the black and white pegs, the scenarios for 2 player
   global gameOver
   playAgain=False
   BlackPegs = 0
   WhitePegs = 0
   playerOneWon = 0
   playerTwoWon = 0
   askPlayerTwo = input("Player two, input the sequence which you believe is corresponding to player ones sequence")#The other players input
   playerTwoGuess = askPlayerTwo.split(",")#Breaks apart entry
   i = 0  # The i's represent the increment value. The code below allows for the duplicates to work
   for x in range(0, len(playerTwoGuess)):
       if playerTwoGuess[i] in playerOneGuess:
           WhitePegs += 1  # There is a whitepeg whenever what the user inputs is in the computer generated array
           i += 1  # Increment value increases
       else:
           i += 1
   i = 0  # This for loop is going through the two arrays, when one color is in same postion then black peg is added
   for x in range(0, len(playerTwoGuess)):
       if playerOneGuess[i] == playerTwoGuess[i]:
           playerTwoGuess.pop(i)  # My logic in order to avoid the white peg being counted twice was that whenever a color of match is found, remove the item at an index and it is returned basically.
           playerTwoGuess.insert(i,' ') # And here again I am adding the value of blankess at the index of wherever the common color was found
           BlackPegs += 1  # Adding one to black peg
           i += 1#The .pop above is allowing for the common color to be removed and returned.
       else:  # Incremenet value increases
           i += 1
   if BlackPegs == 4:
       BlackPegs = 4
       WhitePegs = 4
       print("Player Two, you have won!")#Player 2 wins when he/she guesses right
       playerTwoWon += 1
       print("Player One sequence ", playerOneGuess)
       print("Player One Games Won: ", playerOneWon)
       print("Player Two Games Won: ", playerTwoWon)
       gameOver = True
       playAgain=True
   if Attempts >= askRounds:
       print("Player One, you have won!")#When there are equal attempts, the first user(p1) won
       playerOneWon += 1
       print("Player One sequence ", playerOneGuess)
       print("Player One Games Won: ", playerOneWon)
       print("Player Two Games Won: ", playerTwoWon)
       gameOver = True#Turns on to let loop know to stop
       playAgain=True#Turns on if user wants to play again
   newWhitePeg = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
   if gameOver == True:
       askPlayAgain = input("Would you like to go back to the main menu?")
       if askPlayAgain == "yes":
           playAgain = False#Resetting variables
           BlackPegs = 0
           WhitePegs = 0
           gameOver = False
           beginGame()
       if askPlayAgain=="no":
           print("Have a joyous day")
   print("Black Pegs: ", BlackPegs)
   print("White Pegs: ", newWhitePeg)

def onePlayer(Attempts, games, i, compChoice):
   import random#Purpose of function is to determine what diffculty the user wants
   askLevel = input("Would you like to play easy, medium, or hard?")#Three different category levels
   if askLevel == "hard":
       arrayColors = ["red", "orange", "green", "blue", "yellow", "purple", "gray", "pink"]#LogicFlow-Higher level=more colors
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are ARE duplicates")#Hard should be hard, thats why out of eight
       print("Disclaimer: Remember to input six answers as this is medium game mode")
       for x in range(0,6):
           compChoice.append(arrayColors[random.randrange(0, len(arrayColors))])
   if askLevel == "medium":
       arrayColors = ["red", "orange", "green", "blue", "yellow", "purple"]
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are ARE duplicates")# Medium is medium, thats why out of six
       print("Disclaimer: Remember to input six answers as this is medium game mode")
       for x in range(0,6):
           compChoice.append(arrayColors[random.randrange(0, len(arrayColors))])#Generating a random set of colors, possible duplicates as well
   if askLevel == "easy":
       arrayColors = ["red", "orange", "green", "blue"] # Array of colors
       print("Options to choose from: ", arrayColors)
       print("Disclaimer: There are NO duplicates")#since easy game mode, there are no duplicates
       compChoice = random.sample(arrayColors,4)  # This code allows for a random selection of the quantity, ALSO makes an array
   while i<games and gameOver==False:
       i+=1#Loop keeps on going through until the number of games is less than 10 and when the gameOver boolean hasnt turned true.
       Attempts += 1
       scenarios(askLevel,compChoice,Attempts,games)#Passing parameters, abstracting to make functions more useful

def scenarios(askLevel,compChoice,Attempts,games):
   global gameOver#Purpose of Function: Goes through the scenarios possible for one player mode. This is done using a nested for loop(like hangman).
   global gamesWon
   global gamesLost
   playAgain = False
   Black = False
   white = False
   BlackPegs = 0
   WhitePegs = 0
   user = input("What is your guess? ie: red, green, blue, orange")
   userGuess = user.split(",")  # Allows for Letters to be splitted. Gives in an array format.
   i = 0#The i's represent the increment value. The code below allows for the duplicates to work
   for x in range(0, len(compChoice)):
       if userGuess[i] in compChoice:
           WhitePegs += 1#There is a whitepeg whenever what the user inputs is in the computer generated array
           i += 1#Increment value increases
       else:
           i += 1
   i = 0#This for loop is going through the two arrays, when one color is in same postion then black peg is added
   for x in range(0, len(compChoice)):
       if userGuess[i] == compChoice[i]:
           userGuess.pop(i)#My logic in order to avoid the white peg being counted twice was that whenever a color of match is found, remove the item at an index and it is returned basically.
           userGuess.insert(i, ' ')#And here I am adding the value of blankess at the index of wherever the common color was found
           BlackPegs += 1#Adding one to black peg
           i += 1
       else:#Incremenet value increases
           i+=1
   if BlackPegs == 4 or BlackPegs == 6:
       if BlackPegs==4:
            BlackPegs=4#Once four black pegs have been reached, then user win game
            WhitePegs = 4
       if BlackPegs==6:
           BlackPegs = 6  # Once six black pegs have been reached, then user win game
           WhitePegs = 6
       print("YOU HAVE WON!!")
       gamesWon+=1
       print("Games Won: ", gamesWon)
       print("Games Lost: ", gamesLost)
       gameOver=True#Just in order to know when to start and finish game
       playAgain=True#So that game is played again by users request
   if Attempts >= games:
       print("YOU HAVE LOST!")#If user cant guess within 10 tries then computer wins
       gamesLost+=1
       print("Computer Choice: ", compChoice)#IF user still hasnt guessed then just showcase answer
       print("Games Won: ", gamesWon)
       print("Games Lost: ", gamesLost)
       gameOver=True
       playAgain=True
   WhitePegs = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
   print("Black Pegs: ", BlackPegs)
   print("White Pegs: ", WhitePegs)
   print("Mr. Cortez Answer Purpose: " , compChoice)#THis is removable, but i put it in order to make playing game faster for mr.cortez
   if playAgain==True:
       askPlayAgain = input("Would you like to go the main menu?")#Giving the user a chance to play again
       if askPlayAgain=="yes":
            #Reseting these variables except for the games won and lost as those are kept the same for the user needs to know how many games they won/lost.
           playAgain = False
           BlackPegs = 0
           WhitePegs = 0
           gameOver=False
           beginGame()
       if askPlayAgain=="no":
           print("Have a joyous day!")

displayRules()

