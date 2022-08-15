---
sidebar_position: 1
---

# Sim800L Introduction

Basic examples to test

* AT       => Once the handshake test is successful, it will back to OK
* AT+CSQ   => Signal quality test, value range is 0-31 , 31 is the best
* AT+CCID  => Read SIM information to confirm whether the SIM is plugged
* AT+CREG? => Check whether it has registered in the network

 AT+CMGF=1 => // Configuring TEXT mode
 
 AT+CMGS=\"+ZZxxxxxxxxxx\" => //change ZZ with country code and xxxxxxxxxxx with phone number to sms, then eneter text 

 AT+CMGS=\"+918766XXXXX\"
AT+CMGS=+918766XXXXX

AT+CMGS=\"8766XXXXX\"
AT+CMGS="8766XXXXX"
send 26 in DEC => (substitute)