const readlineSync = require("readline-sync");

/* You get an array of numbers, return the sum of all of the positives ones.

Example: [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0 */

var arr = [];

var ch;

var nbrefois = new Number (
    readlineSync.question("Combien de chiffres souhaites-tu additionner ? ")
);

for (i = 0; i < nbrefois; i++) {
    ch = new Number (readlineSync.question("Donne un chiffre en sachant que les chiffres negatifs ne seront pas pris en compte dans l'addition : "));
    function positive(arr) {
        const positifarr = arr.filter((num) => num > -1);
        return positifarr;
    }
    arr.push(ch);
    console.log(positive(arr).join());
}

let newarr = positive(arr);

var total = 0;

for (let i = 0; i < newarr.length; i++) {
    total += newarr[i];
}

console.log("Le total des chiffres est de : " + total);

//pq num et d'où il vient?
//pq [i] et d'où il vient?