/* Make a program that asks the favorite number of the user. 
If that number is anything other than 42 display "Are you sure?" and ask again. 
(This program should never end as long as the user didn't chose 42). */

const readlineSync = require("readline-sync");

var favorite = new Number (
    readlineSync.question("Quel est ton nombre favori ? ")
);
while (favorite != 42) {
    console.log("recommence");
    var favorite = new Number (
        readlineSync.question("Quel est ton nombre favori ? ")
    );
}
console.log("Bien joué");
