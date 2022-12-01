function doRED () {
    round_strip.showColor(neopixel.rgb(70, 30, 20))
    round_strip.show()
}
function doblack () {
    round_strip.showColor(neopixel.colors(NeoPixelColors.Black))
    round_strip.show()
}
let round_strip: neopixel.Strip = null
round_strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
let square_strip = neopixel.create(DigitalPin.P16, 64, NeoPixelMode.RGB)
round_strip.setBrightness(20)
square_strip.setBrightness(20)
round_strip.showColor(neopixel.colors(NeoPixelColors.Black))
round_strip.showRainbow(1, 360)
square_strip.showColor(neopixel.colors(NeoPixelColors.Black))
square_strip.showRainbow(1, 360)
basic.forever(function () {
    serial.writeNumber(Math.round(pins.analogReadPin(AnalogPin.P3) / 5))
    serial.writeLine("")
    round_strip.setBrightness(Math.round(pins.analogReadPin(AnalogPin.P3) / 5))
    basic.pause(100)
    if (true) {
        doRED()
    } else {
        doblack()
    }
})
