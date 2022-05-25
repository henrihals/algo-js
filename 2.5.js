const readlineSync = require("readline-sync");

var favorite = new Number (
    readlineSync.question("Quel est ton nombre favori?")
);
while (favorite != 42) {
    console.log("recommence");
    var favorite = new Number (
        readlineSync.question("Quel est ton nombre favori?")
    );
}
console.log("Bien joué");2
