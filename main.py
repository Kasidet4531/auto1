pwm1 = 0
def right():
    global pwm1
    pwm1 += 30
    if pwm1 >= 255:
        pwm1 = 255
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 125)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 125)
def RFFF():
    while 1:
        if pins.digital_read_pin(DigitalPin.P20) == 0:
            stopped()
            iBIT.motor_stop()
            break
        elif pins.digital_read_pin(DigitalPin.P8) == 1:
            stopped()
            iBIT.motor_stop()
            break
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            go()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            left()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            stopped()
            iBIT.motor_stop()
            break
def LL():
    while 1:
        if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            go()
            basic.pause(300)
            while 1:
                if pins.digital_read_pin(DigitalPin.P2) == 1:
                    right()
                elif pins.digital_read_pin(DigitalPin.P2) != 1:
                    right()
                    basic.pause(300)
                    iBIT.motor_stop()
                    break
            break
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            go()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            left()
def back():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 75)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 75)

def FFF():
    while 1:
        if pins.digital_read_pin(DigitalPin.P20) == 0:
            stopped()
            iBIT.motor_stop()
            break
        elif pins.digital_read_pin(DigitalPin.P8) == 1:
            stopped()
            iBIT.motor_stop()
            break
        elif pins.digital_read_pin(DigitalPin.P12) == 1:
            stopped()
            iBIT.motor_stop()
            break
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            go()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            left()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            stopped()
            iBIT.motor_stop()
            break
def sgo(y: number):
    go()
    basic.pause(y)
    iBIT.motor_stop()
    basic.pause(1000)
def left():
    global pwm1
    pwm1 += 30
    if pwm1 >= 255:
        pwm1 = 255
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 125)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 125)
def RRR():
    while 1:
        if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            go()
            basic.pause(300)
            while 1:
                if pins.digital_read_pin(DigitalPin.P1) == 1:
                    left()
                elif pins.digital_read_pin(DigitalPin.P1) != 1:
                    left()
                    basic.pause(400)
                    iBIT.motor_stop()
                    break
            break
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            go()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            left()

def stopped():
    iBIT.motor_stop()
# test-zone

def BBB():
    while 1:
        if pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            back()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            left()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            stopped()
            iBIT.motor_stop()
            break
def sback(x: number):
    back()
    basic.pause(x)
    iBIT.motor_stop()
    basic.pause(1000)
# testzone
def rotate():
    while 1:
        if pins.digital_read_pin(DigitalPin.P2) == 1:
            right()
        elif pins.digital_read_pin(DigitalPin.P8) == 0:
            iBIT.motor_stop()
            break
def go():
    global pwm1
    pwm1 = 55
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 100)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 100)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P20) == 0:
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


basic.forever(on_forever)

def reLL():
    while 1:
        if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 0:
            go()
            basic.pause(300)
            while 1:
                if pins.digital_read_pin(DigitalPin.P2) == 1:
                    right()
                elif pins.digital_read_pin(DigitalPin.P2) != 1:
                    right()
                    basic.pause(400)
                    iBIT.motor_stop()
                    break
            break
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
            go()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
            right()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
            left()

def on_in_background():
    pass
control.in_background(on_in_background)