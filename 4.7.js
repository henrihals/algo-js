const readlineSync = require("readline-sync");

function elevator(left, right, current) {
  let dist1 = Math.abs(current - left); 
  let dist2 = Math.abs(current - right);

  if (dist1 >= dist2) {
    return "right";
  }

  if (dist1 < dist2) {
    return "left";
  }
}

console.log(elevator(0, 1, 0));
console.log(elevator(0, 1, 1));
console.log(elevator(0, 1, 2)); 
console.log(elevator(0, 0, 0)); 
console.log(elevator(0, 2, 1)); 