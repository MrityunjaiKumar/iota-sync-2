---
sidebar_position: 5
---

# SSD
Introduction to SSD

## SEVEN SEGMENT DISPLAY(SSD)
![](img/lecture5_pg2.JPG)


### WHAT IS SSD?
![](img/lecture5_pg3.JPG)


Seven Segment Display (SSD) or seven segment Indicator is an electronic device which helps display decimal numerals and English alphabets.

### TYPES OF SSD
![](img/lecture5_pg4.JPG)


### COMMON CATHODE SSD
![](img/lecture5_pg5.JPG)

In common cathode all the cathodes are tied to a common pin, in this case generally ground, and the LED are driven by the state of the anodes where ground is off and power is on.

### COMMON ANODE SSD
![](img/lecture5_pg6.JPG)

In common anode all the anodes on the display are tied to a common pin, typically the power source, and the LED are controlled via the cathodes with ground being on and power being off.

### DRIVING A LED TYPE SSD
![](img/lecture5_pg7.JPG)


![](img/lecture5_pg8.JPG)

### EXERCISE
- To make a single digit counter

#### HARDWARE
![](img/lecture5_pg10.JPG)

When we write digital high on pins of arduino the current flows and led’s are turned on.

#### SOFTWARE
![](img/lecture5_pg11.JPG)

![](img/lecture5_pg12.JPG)

![](img/lecture5_pg13.JPG)

A basic arduino code will involve two functions for sure: setup and loop. Setup function does not return any value and accepts no parameters. It is used to initialize our hardware. 

### Practice Problem
- Make a four digit counter using four digit seven segment display