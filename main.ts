let KeuzeBSS = 0
let WaardeBSS = 0
// keuze BSS van de Speler
function SpelerBSS () {
    // Wachten tot dat er een keuze gemaakt wordt.
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB)))) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        KeuzeBSS = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        KeuzeBSS = 1
    }
    if (input.buttonIsPressed(Button.AB)) {
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
        SpelerBSS()
    } else if (KeuzeBSS == 0 && WaardeBSS == 1) {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            # # # # #
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
basic.forever(function () {
    KeuzeBSS()
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
