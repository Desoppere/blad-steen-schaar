// keuze BSS van de Speler
function SpelerBSS () {
    basic.pause(200)
    // Wachten tot dat er een keuze gemaakt wordt.
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB)))) {
        basic.pause(100)
    }
    basic.pause(200)
    if (input.buttonIsPressed(Button.AB)) {
        KeuzeBSS = 2
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.B)) {
        KeuzeBSS = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        led.plot(KeuzeBSS, 0)
        KeuzeBSS = 0
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
function doenNiets () {
	
}
function beslis () {
    if ((KeuzeBSS == 2 && WaardeBSS == 1) == true) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
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
    } else if ((KeuzeBSS == 0 && WaardeBSS == 1) == true) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        SCspeler += 1
        basic.showIcon(IconNames.Happy)
        basic.pause(WachtTijd)
        images.createImage(`
            # # # # #
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . . . #
            # . # . #
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . . . . .
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . # # # .
            `).showImage(0)
    } else if ((KeuzeBSS == 0 && WaardeBSS == 2) == true) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
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
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
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
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
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
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
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
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(WachtTijd)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
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
