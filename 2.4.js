const readlineSync = require("readline-sync");

let i_even = 0;
let i_odd = 1;
while (i_even <=100) {
    console.log(i_even/2);
    i_even +=2;
    console.log(i_odd*3);
    i_odd +=2; 
}