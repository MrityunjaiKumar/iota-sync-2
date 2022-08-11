import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ESP8266 and GSM Powered IOT connectivity',
    Svg: require('@site/static/img/iot-icon.svg').default,
    description: (
      <>
        Platform connectivity is powered by  highly integrated Wi-Fi MCU and GSM module for IoT applications. ESP8266 is a low-cost Wi-Fi microchip, with built-in TCP/IP networking software, and microcontroller capability,
      </>
    ),
  },
  {
    title: 'AVR IC ',
    Svg: require('@site/static/img/ic.svg').default,
    description: (
      <>
        Embedded learning on this platform is made easier via Embedded C examples based on AVR Chip. Its easier to learn register-level Embedded C programming and to use inbuilt peripherals on the microcontroller to interface sensors, actuators etc.
      </>
    ),
  },
  {
    title: 'Arduino supported environment',
    Svg: require('@site/static/img/arduino.svg').default,
    description: (
      <>
        Both ESP8266 and AVR IC is supported via Arduino framework. For beginner, Open-source electronic prototyping platform enabling users to create interactive electronic objects. Large community support enhance the learning process and time to showcase for the prototype design.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
