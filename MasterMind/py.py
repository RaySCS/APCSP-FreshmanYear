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
    BlackPegs = 0
    WhitePegs = 0
    positionCheck1 = False
    positionCheck2 = False
    positionCheck3 = False
    positionCheck4 = False
    arrayColors = ["red", "orange", "green", "blue", "yellow", "purple"]#Array of colors
    compChoice = random.sample(arrayColors, 4)#This code allows for a random selection of the quantity, ALSO MAKES AN ARRAY
    user = input("What is your guess? ie: red, green, blue, orange")
    userGuess = user.split(",")#Allows for Letters to be splitted. Gives in an array format. Could split by any character
    for i in range(0,len(compChoice)):
        white = False
        for b in range(0, len(userGuess)):
            if (compChoice[i]==userGuess[b]):
                white = True#If any match found, boolean is true
                WhitePegs+=1
    if compChoice[0] == userGuess[0]:
        positionCheck1 = True
    if compChoice[1] == userGuess[1]:
        positionCheck2 = True
    if compChoice[2] == userGuess[2]:
        positionCheck3 = True
    if compChoice[3] == userGuess[3]:
        positionCheck4 = True
    if white==True and positionCheck1 ==True:
        BlackPegs+=1
    if white==True and positionCheck2 ==True:
        BlackPegs+=1
    if white==True and positionCheck3 ==True:
        BlackPegs+=1
    if white==True and positionCheck4 ==True:
        BlackPegs+=1
    WhitePegs = WhitePegs - BlackPegs#In order to avoid duplicate between both white and black
    print("Black Pegs: ", BlackPegs)
    print("White Pegs: ", WhitePegs)
    print(compChoice)


check()