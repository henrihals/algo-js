/* Ask two integers to the user. Display the rest of the integer division of the two numbers. */

const readlineSync = require("readline-sync");

let premiernombre = new Number(
    readlineSync.question("Quel est ton premier nombre?")
);

let deuxiemenombre = new Number(
  readlineSync.question("quel est ton deuxieme nombre?")
);

const resultat = premiernombre % deuxiemenombre;

console.log(resultat);