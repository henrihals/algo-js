const readlineSync = require("readline-sync");

let n = readlineSync.question("Ecrit un chiffre : ");

var ch;

var total = 0;

for (i = 0; i < n; i++) {
    ch = new Number (readlineSync.question("Donne un chiffre : "));
    total += ch;
}

console.log("Le total des chiffres est de : " + total);