let Contact = 0
basic.showIcon(IconNames.Duck)
basic.forever(function () {
    Contact = pins.digitalReadPin(DigitalPin.P2)
    if (Contact == 1) {
        basic.showIcon(IconNames.Diamond)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 10)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(50)
    }
})
