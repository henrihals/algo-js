const readlineSync = require("readline-sync");

// Cette fonction permet de sortir un nombre aléatoire entre 0 et 10. 
// Si l'on souhaite dépasser le chiffre 10, il suffit de changer le 10 par un autre nombre.

function rand10() {
  return Math.floor(Math.random() * 10 + 1);
}
    
let n = new Number(
  readlineSync.question("Combien de nombres aleatoires souhaites-tu ? ")
);

 // Cette fonction permet de multiplier le rand10 par le chiffre de son choix pour obtenir autant de chiffres aléatoires que l'n souhaite

function multiRand() {
  let array = [];
    for (let i = 1; i <= n; i++) {
      //let i = rand10();
      array.push(rand10());
    }
  return array;
}
    
console.log(multiRand());

// Est-il possible de le faire sans mettre les chiffres dans un tableau?