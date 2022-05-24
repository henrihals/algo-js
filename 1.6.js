const readlineSync = require("readline-sync");

let premiernombre = new Number(
    readlineSync.question("Quel est ton premier nombre?")
);

let deuxiemenombre = new Number(
  readlineSync.question("quel est ton deuxieme nombre?")
);

const resultat = premiernombre % deuxiemenombre;

console.log(resultat);