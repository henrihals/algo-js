const readlineSync = require("readline-sync");

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return "Hello " + this.firstname + this.lastname;
    }
}

let person1 = new Person("Julien ","Dupont");

console.log(person1.sayHello());

