"use strict";

var Gpio = require('../index').Gpio,
  assert = require('assert'),
  input = new Gpio(4, 'in', 'rising');

assert(input.direction() === 'in');
assert(input.edge() === 'rising');

input.unexport();

console.log('ok - ' + __filename);

