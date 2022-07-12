let pwm1 = 0
function right() {
    
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    
    sensors.DDMmotor(AnalogPin.P13, 1, AnalogPin.P14, 125)
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 125)
}

function RFFF() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P20) == 0) {
            stopped()
            iBIT.MotorStop()
            break
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            stopped()
            iBIT.MotorStop()
            break
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break
        }
        
    }
}

function LL() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            go()
            basic.pause(300)
            while (1) {
                if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    right()
                } else if (pins.digitalReadPin(DigitalPin.P2) != 1) {
                    right()
                    basic.pause(300)
                    iBIT.MotorStop()
                    break
                }
                
            }
            break
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        }
        
    }
}

function back() {
    sensors.DDMmotor(AnalogPin.P13, 1, AnalogPin.P14, 75)
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 75)
}

function FFF() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P20) == 0) {
            stopped()
            iBIT.MotorStop()
            break
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            stopped()
            iBIT.MotorStop()
            break
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            stopped()
            iBIT.MotorStop()
            break
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break
        }
        
    }
}

function sgo(y: number) {
    go()
    basic.pause(y)
    iBIT.MotorStop()
    basic.pause(1000)
}

function left() {
    
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 125)
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 125)
}

function RRR() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            go()
            basic.pause(300)
            while (1) {
                if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    left()
                } else if (pins.digitalReadPin(DigitalPin.P1) != 1) {
                    left()
                    basic.pause(400)
                    iBIT.MotorStop()
                    break
                }
                
            }
            break
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        }
        
    }
}

function stopped() {
    iBIT.MotorStop()
}

//  test-zone
function BBB() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            back()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            stopped()
            iBIT.MotorStop()
            break
        }
        
    }
}

function sback(x: number) {
    back()
    basic.pause(x)
    iBIT.MotorStop()
    basic.pause(1000)
}

//  testzone
function rotate() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            iBIT.MotorStop()
            break
        }
        
    }
}

function go() {
    
    pwm1 = 55
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 100)
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 100)
}

basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P20) == 0) {
        go()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        FFF()
        basic.pause(1000)
        sback(900)
        LL()
        basic.pause(1000)
        RFFF()
        basic.pause(1000)
        sgo(300)
        RFFF()
        basic.pause(1000)
        sgo(300)
        RRR()
        basic.pause(1000)
        FFF()
        sback(1400)
        RRR()
        basic.pause(1000)
        RRR()
        basic.pause(1000)
        FFF()
        basic.pause(1000)
        sback(400)
        rotate()
        RRR()
        basic.pause(1000)
        RFFF()
        basic.pause(1000)
        sgo(300)
        LL()
        basic.pause(1000)
        sback(1300)
        LL()
        basic.pause(1000)
        RFFF()
        basic.pause(1000)
        sgo(300)
        RFFF()
        sgo(300)
        RFFF()
        sgo(300)
        RRR()
        basic.pause(1000)
        FFF()
        basic.pause(1000)
        sback(1000)
        RRR()
        RFFF()
        sgo(300)
        RFFF()
        sgo(300)
        LL()
        sback(1300)
        LL()
        basic.pause(1000)
        RFFF()
        sgo(300)
        RRR()
        basic.pause(1000)
        sback(1200)
        LL()
        basic.pause(1000)
        reLL()
        basic.pause(1000)
        FFF()
        sgo(800)
    }
    
})
function reLL() {
    while (1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            go()
            basic.pause(300)
            while (1) {
                if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    right()
                } else if (pins.digitalReadPin(DigitalPin.P2) != 1) {
                    right()
                    basic.pause(400)
                    iBIT.MotorStop()
                    break
                }
                
            }
            break
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            go()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            left()
        }
        
    }
}

control.inBackground(function on_in_background() {
    
})
