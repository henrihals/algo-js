const readlineSync = require("readline-sync");

let n = new Number(
    readlineSync.question("Combien de nombres aléatoires souhaites-tu ? ")
);

function multiRand(n) {
    return n;
}

function rand10() {
    return (multiRand) * (Math.random() * 10);
}

// Cette fonction permet de sortir un nombre aléatoire entre 0 et 10. 
// Si l'on souhaite dépasser le chiffre 10, il suffit de changer le 10 par un autre nombre.

console.log(rand10());