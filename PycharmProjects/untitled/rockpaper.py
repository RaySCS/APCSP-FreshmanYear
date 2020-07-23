def ComputerPick():
    import math
    import random
    computerChoice = ["rock", "paper", "scissors"]
    choiceRand = (random.randrange(0, 3))
    computerChoice = computerChoice[choiceRand]
    enter = input("rock, paper, or scissors?")
    if enter == "Rayaan":
        print("right")
    if enter == "rock" and computerChoice == "paper":
        print("You lose")
    if enter == "rock" and computerChoice == "scissors":
        print("You win")
    if enter == "paper" and computerChoice == "rock":
        print("You win")
    if enter == "paper" and computerChoice == "scissors":
        print("You lose")
    if enter == "scissors" and computerChoice == "paper":
        print("You win")
    if enter == "scissors" and computerChoice == "rock":
        print("You lose")
    print(computerChoice)

ComputerPick()