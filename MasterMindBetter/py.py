import random

print("Welcome to MasterMind, a game which involves an intellectual mindset or just pure luck!")#Below are rules
print("Rules: ")
print("-The computer selects a sequence of four colors out of six, which are red, green, orange, blue, yellow, and purple")
print("-You input a sequence of FOUR colors out of the list provided(enter full color names)")
print("-Once you have selected a sequence press return and then you will see how accurate you were")
print("-If you are told a white peg, then you have the right color, but not the right position for one of the colors")
print("-If you are told a black peg, then you have the right color, and right position for one of the colors ")
print("-Format should be as followed, ex: red, green, orange, blue")
print("-SEQUENCE AND COLORS ARE KEY TO SUCCESS")
print("")

def check():
    positionCheck1 = False
    positionCheck2 = False
    positionCheck3 = False
    positionCheck4 = False
    secure1 = False
    secure2 = False
    secure3 = False
    secure4 = False
    arrayColors = ["red", "orange", "green", "blue", "yellow", "purple"]#Array of colors
    compChoice = random.sample(arrayColors, 4)#This code allows for a random selection of the quantity, ALSO MAKES AN ARRAY(no duplicates)
    i=0
    Attempts=0
    games=9#Really 10 games as increment allows.
    while i<games:
        i+=1
        while secure1==False or secure2 ==False or secure3==False or secure4==False:
            Attempts += 1
            BlackPegs = 0
            WhitePegs = 0
            user = input("What is your guess? ie: red, green, blue, orange")
            userGuess = user.split(",")#Allows for Letters to be splitted. Gives in an array format. Could split by any character
            for i in range(0, len(compChoice)):
                white = False
                for b in range(0, len(userGuess)):
                    if (compChoice[i] == userGuess[b]):
                        white = True  # If any match found, boolean is true
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
                secure1=True
            if white == True and positionCheck2 == True:
                BlackPegs += 1
                secure2=True
            if white == True and positionCheck3 == True:
                BlackPegs += 1
                secure3=True
            if white == True and positionCheck4 == True:
                BlackPegs += 1
                secure4=True
            if BlackPegs==4:
                print("YOU HAVE WON!!")
            if Attempts>games:
                print("Game over!")
                secure1=True
                secure2=True
                secure3=True
                secure4=True
            WhitePegs = WhitePegs - BlackPegs  # In order to avoid duplicate between both white and black
            print("Black Pegs: ", BlackPegs)
            print("White Pegs: ", WhitePegs)
            print("Computer Choice: ", compChoice)



check()