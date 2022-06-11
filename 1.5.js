/* Ask two numbers with decimal part to the user. For the first one only keep the integer part. 
Then multiply them and display the result.
You will have to perform a search on Google to know how to only keep the integer part of a number. */

const readlineSync = require("readline-sync");

let premiernombre = readlineSync.question("Quel est ton premier nombre comprenant une decimale?");

var troisiemenombre = (Math.trunc(premiernombre));

let deuxiemenombre = readlineSync.question("Quel est ton deuxieme nombre?");

var quatriemenombre = troisiemenombre * deuxiemenombre;

console.log(quatriemenombre);