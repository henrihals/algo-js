const readlineSync = require("readline-sync");

var L = new Number (
    readlineSync.question("Quel est la longueur ? ")
);

var l = new Number (
    readlineSync.question("Quel est la largeur ? ")
);

function calcSurface(L, l) {
    return L * l
}

// Cette fonction permet de calculer la surface d'un rectangle ou d'un carré. L étant la longueur et l étant la largeur.

console.log("La surface du rectangle est de " + calcSurface(L, l) + " m²");