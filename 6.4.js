/* Create a class named Person. It will have two properties, firstname and lastname, as well as a getter 
name, which will return "[firstname] [lastname]", and a setter name, which will divide the full name 
on the basis of a space: the first element will be the firstname, the second the lastname. */

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