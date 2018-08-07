// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

// the type of the instance of the class
class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

// the constructor function
const Greeter2: any = (() => {
  function fn(message: string) {
      this.greeting = message;
  }
  fn.prototype.greet = function() {
      return "Hello, " + this.greeting;
  };
  return fn;
})();

let greeter2;
greeter2 = new Greeter2("world");
console.log(greeter2.greet());
