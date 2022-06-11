/* Create a function named rand10() that returns a random integer between 1 and 10. Create a program 
that will display the result of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers in JavaScript for this exercise. */

const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10 + 1);
  }

// Cette fonction permet de sortir un nombre aléatoire entre 0 et 10. 
// Si l'on souhaite dépasser le chiffre 10, il suffit de changer le 10 par un autre nombre.

  console.log(rand10());