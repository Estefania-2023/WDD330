const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet();

  const person = { 
    greet() {
      console.log("hello! How are yuou");
      },
      };
      const carl2 = Object.create(person);
      carl2.greet();