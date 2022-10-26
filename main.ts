radio.setGroup(1)
radio.setTransmitPower(0)
basic.forever(function () {
    basic.showString("C")
    radio.sendString("C")
    basic.clearScreen()
    basic.pause(5000)
})
