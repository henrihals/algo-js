const readlineSync = require("readline-sync");

let a = [-2, 2];
let b = [2, -2];

 function mult(a) {
    return a * a;
  }
  
/*Cette fonction permet de calculer la distance entre 2 points*/

  function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(mult(y2 - y1) + mult(x2 - x1));
  }
  
  console.log(calcDistance(a[0], a[1], b[0], b[1]));