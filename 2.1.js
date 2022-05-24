const readlineSync = require("readline-sync");

let i = new Number(
    readlineSync.question("Quel est ton age?")
);

if (i >= 18) {
    console.log("Tu es un adulte.");
} else {
    console.log("Tu n'es pas un adulte.");
}