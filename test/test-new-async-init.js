"use strict";

const Gpio = require('../index').Gpio;
const gpio488 = new Gpio(488, 'in');
const gpio489 = new Gpio(489, 'in');
const gpio490 = new Gpio(490, 'in');
const gpio491 = new Gpio(491, 'in');
const gpio492 = new Gpio(492, 'out');
const gpio493 = new Gpio(493, 'out');
const gpio494 = new Gpio(494, 'out');
const gpio495 = new Gpio(495, 'out');

gpio488.init().then(() => {
  console.log('Input 488 Ready');
  const value = gpio488.readSync();
  console.log('Input 488 Value: ', value);
  gpio488.unexport();
});

gpio489.init().then(() => {
  console.log('Input 489 Ready');
  const value = gpio489.readSync();
  console.log('Input 489 Value: ', value);
  gpio489.unexport();
});

gpio490.init().then(() => {
  console.log('Input 490 Ready');
  const value = gpio490.readSync();
  console.log('Input 490 Value: ', value);
  gpio490.unexport();
});

gpio491.init().then(() => {
  console.log('Input 491 Ready');
  const value = gpio491.readSync();
  console.log('Input 491 Value: ', value);
  gpio491.unexport();
});

gpio492.init().then(() => {
  console.log('Output 492 Ready');
  let value = gpio492.readSync();
  console.log('Output 492 Value before: ', value);
  gpio492.writeSync(!value);
  value = gpio492.readSync();
  console.log('Output 492 Value after: ', value);
  gpio492.writeSync(0);
  gpio492.unexport();
});

gpio493.init().then(() => {
  console.log('Output 493 Ready');
  let value = gpio493.readSync();
  console.log('Output 493 Value before: ', value);
  gpio493.writeSync(!value);
  value = gpio493.readSync();
  console.log('Output 493 Value after: ', value);
  gpio493.writeSync(0);
  gpio493.unexport();
});

gpio494.init().then(() => {
  console.log('Output 494 Ready');
  let value = gpio494.readSync();
  console.log('Output 494 Value before: ', value);
  gpio494.writeSync(!value);
  value = gpio494.readSync();
  console.log('Output 494 Value after: ', value);
  gpio494.writeSync(0);
  gpio494.unexport();
});

gpio495.init().then(() => {
  console.log('Output 495 Ready');
  let value = gpio495.readSync();
  console.log('Output 495 Value before: ', value);
  gpio495.writeSync(!value);
  value = gpio495.readSync();
  console.log('Output 495 Value after: ', value);
  gpio495.writeSync(0);
  gpio495.unexport();
});
