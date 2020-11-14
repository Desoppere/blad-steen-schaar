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
function ScoreNul () {
    WachtTijd = 1000
    SCspeler = 0
    SCmicrobit = 0
}
// Aftellen naar blad Steen Schaar
function Aftel () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        # . . . .
        . # . . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # . .
        . . . # .
        . . . . #
        . . # # .
        `)
}
function doenNiets () {
	
}
function spel () {
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
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(WachtTijd)
        basic.clearScreen()
    }
}
let SCmicrobit = 0
let SCspeler = 0
let WachtTijd = 0
let WaardeBSS = 0
let KeuzeBSS = 0
ScoreNul()
basic.forever(function () {
    while (SCspeler < 3 && SCmicrobit < 3) {
        spel()
    }
    if (SCspeler == 3) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.clearScreen()
        basic.showString("You win !")
    } else {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.clearScreen()
        basic.showString("You loose !")
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
