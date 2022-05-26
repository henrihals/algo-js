const readlineSync = require("readline-sync");

let array = ["tableau", "craie", "effaceur", "noir", "blanc"];

let largest = "" ;

for(let i = 0 ; i < array.length ; i++){
    if(array[i].length > largest.length){
    largest = array[i]
    }
}
console.log(largest);

// Comment faire pour avoir le mot le plus petit//