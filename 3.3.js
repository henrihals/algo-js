/* Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). 
Make a second version that uses a single method call to perform the copy. (voir 3.3.bonus.js */

const readlineSync = require("readline-sync");

let arrfirst = ["tableau", "craie", "effaceur", "noir", "blanc"];

let arrsecond = [];

arrsecond.push(arrfirst);

console.log("Voici la copie du premier tableau : " + arrsecond);
