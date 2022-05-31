const readlineSync = require("readline-sync");

/**
 *
 * @param {*} customers
 * @param {*} n
 * @returns
 */

function queueTime(customers, n) {
  let sumTime = 0;
  let custMax = Math.max(...customers);
  for (let i = 0; i < customers.length; i++) {
    sumTime += customers[i];
  }
  if (n == 1) return sumTime;
  else if (customers[0] < custMax) return Math.abs(customers[0] + custMax);
  else if (n == 2) return custMax;
}

console.log(queueTime([5, 3, 4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10, 2, 3, 3], 2));

// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

console.log(queueTime([2, 3, 10], 2));
// should return 12