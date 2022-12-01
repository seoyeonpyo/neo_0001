function doRED () {
    gabyeon_sensor.showColor(neopixel.rgb(255, 100, 50))
    gabyeon_sensor.show()
}
function doblack () {
    gabyeon_sensor.showColor(neopixel.colors(NeoPixelColors.Black))
    gabyeon_sensor.show()
}
let gabyeon_sensor: neopixel.Strip = null
gabyeon_sensor = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
gabyeon_sensor.setBrightness(20)
gabyeon_sensor.showColor(neopixel.colors(NeoPixelColors.Black))
gabyeon_sensor.showRainbow(1, 360)
serial.writeNumber(0)
if (645 < pins.analogReadPin(AnalogPin.P3)) {
    doRED()
} else {
    doblack()
}
basic.forever(function () {
    gabyeon_sensor = pins.analogReadPin(AnalogPin.P3)
    serial.writeNumber(gabyeon_sensor)
    serial.writeLine("")
    basic.pause(100)
})
