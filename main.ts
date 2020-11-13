// keuze BSS van de Speler
function SpelerBSS () {
    // Wachten tot dat er een keuze gemaakt wordt.
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB)))) {
    	
    }
    if (input.buttonIsPressed(Button.AB)) {
        KeuzeBSS = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        KeuzeBSS = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        KeuzeBSS = 2
    }
}
// Laat de microbit zijn Blad Steen of Schaar kiezen.0=Blad 1=Steen 2=Schaar
function KeuzeBSS2 () {
    WaardeBSS = randint(0, 2)
}
// Aftellen naar blad Steen Schaar
function Aftel () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function beslis () {
    if (KeuzeBSS == WaardeBSS) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(WachtTijd)
        KeuzeBSS2()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        SpelerBSS()
    } else if ((KeuzeBSS == 0 && WaardeBSS == 1) == true) {
        SCspeler += 1
        basic.showIcon(IconNames.Happy)
        basic.pause(WachtTijd)
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(WachtTijd)
    } else if ((KeuzeBSS == 0 && WaardeBSS == 2) == true) {
        SCmicrobit += 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(WachtTijd)
        basic.showLeds(`
            # # # # #
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            `)
        basic.pause(WachtTijd)
    } else if ((KeuzeBSS == 1 && WaardeBSS == 0) == true) {
        SCmicrobit += 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(WachtTijd)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            # # # # #
            `)
        basic.pause(WachtTijd)
    } else if ((KeuzeBSS == 1 && WaardeBSS == 2) == true) {
        SCspeler += 1
        basic.showIcon(IconNames.Happy)
        basic.pause(WachtTijd)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            `)
        basic.pause(WachtTijd)
    } else if ((KeuzeBSS == 2 && WaardeBSS == 0) == true) {
        SCspeler += 1
        basic.showIcon(IconNames.Happy)
        basic.pause(WachtTijd)
        basic.showLeds(`
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            # # # # #
            `)
        basic.pause(WachtTijd)
    } else if ((KeuzeBSS == 2 && WaardeBSS == 1) == true) {
        SCmicrobit += 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(WachtTijd)
        basic.showLeds(`
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            . . # . .
            `)
        basic.pause(WachtTijd)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
let WaardeBSS = 0
let KeuzeBSS = 0
let WachtTijd = 0
WachtTijd = 1000
let SCspeler = 0
let SCmicrobit = 0
basic.forever(function () {
    KeuzeBSS2()
    Aftel()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // keuze BSS van de Speler
    SpelerBSS()
    beslis()
})
