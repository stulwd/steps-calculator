# import time
# print(1)
# time.sleep(1)
# print(2)
# time.sleep(1)
# print(3)
# time.sleep(1)
# print(4)
# time.sleep(1)
# print(5)
# time.sleep(1)

from xugu import * 

pin1 = Pin('D9', Pin.IN)
pin2 = Pin('D10', Pin.IN)
pin3 = Pin('D11', Pin.IN)
pin4 = Pin('D12', Pin.IN)
pin5 = Pin('D13', Pin.IN)

pin1.write_digital(1)
pin2.write_digital(1)
pin3.write_digital(1)
pin4.write_digital(1)
pin5.write_digital(1)
while True:
    v1 = pin1.read_digital()
    v2 = pin2.read_digital()
    v3 = pin3.read_digital()
    v4 = pin4.read_digital()
    v5 = pin5.read_digital()
    if pin1.read_digital() == 0:
        print(1)
    if pin2.read_digital() == 0:
        print(2)
    if pin3.read_digital() == 0:
        print(3)
    if pin4.read_digital() == 0:
        print(4)
    if pin5.read_digital() == 0:
        print(5)
    # if pin2.read_digital() == 0:
    #     print(2)
    # if pin3.read_digital() == 0:
    #     print(3)
    # if pin4.read_digital() == 0:
    #     print(4)
    # if pin5.read_digital() == 0:
    #     print(5)

