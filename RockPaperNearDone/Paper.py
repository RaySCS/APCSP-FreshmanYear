import random
usergamesWon = 0
compgamesWon = 0
majority = 3#majority of five is three
gameNum = 5
gameRun = False#This boolean is used in order to determine who has won
name = input('Hello, What is your name?')  # For personalization purposes
gamesPlayable = 1#When you've played game once, you can play it one more time with an option to choose which game mode again

def runGame():
    beginGame()#This function is being called as it begins the whole game

def personalization():
    global name#This just adds some personal connection by asking user for their name

def beginGame():
    personalization()#calling the name in order to be displayed
    print("Welcome", name, "to Rock, Paper, or Scissors!")
    preUser = input("Would you like to play one player or two player? Specify one or two: ")
    preUser = preUser.lower()
    if preUser == "one":
        print("User Games Won:", usergamesWon)#Displaying the # of games won and loss below
        print("Computer Games Won:", compgamesWon)
        print("")
        print("5 Game tournament initiated")
        print("")
        i = 0
        while i < gameNum and gameRun == False:
            scenarios()  # The different scenariors which could occur, all in one function
            i += 1#increment of one is increased in order to make the while function work
        print("")
    if preUser == "two":
        twoPlayer()  # This function is called in order to play two player game mode

def scenarios():
    global gameRun#I considered passing parameters here, but since I was only using the global variables once here, I didn't do such
    global gameNum
    global majority
    global usergamesWon
    global compgamesWon
    validResponse=False
    computerChoice = ["rock", "paper", "scissors"]#the array of the three options
    choiceRand = random.randint(0, 2)
    computerChoice = computerChoice[choiceRand]#This code generates a random option between the three
    enter = input("Rock, Paper, or Scissors? Enter: ")
    enter = enter.lower()#Just in order to make sure that the user input is lower cased.
    print("")
    if enter == "rock" or enter == "scissors" or enter == "paper":
        validResponse=True
    else:
        print("Choose a valid response")
        gameNum+=1
    if enter == "rock" and computerChoice == "paper" and validResponse==True:
        print("Computer Picked Paper, You lose")
        compgamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == "rock" and computerChoice == "scissors" and validResponse==True:
        print("Computer Picked scissors, You win")
        usergamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == "paper" and computerChoice == "rock" and validResponse==True:
        print("Computer Picked rock, You win")
        usergamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == "paper" and computerChoice == "scissors" and validResponse==True:
        print("Computer Picked scissors, You lose")
        compgamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == "scissors" and computerChoice == "paper" and validResponse==True:
        print("Computer Picked paper, You win")
        usergamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == "scissors" and computerChoice == "rock" and validResponse==True:
        print("Computer Picked rock, You lose")
        compgamesWon += 1
        print("")
        print("User Games Won:", usergamesWon)
        print("Computer Games Won:", compgamesWon)
    if enter == computerChoice and validResponse==True:
        print("You and the computer tied, No gain/loss")
        print("")
        gameNum += 1
    if usergamesWon >= majority:
        print("You have won the tournament, as you have won the best of 5")
        gameRun=True
    if compgamesWon >= majority:
        print("The Computer has won the tournament, as it has won the best of 5")
        gameRun=True
    if gameRun==True:
        p=0
        playAgain = input("Would you like to return to the main menu to play one or two player? Specify yes or no")
        playAgain = playAgain.lower()
        if playAgain=="yes":
            while p<=gamesPlayable:
                usergamesWon = 0
                compgamesWon = 0
                majority = 3  # majority of five is three
                gameNum = 5
                gameRun = False  # This boolean is used in order to determine who has won
                p=1
                runGame()
        if playAgain=="no":
            print("Have a good day")

p1 = 0#in order to allow the players to see who is winning
p2 = 0
pT = 0
def twoPlayer():
    print('Welcome to 2 player mode')
    askPre = int(input("How many games would you like to play? Enter a number: "))#I am allowing the players to choose how many games they desire
    for y in range(0, askPre):
        twoPlayerScenarios()#Function gets called for organization purposes and other scenarios
    print("")
    print("Player One's Games Won:", p1)
    print("Player Two's Games Won:", p2)
    print("Games Tied:", pT)

def twoPlayerScenarios():
    validResponsePlayer = False
    global p1
    global p2
    global pT
    print("")
    ask1 = input("Player One, would you like to choose rock, paper, or scissors?: ")  # Two player interaction
    ask2 = input("Player Two, would you like to choose rock, paper, or scissors?: ")
    ask1 = ask1.lower()
    ask2 = ask2.lower()
    if ask1 == "rock" or ask1 == "scissors" or ask1 == "paper" or ask2 == "rock" or ask2 == "scissors" or ask2 == "paper":
        validResponsePlayer=True
    else:
        print("Choose a valid response")
    if ask1 == ask2:
        print("")
        print("You both have tied, you will be asked two choose a random number one through ten, in order to determine winner")
        compNum = random.randrange(1, 6)#inclusive of one, exclusive of 6, hence one through five
        tieBreak1 = int(input("Player One choose a number one through ten"))
        tieBreak2 = int(input("Player two, choose a different number one through ten"))
        if tieBreak1==compNum:
            print("")
            print("Player One you were right, you win this game")
            p1+=1
        if tieBreak2==compNum:
            print("")
            print("Player Two you were right, you win this game")
            p2+=1
        else:
            pT+=1
    if ask1 == "rock" and ask2 == "scissors" and validResponsePlayer==True:
        print("")
        print("Player One, You have won")
        p1 += 1
    if ask1 == "rock" and ask2 == "paper" and validResponsePlayer==True:
        print("")
        print("Player Two, You have won")
        p2 += 1
    if ask2 == "rock" and ask1 == "scissors" and validResponsePlayer==True:
        print("")
        print("Player Two, You have won")
        p2 += 1
    if ask2 == "rock" and ask1 == "paper" and validResponsePlayer==True:
        print("")
        print("Player One, You have won")
        p1 += 1
    if ask1 == "paper" and ask2 == "scissors" and validResponsePlayer==True:
        print("")
        print("Player Two, You have won")
        p2 += 1
    if ask2 == "paper" and ask1 == "scissors" and validResponsePlayer==True:
        print("")
        print("Player One, You have won")
        p1 += 1

runGame()#Calling the large function which makes program work