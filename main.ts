let led2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
led2.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
led2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
led2.show()
basic.forever(function () {
    led2.rotate(1)
    led2.show()
    basic.pause(100)
})
