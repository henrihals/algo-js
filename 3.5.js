const readlineSync = require("readline-sync");

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