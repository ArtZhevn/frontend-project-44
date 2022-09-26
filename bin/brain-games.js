#!/usr/bin/env node
import greetings from '../src/cli.js';
import brainCalc from './brain-calc.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
greetings();
brainEven();
brainCalc();
