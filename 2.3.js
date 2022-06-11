/* Display all even numbers between 1 and 100.

Bonus: do two different versions. The first one should use while and make a loop that will execute 
100 times. The second one should use for and make a loop that will execute 50 times. */


const readlineSync = require("readline-sync");

for (let i = 2 ; i <= 100 ; i += 2) {
    console.log(i) ;
}
