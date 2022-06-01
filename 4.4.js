const readlineSync = require("readline-sync");

// Cette fonction permet de sortir un nombre aléatoire entre 0 et 10. 
// Si l'on souhaite dépasser le chiffre 10, il suffit de changer le 10 par un autre nombre.

function rand10() {
  return Math.floor(Math.random() * 10 + 1);
}
    
let nbrealeatoire = new Number(
  readlineSync.question("Combien de nombres aleatoires souhaites-tu ? ")
);

// Cette fonction permet de multiplier le rand10 par le chiffre de son choix pour obtenir autant de chiffres aléatoires que l'on souhaite

let array = [];

function multiRand() {
    for (i = 1; i <= nbrealeatoire; i++) {
      array.push(rand10());
    }
  return array;
}
    
console.log(multiRand());

//Cette fonction permet de calculer la moyenne des chiffres aléatoires contenu dans l'array

function average(array) {
  let i = 0, total = 0, n = array.length;
  while (i < n) {
    total += array[i]
    i++
  }
  return total / n;
}

let resultat = average(multiRand());

console.log(resultat);

// Cette fonction permet de montrer le plus petit chiffre aléatoire sorti

function min() {
  let minimum = Math.min(...array);
  return minimum
}

console.log(min());

// Cette fonction permet de sortir le plus grand chiffre aléatoire dans l'array

function max() {
  let maximum = Math.max(...array);
  return maximum
}

console.log(max());