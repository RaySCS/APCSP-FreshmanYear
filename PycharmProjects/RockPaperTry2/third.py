import random
def ComputerPick():
    usergamesWon = 0
    compgamesWon = 0
    p1 = 0
    p2 = 0
    pT = 0
    majority = 3
    gameNum = 5
    name = input('Hello, What is your name?')
    print("User Games Won:", usergamesWon)
    print("Computer Games Won:", compgamesWon)
    print("Welcome", name, "to Rock, Paper, or Scissors!")
    preUser = input("Would you like to play one player or two player? Specify one or two: ")
    if preUser=="one":
        print("5 Game tournament initiated")
        print("")
        for x in range(0,gameNum):
            computerChoice = ["rock", "paper", "scissors"]
            choiceRand = random.randint(0,2)
            computerChoice = computerChoice[choiceRand]
            enter = input("Rock, Paper, or Scissors? Enter: ")
            enter = enter.lower()
            print("")
            if enter==computerChoice:
                print("You and the computer tied, No gain/loss")
                print("")
                gameNum+=1
            if enter == "rock" and computerChoice == "paper":
                print("Computer Picked Paper, You lose")
                compgamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if enter == "rock" and computerChoice == "scissors":
                print("Computer Picked scissors, You win")
                usergamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if enter == "paper" and computerChoice == "rock":
                print("Computer Picked rock, You win")
                usergamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if enter == "paper" and computerChoice == "scissors":
                print("Computer Picked scissors, You lose")
                compgamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if enter == "scissors" and computerChoice == "paper":
                print("Computer Picked paper, You win")
                usergamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if enter == "scissors" and computerChoice == "rock":
                print("Computer Picked rock, You lose")
                compgamesWon+=1
                print("")
                print("User Games Won:", usergamesWon)
                print("Computer Games Won:", compgamesWon)
            if usergamesWon>=majority:
                print("The User has won the tournament, as you have won the best of 5")
            if compgamesWon>= majority:
                print("The Computer has won the tournament, as you have won the best of 5")
        print("")

    if preUser=="two":
        print('Welcome to 2 player mode')
        askPre = int(input("How many games would you like to play? Enter a number: "))
        for y in range(0,askPre):
            ask1 = input("Player One, would you like to choose rock, paper, or scissors?: ")
            ask2 = input("Player Two, would you like to choose rock, paper, or scissors?: ")
            ask1 = ask1.lower()
            ask2 = ask2.lower()
            if ask1==ask2:
                print("You both have tied")
                pT+=1
            if ask1=="rock" and ask2=="scissors":
                print("Player One, You have won")
                p1+=1
            if ask1=="rock" and ask2=="paper":
                print("Player Two, You have won")
                p2+=1
            if ask2=="rock" and ask1=="scissors":
                print("Player Two, You have won")
                p2+=1
            if ask2=="rock" and ask1=="paper":
                print("Player One, You have won")
                p1+=1
            if ask1=="paper" and ask2=="scissors":
                print("Player Two, You have won")
                p2+=1
            if ask2=="paper" and ask1=="scissors":
                print("Player One, You have won")
                p1+=1
        print("")
        print("Player One's Games Won:", p1)
        print("Player Two's Games Won:", p2)
        print("Games Tied:", pT)

ComputerPick()