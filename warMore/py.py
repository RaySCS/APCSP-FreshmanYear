import random
import numpy as np
import matplotlib.pyplot as plt

deck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]

def compare():
   cardCountp1 = 13
   cardCountp2 = 13
   wars = 0
   run = False
   global firstDeck
   global secondDeck
   p1Deck = []
   p2Deck = []
   for x in range (13):
       choiceRand1 = random.randint(0, 12)
       cardChosenDeckOne = deck[choiceRand1]
       p1Deck.append(cardChosenDeckOne)
       choiceRand2 = random.randint(0, 12)
       cardChosenDeckTwo = deck[choiceRand2]
       p2Deck.append(cardChosenDeckTwo)
   while cardCountp1 < 26 and run== False:
       for y in range(len(p1Deck)):
           if p1Deck[y] > p2Deck[y]:
               cardCountp1+=1
           if p2Deck[y] > p1Deck[y]:
               cardCountp2+=1
           if p1Deck[y] == p2Deck[y]:
               wars+=1
       if cardCountp1 == 26:
           print("Player One won")
           run = True
       if cardCountp2 == 26:
           print("Player two won")
           run = True

   print("Player One Card Count: ", cardCountp1)
   print("Player Two Card Count: ", cardCountp2)

   print("Wars: ", wars)
   print("Card chosen from deck one:", p1Deck)
   print("Card chosen from deck two:", p2Deck)
compare()
