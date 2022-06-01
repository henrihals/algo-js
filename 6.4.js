const readlineSync = require("readline-sync");

class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get Name() {
    return `${this.firstName} ${this.lastName} `;
  }

  set Name(val) {
    this.firstName = val.split(" ")[0];
    this.lastName = val.split(" ")[1];
  }
}

let obj1 = new Human("Sherlock", "Holmes");

console.log(obj1.Name); // Sherlock Holmes

obj1.Name = "John Watson";

console.log(obj1.firstName); // John
console.log(obj1.lastName); // Watson