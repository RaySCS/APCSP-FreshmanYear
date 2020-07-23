import random
import numpy as np
import matplotlib.pyplot as plt

deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]

def compare():
   countp1 = 13
   countp2 = 13
   playerOneDeck = []
   playerTwoDeck = []
   global deck
   for x in range(13):
       choiceRand = random.randint(0, 12)#Generating 13 random cards into each deck
       cardsChosenDeckOne = deck[choiceRand]
       playerOneDeck.append(cardsChosenDeckOne)
       deck.remove(cardsChosenDeckOne)
   playerTwoDeck.append(deck)

   print("P1:", playerOneDeck)
   print("P2:", playerTwoDeck)

   for a in range(len(playerTwoDeck)):
       if playerOneDeck[a] == playerTwoDeck[a]:
           countp1+=1
       if playerTwoDeck[a] == playerOneDeck[a]:
           countp2+=1
       if playerTwoDeck[a] > playerOneDeck[a]:
           countp1+=1
       if playerOneDeck[a] > playerTwoDeck[a]:
           countp2+=1
   print("Player One's card quantity:", countp1)
   print("Player Twos's card quantity:", countp2)

compare()
