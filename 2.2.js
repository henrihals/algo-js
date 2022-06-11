/* Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.

Bonus: if minAge is greater than maxAge, display an error message to explain the user 
he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative) */

const readlineSync = require("readline-sync");

let minage = new Number(
    readlineSync.question("Donne-moi un age minimum?")
);
let maxage = new Number(
    readlineSync.question("Donne-moi un age maximum?")
);
let currentage = new Number(
    readlineSync.question("Quel est ton age?")
);

if ((currentage >= minage) && (currentage <= maxage)) {
    console.log(currentage);
} else {
    console.log("recommence");
}