/* Create a function named calcSurface that takes the length and width of a rectangle and returns its 
surface. Then create a program that asks the length and width of a rectangle to the user then displays 
the surface of that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function.*/

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