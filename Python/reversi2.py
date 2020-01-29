import copy

def new_board():
  return [[0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,2,1,0,0,0],
          [0,0,0,1,2,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0]]

def print_board(board):
  for i in range(len(board)):
    print(i+1, end = ' ')
    for j in range(len(board[i])):
      print(board[i][j], end = ' ')
    print()
  print("  a b c d e f g h")

def score(board):
  s1 = 0
  s2 = 0
  for i in range(len(board)):
    for j in range(len(board[i])):
      if board[i][j] == 1:
        s1 = s1 + 1
      if board[i][j] == 2:
        s2 = s2 + 1
  
  return (s1,s2)



def enclosing (board, player,pos,direction):
  i = pos[0]
  j = pos[1]
  opponent = 0
  
  #find out the opponent
  if player == 1:
    opponent = 2
  elif player == 2:
    opponent = 1

  if direction == (0,-1) : # means player moving right so check left
    if j-1 > 0:
      if( board[i][j-1] == player): #checking if the left adjacent to the intended move is player's own stone or not
        return False
      else:
        while( j-1 > 0 and board[i][j-1] == opponent):
          j = j - 1 

        if(j-1 >= 0 and board[i][j-1]== player):
            return True
        else:
          return False
    else:
      return False
  elif direction == (1,1):  #means player wants to move diagonal bottom right so check diagonal up left 
    if j - 1 > 0 and i - 1> 0:
      if  board[i-1][j-1] == player :
        return False
      else:
        while(i-1> 0 and j-1> 0 and board[i-1][j-1] == opponent):
          i= i - 1 
          j = j - 1
        if i-1>=0 and j-1>=0 and board[i-1][j-1]==player:
          return True
        else:
          return False
    else: 
      return False
  elif direction == (-1,-1): #means player wants to move diagonal up left so check diagonal bottom right
      if i+1<8 and j+1 < 8:
        if board[i+1][j+1] == player:
          return False
        else:
          while i+1< 8 and j+1< 8 and board[i+1][j+1]==opponent:
            i = i + 1
            j = j + 1
          if i+1<8 and j+1<8 and board[i+1][j+1] == player:
            return True
          else:
            return False
      else:
        return False
  elif direction == (0,1) : #means player wants to move left so check right 
    if j + 1 < 8:
      if board[i][j+1] == player:
        return False
      else:
        while ( j + 1 < 8 and board[i][j+1] == opponent):
          j = j + 1
        if j+1 >= 0 and board[i][j+1] == player:
          return True
        else:
          return False
    else:
      return False
  elif direction == (-1,0): #means player wants to move up so check down
    if i + 1< 8:
      if board[i+1][j] == player:
        return False
      else:
        while i + 1 < 8 and board[i+1][j] == opponent:
          i = i + 1
        if i + 1 < 8 and board[i+1][j] == player:
          return True
        else:
          return False
    else:
      return False
  elif direction == (1,0): # means player wants to move down so check up
    if i - 1 > 0:

      if board[i-1][j] == player:
        return False
      else:
        while i -1 > 0 and board[i-1][j] == opponent:
          i = i - 1
        if i - 1>=0 and board[i-1][j] == player:
          return True
        else:
          return False
    else:
      return False
  elif direction == (-1,1): #means player wants to move bottom left(diagonal left down) so check diagonal right up
    if i-1 > 0 and j+1< 8:
      if board[i-1][j+1] == player:
        return False
      else:
        while i - 1 > 0 and j + 1 < 8 and board[i-1][j+1] == opponent:
          i = i - 1
          j = j + 1
        if i - 1>=0 and j+1 <=8 and board[i-1][j+1] == player:
          return True
        else: 
          return False
    else:
      return False
  elif direction == (1,-1): #means player wants to move diagonal right up so check diagonal left down
    if i + 1< 8 and j-1>0:
      if board[i+1][j-1] == player:
        return False
      else:
        while i+1<8 and j-1>0 and board[i+1][j-1] == opponent:
          i = i + 1
          j = j - 1
        if i + 1<8 and j-1>=0 and board[i+1][j-1] == player:
          return True
        else:
          return False 
    else:
      return False 

