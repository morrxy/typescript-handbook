// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

const greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

const greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

console.log('Greeter:', Greeter)
console.log('typeof Greeter:', typeof Greeter)
