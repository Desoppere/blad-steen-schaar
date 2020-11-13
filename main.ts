let KeuzeBSS2 = 0
let WaardeBSS = 0
function SpelerBSS () {
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
        KeuzeBSS2 = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        KeuzeBSS2 = 1
    }
    if (input.buttonIsPressed(Button.AB)) {
        KeuzeBSS2 = 2
    }
}
input.onButtonPressed(Button.A, function () {
    KeuzeBSS()
    basic.showNumber(WaardeBSS)
})
// Laat de microbit zijn Blad Steen of Schaar kiezen.0=Blad 1=Steen 2=Schaar
function KeuzeBSS () {
    WaardeBSS = randint(0, 2)
}
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
    SpelerBSS()
})
