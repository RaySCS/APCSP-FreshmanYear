import random

print("Welcome to MasterMind, a game which involves an intellectual mindset or just pure luck!")#Below are rules
print("Rules: ")
print("-The computer selects a sequence of four colors out of six, which are red, green, orange, blue, yellow, and purple")
print("-You input a sequence of FOUR/SIX/EIGHT colors,depending on what mode you choose. (enter full color names)")
print("-Once you have selected a sequence press return and then you will see how accurate you were")
print("-If you are told a white peg, then you have the right color, but not the right position for one of the colors")
print("-If you are told a black peg, then you have the right color, and right position for one of the colors ")
print("-Format should be as followed, ex: red, green, orange, blue")
print("-SEQUENCE AND COLORS ARE KEY TO SUCCESS")
print("")
gameOver = False

def beginGame():
    global gameOver
    i=0#Used for while loop increment value
    Attempts=0#Increase the increment every attempt made
    games=10#10 games as increment allows.
    askLevel = input("Would you like to play easy, medium, or hard?")#Three different category levels
    if askLevel == "hard":
        arrayColors = ["red", "orange", "green", "blue", "yellow", "purple", "gray", "pink"]#LogicFlow-Higher level=more colors
        print("Options to choose from: ", arrayColors)
        compChoice = random.sample(arrayColors, 4)#CHECKOVER
    if askLevel == "medium":
        arrayColors = ["red", "orange", "green", "blue", "yellow", "purple"]
        print("Options to choose from: ", arrayColors)
        compChoice = random.sample(arrayColors, 4)
    if askLevel == "easy":
        arrayColors = ["red", "orange", "green", "blue"]  # Array of colors
        print("Options to choose from: ", arrayColors)
        compChoice = random.sample(arrayColors, 4)  # This code allows for a random selection of the quantity, ALSO MAKES AN ARRAY
    while i<games and gameOver==False:
        i+=1
        Attempts += 1
        scenarios(askLevel,compChoice,Attempts,games)#Passing parameters, abstracting to make functions more useful

def scenarios(askLevel,compChoice,Attempts,games):
    global gameOver
    gamesWon = 0
    gamesLost = 0
    positionCheck1 = False#In order to detect when black peg is neccessary to be added
    positionCheck2 = False
    positionCheck3 = False
    positionCheck4 = False
    BlackPegs = 0
    WhitePegs = 0
    user = input("What is your guess? ie: red, green, blue, orange")
    userGuess = user.split(
        ",")  # Allows for Letters to be splitted. Gives in an array format. Could split by any character
    for i in range(0, len(compChoice)):
        white = False
        for b in range(0, len(userGuess)):
            if (compChoice[i] == userGuess[b]):
                white = True  # If any match found, boolean is true, white peg is true then
                WhitePegs += 1
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
        print("YOU HAVE WON!!")
        gamesWon+=1
        print("Games Won: ", gamesWon)
        print("Games Lost: ", gamesLost)
        gameOver=True#Just in order to know when to start and finish game
    if Attempts >= games:
        print("YOU HAVE LOST!")
        gamesLost+=1
        print("Computer Choice: ", compChoice)
        print("Games Won: ", gamesWon)
        print("Games Lost: ", gamesLost)
        gameOver=True
    WhitePegs = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
    print("Black Pegs: ", BlackPegs)
    print("White Pegs: ", WhitePegs)
    print(compChoice)
beginGame()
