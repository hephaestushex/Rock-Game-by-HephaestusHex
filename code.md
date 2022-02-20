import sys
import time

console_input = ""

player_name = input("What should we call you, in-game?")

strikes = 0
lives = 0


dialogs = ["Wake up " + player_name + "!!!", #0
"I said, WAKE UP!!!", #1
"*you finally wake up*", #2
"Great, you finally woke up.",#3
"By the way, I'm Mivi, your helpful console friend.", #4 
"Listen, you are now a 'sediment'.", #5
"This happened because you were 'weathered' and 'eroded'.",#6
"You now are finally ashore (in Drumheller), thanks to 'deposition'.",#7
"You have a choice, try to escape from the other 'sediments',",#8
"or, stay here and see your fate.",#9
"Type STAY to STAY... and LEAVE to um.. I'll let you guess what this does",#10
"You are settled, ready to relax when you hear a familiar voice...",#11
"Hey, look here " + player_name + ". You gotta keep moving.",#12
"Look, here is a fork. you can either go north, or go west.",#13
"What's it gonna be? NORTH, or WEST?",#14
"(type NORTH or WEST)",#15
"Mivi leaves, and you are finally relaxing.",#16
"You are on the soon to be Rocky Mountains.",#17
"You are having fun, but when Mivi comes back,",#18
"she pushes you into the 'magma'",#19
"'You were having too much fun', she says.",#20
"'You have to defeat the mighty 'magma' boss.'",#21
"You look down, and see the magma, ready to swallow you.",#22
"You luckily fall onto the side.",#23
"-------------------------------------------",#24
"             Magma Boss Fight              ",#25
"-------------------------------------------",#26
"This is the boss fight, and you have 3 health",#27
"points. Attack with ATTACK, and surrender with SURRENDER",#28
 ]

def dialog(num):
    print(dialogs[num])
    time.sleep(1)

def console(answer, maps):
    global console_input
    correct = False
    while correct != True:
        console_input = input(">")
        if console_input == "MAP":
            print(maps)
            
        else:
            return console_input

def game_over(rock_type):
    global player_name
    print("You did great ", player_name, "."  )
    print("After all your journeys, you ended up as a")
    print(rock_type, " rock, ", player_name, ".")
    print("I should go now... Help others like you, make them")
    print("go through the cycle. Bye ", player_name, ".")
    time.sleep(60)
    sys.exit()

  
confirm_message = player_name + ", am I right? (Type TRUE if yes, FALSE if no)"
str(confirm_message)
confirm = input(confirm_message)

while confirm == "FALSE":
    player_name = input("Ok then. Type your right name ok?")
    confirm = input(confirm_message)

print("Great! Let's go!")
print("---------------------------------")
time.sleep(1.5)
print('''You are a rock, drifting on a river. You  have been separated
from your mother rock, soon to be doomed. This is your journey.
You shall navigate the perils of the world, and soon you shall
see your fate...''')
print("---------------------------------")
time.sleep(5)

print('''This is the action console. Type INFO, all 
caps, to learn the instructions.

Type START to start the game.
''')

console_input = console("START", "")
if console_input == "INFO":
    print('''
 ----------------------------
 This is the info page.
 When you see a word in all caps
 like THIS, that is a command.
 Type the word in all caps, then press enter,
 and see what happens!
''')
    time.sleep(3.5)
    print('''
 If you want to see where you are,
 type MAP. Anything else written will cause 
 you to get a strike. 5 strikes and you are
 out, / game over.
 
 Have Fun!
 ----------------------------  
''')

    print("Let's Start")

elif console_input == "START":
    print("Let's Start...")

else:
    strikes += 1
    if strikes == 3:
        print("TRAGEDY!!!! That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
        time.sleep(60)
        sys.exit()
    print("That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
    print("As a punishment, we take away your right of choice. The correct answer was START or INFO. Moving on..")


for phrase in range(0, 11):
    dialog(phrase)

console_input = console("STAY", "Drumheller")

if console_input == "LEAVE":
    print('''Tragedy!!! You have escaped, but to a nuclear bomb test site! You have been
vaporised... GAME OVER!!!!!1!11!!11!!11!1! You have died!!! you cannot exist again!!!
... or you can just restart the program...''')

    time.sleep(60)
    sys.exit()


elif console_input == "STAY":
    print('''You have stayed, but for how long??? You go to sleep...
ZZZZZzzzzzzzzzzzzzzzzzzz
*'compaction and cementation' occurs*
you wake up, then you realize you are now a rock!!!! A 'sedimentary' rock, to be exact.
To be more exact, sandstone. Woah!!!
''')
    

else:
    strikes += 1
    if strikes == 3:
        print("TRAGEDY!!!! That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
        print("GAME OVER!!!")
        time.sleep(60)
        sys.exit()
    print("That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
    
    print("As a punishment, we take away your right of choice. The correct answer was STAY. Moving on..")


for phrase in range(11, 16):
    dialog(phrase)

console_input = console("WEST", "Drumheller")

if console_input == "NORTH":
    game_over("'sedimentary'")

elif console_input == "WEST":
    print('''You fall into a pit and more rocks pile onto you. It
is very hot. It's almost as if there is immense 'heat and pressure' No wait, there actually is.
You wait 5 minutes then...
    
    ''')

    time.sleep(5)

    print("You are now a 'metamorphic' rock, quartzite to be exact.")

else:
    strikes += 1
    if strikes == 3:
        print("TRAGEDY!!!! That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
        print("GAME OVER!!!!")
        time.sleep(60)
        sys.exit()
    print("That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
    print("As a punishment, we take away your right of choice. The correct answer was WEST. Moving on..")

for phrase in range(16, 29):
    dialog(phrase)

while console_input != "SURRENDER":
    console_input = console("SURRENDER", "Magma's Cave, Rocky Mountains")
    if console_input == "ATTACK":
        lives += 1
        if lives == 3:
            print("GAME OVER!!!!")
            time.sleep(60)
            sys.exit()
        print("You attack, but the magma fires a stream of magma at your edge.")
    
    elif console_input == "SURRENDER":
        print('''Mivi: We will never beat Magma, "name"
Magma: That's Right you won't!!!
Mivi: There is only one thing to do...
Mivi: Go "name"!!! *pushes you into the lava*
*initiate slo-mo*
Mivi: This isn't over Magma. Some day, rocks will come back anew,
	  as a new rock...
Mivi whispers: Igneous. 
*you are melted by Magma*
        ''')

        

    else:
        strikes += 1
        if strikes == 3:
            print("TRAGEDY!!!! That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
            print("GAME OVER!!!!")
            time.sleep(60)
            sys.exit()
        print("That is not a valid command. You get one strike. ", 3-strikes, " more strikes to go!")
        print("As a punishment, we take away your right of choice. The correct answer will not be mentioned. Moving on..")

print("I'm sorry ", player_name, ". I shouldn't have pushed you inside the mountain.")
print("Would you like to be a metamorphic rock? (YES or NO)")
console_input = console("YES", "Rocky Mountains")

if console_input == "NO":
    game_over("igneous")

elif console_input == "YES":
    print("Mivi takes you back to the fork. You turn into a metamorphic rock")
    game_over("metamorphic")

else:
    print("TRAGEDY!!! Mivi does not like what you said!!1!!1! She slaps you so hard you go to the")
    print("nuclear bomb test site!!1!!! TROGAN!!! you have been vaporised!11!!!!")
    print("GAME OVER!!!")