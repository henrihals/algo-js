/* Count from 1 to 100. For every even number display the result of their division by 2. 
For every odd number display the result of their multiplication by 3. */

const readlineSync = require("readline-sync");

let i_even = 0;
let i_odd = 1;
while (i_even <=100) {
    console.log(i_even/2);
    i_even +=2;
    console.log(i_odd*3);
    i_odd +=2; 
}