/* Define three variables: name, firstName and city. Display them like this: 
"Your name is Gerard Lambert and you live in Paris.". */

const readlineSync = require("readline-sync");

let name = 'Lambert';
let firstname = 'Gérard';
let city = 'Paris';

console.log(`Mon nom est ${firstname} ${name} et j'habite à ${city}`);
