basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P2) < 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
})
