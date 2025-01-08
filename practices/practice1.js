const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype);
const reuben = new Person("Reuben");
const irma = new Person("Irma");

reuben.greet(); // hello, my name is Reuben!
irma.greet(); // hello, my name is Irma!
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false