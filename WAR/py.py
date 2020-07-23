import random

def choose():
  flipsArray = []
  cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]#Deck of 52 cards.
  player1score=26
  player2score = 26
  player1=[]
  player2=[]
  total=52#Amount of cards necessary to win
  turn=0#Starting the # of flips at 0

  for i in range(26):
      num1=random.randrange(0,total)#Dealing the cards
      deal1=cards[num1]
      cards.remove(deal1)
      total=total-1
      player1.append(deal1)
      num2=random.randrange(0,total)
      deal2=cards[num2]
      cards.remove(deal2)
      player2.append(deal2)
      total=total-1
  #dealing the deck and cards to the players the first time. Each person gets 26 cards(1/2 of the 52)

  print(player1)
  print(player2)

  while player1score!=52 and player2score!=52:
      randnum1=random.randrange(0,len(player1))#So basically keep on running code below until one player doesn't have 52 cards or whole deck(winner)
      move1 = player1[randnum1]
      randnum2=random.randrange(0,len(player2))
      move2 = player2[randnum2]
      if move1>move2:
          player1score=player1score+1#Depedning on who won that "round", they get their own card and the other players card. Vice versa for the other person
          player2score=player2score-1
          player1.append(move2)
          player2.remove(move2)
          turn+=1
      if move2>move1:
          player2score=player2score+1
          player1score=player1score-1
          player1.remove(move1)
          player2.append(move1)
          turn+=1
      if move1==move2:
        noMoreTie = False
        sameTie(turn,player1score,player2score, player1, player2, flipsArray, move1, move2, noMoreTie)#calling a function for ties, as ties is its own thing
  endgame(turn,player1score,player2score, player1, player2, flipsArray)

def endgame(turn,player1score,player2score, player1, player2, flipsArray):
  print("Num of Flips: ", turn)
  print(player1score)
  print(player2score)
  print("Player One Array: ", player1)#just to show who obtained all 52 cards
  print("Player Two Array: ", player2)
  flipsArray.append(turn)


def sameTie(turn,player1score,player2score, player1, player2, flipsArray, move1, move2, noMoreTie):
   while noMoreTie == False:
       player1.remove(move1)#so when a tie occurs, we remove the same cards
       player2.remove(move2)
       if player1score == 0:
           player2score+=1
           player1score-=1
           quit()
       if player2score == 0:
          player1score+=1
          player2score-=1
          quit()#LEFT OFF HERE
       randnum11 = random.randrange(0, len(player1))
       move1 = player1[randnum11]
       player1.append(move1)#After we removed same car, we added a new generated card
       randnum22 = random.randrange(0, len(player2))
       move2 = player2[randnum22]
       player2.append(move2)
       noMoreTie = True




choose()
