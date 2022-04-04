radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
        mcqueen_anda += 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        mcqueen_anda += 0
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 3) {
        variable_2 += 1
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        if (mcqueen_anda == 1) {
            if (variable_2 == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
            }
        }
        if (mcqueen_anda == 0) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 120)
        }
    } else {
        variable_2 += 0
    }
    if (receivedNumber == 4) {
        variable_3 = 1
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
        if (mcqueen_anda == 1) {
            if (variable_3 == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
            }
        }
        if (mcqueen_anda == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 120)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
        }
    } else {
        variable_3 += 0
    }
})
let mcqueen_anda = 0
let variable_2 = 0
let variable_3 = 0
radio.setGroup(86)
variable_3 = 0
variable_2 = 0
mcqueen_anda = 0
music.playMelody("E B C5 A B G A F ", 120)
basic.showString("hola")
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 6) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendNumber(9)
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
