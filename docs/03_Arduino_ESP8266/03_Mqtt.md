---
sidebar_position: 4
---


# MQTT

MQTT is a lightweight, publish-subscribe, machine to machine network protocol. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth. MQTT, or MQ Telemetry Transport, has become a de facto standard in this world, as it’s easy to set up, and works well without a lot of computing overhead. “MQ” at one time stood for Message Queuing, but it has now apparently transcended its acronym status.


## How Does MQTT Work?
MQTT uses a publish-subscribe methodology, where clients send and receive messages to each other through a centralized broker, also sometimes called a server. Clients both publish and subscribe to information channels called topics, and any data that passes on via the broker is tagged with a topic label. Once clients are pointed to the broker’s IP address, there’s no more system configuration involved. Clients simply send messages to a topic (that may or may not exist elsewhere) by publishing topic-tagged data to it. Clients listen to topics by subscribing to them.

Note that each client knows nothing about the other clients on the network; the broker merely takes care of data distribution. This can be to one client, many clients, or none, if nothing else is actually subscribed. All a client needs to know is where to find the broker/server. If a client’s IP address changes, or there are other modifications in the underlying system, as long as each client knows where to find the server, things will still function properly.

There are many ready to go and opensource mqtt client is available eg. mqtt fx, mqtt lens etc.

We can use then for teeting and visualisation purposes.


To perform this experiment a broker is needed. 

## Library used

[https://github.com/knolleary/pubsubclient](https://github.com/knolleary/pubsubclient)

## Software


```cpp title="Mqtt Example "

#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// GPIO 5 D1
#define LED 5

// WiFi
const char *ssid = "sincgrid"; // Enter your WiFi name
const char *password = "sincgrid.com";  // Enter WiFi password

// MQTT Broker
const char *mqtt_broker = "broker.sincgrid.com";
const char *topic = "esp8266/led";
const char *mqtt_username = "sincgrid";
const char *mqtt_password = "public";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
    // Set software serial baud to 115200;
    Serial.begin(115200);
    // connecting to a WiFi network
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println("Connected to the WiFi network");
    //connecting to a mqtt broker
    client.setServer(mqtt_broker, mqtt_port);
    client.setCallback(callback);
    while (!client.connected()) {
        String client_id = "esp8266-client-";
        client_id += String(WiFi.macAddress());
        Serial.println("Connecting to public sincgrid mqtt broker.....");
        if (client.connect(client_id, mqtt_username, mqtt_password)) {
            Serial.println("Public sincgrid mqtt broker connected");
        } else {
            Serial.print("failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }
    // publish and subscribe
    client.publish(topic, "hello sincgrid");
    client.subscribe(topic);
}

void callback(char *topic, byte *payload, unsigned int length) {
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);
    Serial.print("Message:");
    String message;
    for (int i = 0; i < length; i++) {
        message = message + (char) payload[i];  // convert *byte to string
    }
    Serial.print(message);
    if (message == "on") { digitalWrite(LED, LOW); }   // LED on
    if (message == "off") { digitalWrite(LED, HIGH); } // LED off
    Serial.println();
    Serial.println("-----------------------");
}

void loop() {
    client.loop();
}

```