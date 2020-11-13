# keuze BSS van de Speler
def SpelerBSS():
    global KeuzeBSS
    # Wachten tot dat er een keuze gemaakt wordt.
    while not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.AB))):
        pass
    if input.button_is_pressed(Button.A):
        KeuzeBSS = 0
    if input.button_is_pressed(Button.B):
        KeuzeBSS = 1
    if input.button_is_pressed(Button.AB):
        KeuzeBSS = 2
# Laat de microbit zijn Blad Steen of Schaar kiezen.0=Blad 1=Steen 2=Schaar
def KeuzeBSS2():
    global WaardeBSS
    WaardeBSS = randint(0, 2)
# Aftellen naar blad Steen Schaar
def Aftel():
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
def beslis():
    if KeuzeBSS == WaardeBSS:
        basic.show_leds("""
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            """)
        basic.pause(WachtTijd)
        KeuzeBSS2()
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        SpelerBSS()
    elif (KeuzeBSS == 0 and WaardeBSS == 1) == True:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(WachtTijd)
        basic.show_leds("""
            # # # # #
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            """)
        basic.pause(WachtTijd)
    elif (KeuzeBSS == 0 and WaardeBSS == 2) == True:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
        basic.pause(WachtTijd)
        basic.show_leds("""
            # # # # #
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            """)
        basic.pause(WachtTijd)
    elif (KeuzeBSS == 1 and WaardeBSS == 0) == True:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
        basic.pause(WachtTijd)
        basic.show_leds("""
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            # # # # #
            """)
        basic.pause(WachtTijd)
    elif (KeuzeBSS == 1 and WaardeBSS == 2) == True:
        basic.show_leds("""
            . . # . .
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            """)
        basic.pause(WachtTijd)
        basic.show_icon(IconNames.HAPPY)
        basic.pause(WachtTijd)
    elif (KeuzeBSS == 2 and WaardeBSS == 0) == True:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(WachtTijd)
        basic.show_leds("""
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            # # # # #
            """)
        basic.pause(WachtTijd)
    elif (KeuzeBSS == 2 and WaardeBSS == 1) == True:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
        basic.pause(WachtTijd)
        basic.show_leds("""
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            . . # . .
            """)
        basic.pause(WachtTijd)
    else:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
WaardeBSS = 0
KeuzeBSS = 0
WachtTijd = 0
WachtTijd = 1000

def on_forever():
    KeuzeBSS2()
    Aftel()
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    # keuze BSS van de Speler
    SpelerBSS()
    beslis()
basic.forever(on_forever)