def valid_moves(board,player):
  moves = []
  opponent = 0
  
  #find out the opponent
  if player == 1:
    opponent = 2
  elif player == 2:
    opponent = 1

  for i in range(len(board)):
    for j in range(len(board[i])):
      if board[i][j] == player:
        #check all directions
        if j < len(board[i]) - 1: #check right
          
          if board[i][j+1] == opponent:#then go ahead and stop until empty location found but if edge then break
            x = j+1
            while (x <=len(board[i]) - 1 and board[i][x] == opponent):
              x = x + 1
            if  x <=len(board[i]) - 1 and board[i][x] == 0:
              if  enclosing(board,player,(i,x),(0,-1)):
              
                moves.append((i,x))
        
        if j > 0:
          
          if board[i][j-1] == opponent:  #check left
            x = j - 1

            while(x >=0 and board[i][x] == opponent):
              x = x - 1

            if x >= 0 and board[i][x] == 0:
              if enclosing(board,player,(i,x),(0,1)):
                moves.append((i,x))
        
        if i < len(board[i]) -1 :
         
          if board[i+1][j] == opponent: #check down
            x = i + 1
            while x<=len(board[i]) - 1 and board[x][j] == opponent:
              x = x + 1
          
            if x <=len(board[i]) - 1 and board[x][j] == 0:
              if enclosing(board,player,(x,j),(1,0)):
                moves.append((x,j))
          
        #similarly check for up and all diagonals
        if i>0:
         
          if board[i-1][j] == opponent:#check up
            x = i - 1
            while x >=0 and board[x][j] == opponent:
              x = x - 1
            
            if x >=0 and board[x][j] == 0:
              if enclosing(board,player,(x,j),(-1,0)):
                moves.append((x,j))

        if i < len(board[i]) - 1  and j < len(board[i]) - 1:
          
          if board[i+1][j+1] == opponent: #check diagonal right down
            x = i + 1
            y = j + 1
            while x <8 and y <8 and board[x][y] == opponent:
              x = x + 1
              y = y + 1
            if x<8 and y <8 and board[x][y] == 0:
              if enclosing(board,player,(x,y),(1,1)):
                moves.append((x,y))
        
        if i >0 and j > 0:
          
          if board[i-1][j-1] == opponent:#check diagonal left up
            x = i - 1
            y = j - 1
            while x >=0 and y >= 0 and board[x][y] == opponent:
              x = x - 1
              y = y - 1
            if x >=0 and y >=0 and board[x][y] == 0:
              if enclosing(board,player,(x,y),(-1,-1)):
                moves.append((x,y))
        
        if i > 0 and j < len(board[i])- 1:
          
          if board[i-1][j+1] == opponent: #check diagonal right up
            x = i - 1
            y = j + 1
            while x >= 0 and y <8 and board[x][y] == opponent:
              x = x - 1
              y = y + 1
          
            if x>=0 and y<8 and board[x][y] == 0:
              if enclosing(board,player,(x,y),(1,-1)):
                moves.append((x,y))

        if i < len(board[i]) - 1 and j > 0:
          if  board[i+1][j-1] == opponent: #check diagonal left down
            x = i + 1
            y = j - 1
            while x < 8 and y >= 0 and board[x][y] == opponent:
              x = x + 1
              y = y - 1
            if x < 8 and y >=0 and board[x][y] == 0:
              if enclosing(board,player,(x,y),(-1,1)):
                moves.append((x,y))

  return moves

def next_state(board,player,pos):
  opponent = 0
  
  #find out the opponent
  if player == 1:
    opponent = 2
  elif player == 2:
    opponent = 1

  moves_player = valid_moves(board,player)

  if len(moves_player) > 0:
    if pos in moves_player:
      if enclosing(board,player,(pos[0],pos[1]),(0,-1)): #intented right move
       
        i = pos[0]
        j = pos[1]
     
        while(board[i][j]!= player):
          board[i][j] = player
   
          j = j - 1
      elif enclosing(board,player,(pos[0],pos[1]),(0,1)): #intended left move
        i = pos[0]
        j = pos[1]
        while(board[i][j]!= player):
          board[i][j] = player
          j = j + 1
      elif enclosing(board,player,(pos[0],pos[1]),(-1,0)):#intended up 
        i = pos[0]
        j = pos[1]
        while(board[i][j]!= player):
          board[i][j] = player
          i = i + 1
      elif enclosing(board,player,(pos[0],pos[1]),(1,0)): #intended down move
        i = pos[0]
        j = pos[1]
        while(board[i][j]!= player):
          board[i][j] = player
          i = i - 1
      elif enclosing(board,player,(pos[0],pos[1]),(1,1)):#intended bottom right
        i = pos[0]
        j = pos[1]
        while(board[i][j]!= player):
          board[i][j] = player
          j = j - 1
          i = i - 1
      elif enclosing(board,player,(pos[0],pos[1]),(-1,-1)): #intended top left
        i = pos[0]
        j = pos[1]
        while (board[i][j]!=player):
          board[i][j] = player
          i = i + 1
          j = j + 1
      elif enclosing(board,player,(pos[0],pos[1]),(-1,1)): #intended bottom left
        i = pos[0]
        j = pos[1]
        while (board[i][j]!=player):
          board[i][j] = player
          i = i - 1
          j = j + 1
      elif enclosing(board,player,(pos[0],pos[1]),(1,-1)): #intended top right
        i = pos[0]
        j = pos[1]
        while (board[i][j]!=player):
          board[i][j] = player
          i = i + 1
          j = j - 1
   
  moves_opponent = valid_moves(board,opponent)
 
  if len(moves_opponent) > 0:
    return(board,opponent)
  else:
    return(board,0)

  
