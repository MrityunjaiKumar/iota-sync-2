# SIM800L via ESP8266 softwareSerial

```cpp title="SIM800L via ESP8266 softwareSerial"
#include <Arduino.h>
#include <SoftwareSerial.h>


SoftwareSerial swSer(12, 14); //Define hardware connections

void setup() {
  Serial.begin(9600);   //Initialize hardware serial with baudrate of 9600
  swSer.begin(9600);    //Initialize software serial with baudrate of 9600

  Serial.println("\nSoftware serial test started");

  for (char ch = ' '; ch <= 'z'; ch++) {  //send serially a to z on software serial
    swSer.write(ch);
  }
  swSer.println("");

}

void loop() {
  while (swSer.available() > 0) {	//wait for data at software serial
    Serial.write(swSer.read());	//Send data recived from software serial to hardware serial    
  }
  while (Serial.available() > 0) { //wait for data at hardware serial
    swSer.write(Serial.read());     //send data recived from hardware serial to software serial
  }

}
```