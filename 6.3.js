/* In the code below, there is a prewritten class named: Animal.
From this class, create the two classes, Cat and Dog. They will each have two properties, 
name and greeting (the second property must be static).*/

const readlineSync = require("readline-sync");

class Animal {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    static greeting = "Miaouwww";
  }
  
  class Dog extends Animal {
    static greeting = "Waf waf";
  }
  
  const cat1 = new Cat("Billy", 3);
  const dog1 = new Dog("Rex");
  
  console.log(cat1.sayHello());
  console.log(dog1.sayHello());
  console.log(dog1.name);
  console.log(dog1.greeting);
  console.log(cat1.age);