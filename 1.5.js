const readlineSync = require("readline-sync");

let premiernombre = readlineSync.question("Quel est ton premier nombre comprenant une decimale?");

var troisiemenombre = (Math.trunc(premiernombre));

let deuxiemenombre = readlineSync.question("Quel est ton deuxieme nombre?");

var quatriemenombre = troisiemenombre * deuxiemenombre;

console.log(quatriemenombre);