const readlineSync = require("readline-sync");

let x = readlineSync.question("Quel est ton nom?");

let y = readlineSync.question("Quel est ton premier nom?");

let z = readlineSync.question("Quel est ta ville?");

console.log(`Mon nom est ${y} ${x} et j'habite à ${z}`);