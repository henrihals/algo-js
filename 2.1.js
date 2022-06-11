/* Ask the user to enter its age. If its age is at least 18 display "You are an adult". 
If it's not the case display "You are not yet an adult". */

const readlineSync = require("readline-sync");

let i = new Number(
    readlineSync.question("Quel est ton age?")
);

if (i >= 18) {
    console.log("Tu es un adulte.");
} else {
    console.log("Tu n'es pas un adulte.");
}