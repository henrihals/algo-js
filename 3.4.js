/* Write a program that will display the minimum and maximum elements of a given array. */

const readlineSync = require("readline-sync");

let array = [20, 50, 75, 100, 125];

let min = Math.min(...array);
console.log(min);

let max = Math.max(...array);
console.log(max);