const readlineSync = require("readline-sync");

var arr = [];

var ch;

var total = 0;

var moyenne = 0;

var nbrefois = new Number (
    readlineSync.question("Combien de chiffres souhaites-tu additionner ? ")
);

for (i = 0; i < nbrefois; i++) {
    ch = new Number (readlineSync.question("Donne un chiffre : "));
    arr.push(ch);
    console.log(arr.join());
    total += ch;
}

moyenne = total / nbrefois;

console.log("La moyenne des chiffres est de : " + moyenne);