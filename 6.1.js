/* In the code below, there is a class defined, named: Cat. Copy-paste it in your js file. */

const readlineSync = require("readline-sync");

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let chat1 = new Cat("Skitty",6);
let chat2 = new Cat("Pixel",9);

console.log(chat1);
console.log(chat2);
