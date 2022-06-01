const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10 + 1);
  }

// Cette fonction permet de sortir un nombre aléatoire entre 0 et 10. 
// Si l'on souhaite dépasser le chiffre 10, il suffit de changer le 10 par un autre nombre.

  console.log(rand10());