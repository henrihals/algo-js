/* Create a function named calcDistance which takes the coordinates of two different points A and B in 
a 2D space. That function must return the distance between those two points.

Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that. 
You will also probably need to search for useful functions in JavaScript to help you making complex 
mathematical formulas...*/

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