def position(pos):
  if pos == "a1":
     return (0,0)
  elif pos == "a2":
     return (1,0)
  elif pos == "a3":
     return (2,0)
  elif pos == "a4":
     return (3,0)
  elif pos == "a5":
     return (4,0)
  elif pos == "a6":
     return (5,0)
  elif pos == "a7":
     return (6,0)
  elif pos == "a8":
     return (7,0)
  elif pos == "b1":
     return (0,1)
  elif pos == "b2":
     return (1,1)
  elif pos == "b3":
     return (2,1)
  elif pos == "b4":
     return (3,1)
  elif pos == "b5":
     return (4,1)
  elif pos == "b6":
     return (5,1)
  elif pos == "b7":
     return (6,1)
  elif pos == "b8":
     return (7,1)
  elif pos == "c1":
     return (0,2)
  elif pos == "c2":
     return (1,2)
  elif pos == "c3":
     return (2,2)
  elif pos == "c4":
     return (3,2)
  elif pos == "c5":
     return (4,2)
  elif pos == "c6":
     return (5,2)
  elif pos == "c7":
     return (6,2)
  elif pos == "c8":
     return (7,2)
  elif pos == "d1":
     return (0,3)
  elif pos == "d2":
     return (1,3)
  elif pos == "d3":
     return (2,3)
  elif pos == "d4":
     return (3,3)
  elif pos == "d5":
     return (4,3)
  elif pos == "d6":
     return (5,3)
  elif pos == "d7":
     return (6,3)
  elif pos == "d8":
     return (7,3)
  elif pos == "e1":
     return (0,4)
  elif pos == "e2":
     return (1,4)
  elif pos == "e3":
     return (2,4)
  elif pos == "e4":
     return (3,4)
  elif pos == "e5":
     return (4,4)
  elif pos == "e6":
     return (5,4)
  elif pos == "e7":
     return (6,4)
  elif pos == "e8":
     return (7,4)
  elif pos == "f1":
     return (0,5)
  elif pos == "f2":
     return (1,5)
  elif pos == "f3":
     return (2,5)
  elif pos == "f4":
     return (3,5)
  elif pos == "f5":
     return (4,5)
  elif pos == "f6":
     return (5,5)
  elif pos == "f7":
     return (6,5)
  elif pos == "f8":
     return (7,5)
  elif pos == "g1":
     return (0,6)
  elif pos == "g2":
     return (1,6)
  elif pos == "g3":
     return (2,6)
  elif pos == "g4":
     return (3,6)
  elif pos == "g5":
     return (4,6)
  elif pos == "g6":
     return (5,6)
  elif pos == "g7":
     return (6,6)
  elif pos == "g8":
     return (7,6)
  elif pos == "h1":
     return (0,7)
  elif pos == "h2":
     return (1,7)
  elif pos == "h3":
     return (2,7)
  elif pos == "h4":
     return (3,7)
  elif pos == "h5":
     return (4,7)
  elif pos == "h6":
     return (5,7)
  elif pos == "h7":
     return (6,7)
  elif pos == "h8":
     return (7,7)
  else:
    return "None"

