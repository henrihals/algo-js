const readlineSync = require("readline-sync");

let username = readlineSync.question("Quel est ton nom?");

let hello = "Bonjour ";

console.log(hello + username);