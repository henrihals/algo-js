/* Ask the user to enter its first name and display a message saying "Hello first name". */

const readlineSync = require("readline-sync");

let username = readlineSync.question("Quel est ton nom?");

let hello = "Bonjour ";

console.log(hello + username);