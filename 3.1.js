/* Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303 */

const readlineSync = require("readline-sync");

var arr = [];

var ch;

var total = 0;

var nbrefois = new Number (
    readlineSync.question("Combien de chiffres souhaites-tu additionner ? ")
);

for (i = 0; i < nbrefois; i++) {
    ch = new Number (readlineSync.question("Donne un chiffre : "));
    arr.push(ch);
    console.log(arr.join());
    total += ch;
}

console.log("Le total des chiffres est de : " + total);