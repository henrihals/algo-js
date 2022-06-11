/* Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. 
At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6. */

const readlineSync = require("readline-sync");

let n = readlineSync.question("Ecrit un chiffre : ");

var ch;

var total = 0;

for (i = 0; i < n; i++) {
    ch = new Number (readlineSync.question("Donne un chiffre : "));
    total += ch;
}

console.log("Le total des chiffres est de : " + total);