const readlineSync = require("readline-sync");

let array = ["tableau", "craie", "effaceur", "noir", "blanc"];

array.map(m=>m.lenght);

let min = Math.min(...array);
console.log(min);

let max = Math.max(...array);
console.log(max);

// renvoi nan alors que je demande de transformer le tableau en chiffre pour le nombre de lettres par mot