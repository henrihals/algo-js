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