def positionString(pos):
  if pos == (0,0):
     return "a1"
  elif pos == (1,0):
     return "a2"
  elif pos == (2,0):
     return "a3"
  elif pos == (3,0):
     return "a4"
  elif pos == (4,0):
     return "a5"
  elif pos == (5,0):
     return "a6"
  elif pos == (6,0):
     return "a7"
  elif pos == (7,0):
     return "a8"
  elif pos == (0,1):
     return "b1"
  elif pos == (1,1):
     return "b2"
  elif pos == (2,1):
     return "b3"
  elif pos == (3,1):
     return "b4"
  elif pos == (4,1):
     return "b5"
  elif pos == (5,1):
     return "b6"
  elif pos == (6,1):
     return "b7"
  elif pos == (7,1):
     return "b8"
  elif pos == (0,2):
     return "c1"
  elif pos == (1,2):
     return "c2"
  elif pos == (2,2):
     return "c3"
  elif pos == (3,2):
     return "c4"
  elif pos == (4,2):
     return "c5"
  elif pos == (5,2):
     return "c6"
  elif pos == (6,2):
     return "c7"
  elif pos == (7,2):
     return "c8"
  elif pos == (0,3):
     return "d1"
  elif pos == (1,3):
     return "d2"
  elif pos == (2,3):
     return "d3"
  elif pos == (3,3):
     return "d4"
  elif pos == (4,3):
     return "d5"
  elif pos == (5,3):
     return "d6"
  elif pos == (6,3):
     return "d7"
  elif pos == (7,3):
     return "d8"
  elif pos == (0,4):
     return "e1"
  elif pos == (1,4):
     return "e2"
  elif pos == (2,4):
     return "e3"
  elif pos == (3,4):
     return "e4"
  elif pos == (4,4):
     return "e5"
  elif pos == (5,4):
     return "e6"
  elif pos == (6,4):
     return "e7"
  elif pos == (7,4):
     return "e8"
  elif pos == (0,5):
     return "f1"
  elif pos == (1,5):
     return "f2"
  elif pos == (2,5):
     return "f3"
  elif pos == (3,5):
     return "f4"
  elif pos == (4,5):
     return "f5"
  elif pos == (5,5):
     return "f6"
  elif pos == (6,5):
     return "f7"
  elif pos == (7,5):
     return "f8"
  elif pos == (0,6):
     return "g1"
  elif pos == (1,6):
     return "g2"
  elif pos == (2,6):
     return "g3"
  elif pos == (3,6):
     return "g4"
  elif pos == (4,6):
     return "g5"
  elif pos == (5,6):
     return "g6"
  elif pos == (6,6):
     return "g7"
  elif pos == (7,6):
     return "g8"
  if pos == (0,7):
     return "h1"
  elif pos == (1,7):
     return "h2"
  elif pos == (2,7):
     return "h3"
  elif pos == (3,7):
     return "h4"
  elif pos == (4,7):
     return "h5"
  elif pos == (5,7):
     return "h6"
  elif pos == (6,7):
     return "h7"
  elif pos == (7,7):
     return "h8"
  else:
    return "None"


def getMax(board,moves):
  temp_board = copy.deepcopy(board)
  max = 0
  i = 0
  pos =(0,0)
  while i < len(moves):
    next_state(temp_board,2,moves[i])
    player2_score = score(temp_board)[1]
    if player2_score > max:
      pos = moves[i]
      i = i + 1
    temp_board = copy.deepcopy(board)
  return pos
 
def run_two_players():
  
  state = (new_board(),1)
  print_board(state[0])
  userInput = input("Player "+ str(state[1])+ " turn. Drop your stone!")
  
  while userInput != "stop" and userInput !="q" and state[1] != 0:
    print_board(state[0])
    if position(userInput) != "None":
      moves = valid_moves(state[0],state[1])
      if position(userInput) in moves:
        state = next_state(state[0],state[1],position(userInput))
      else:
        print("Invalid Move")
    else:
      print ("Invalid Move")
    userInput = input("Player "+ str(state[1])+ " turn. Drop your stone!")

  print("game end: " + str(score(state[0])))
    
def run_single_player():
    state = (new_board(),1)
    print_board(state[0])
    userInput = input("Player "+ str(state[1])+ " turn. Drop your stone!")

    while userInput !="stop" and userInput !="q" and state[1] !=0:
      #print_board(state[0])
      if position(userInput)!="None" and state[1] == 1:
        moves = valid_moves(state[0],state[1])
        if position(userInput) in moves:
          state = next_state(state[0],state[1],position(userInput)) 
          print_board(state[0])
        else:
          print("Invalid Move")
      elif state[1] == 2:
        moves = valid_moves(state[0],state[1])
        print("Player 2 moved")
        pos = getMax(state[0],moves)
        print (positionString(pos))
        state = next_state(state[0],state[1],pos)
        print_board(state[0])

      else:
        print ("Invalid Move")

      if(state[1] == 1):
        userInput = input("Player "+ str(state[1])+ " turn. Drop your stone!")



          

run_single_player() 

