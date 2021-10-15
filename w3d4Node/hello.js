"use strict"
const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout,
});
readline.question('What is your name? ', name => {
 console.log(`Welcome ${name}`);
 readline.close();
});