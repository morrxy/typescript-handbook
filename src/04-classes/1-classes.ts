// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

const greeter = new Greeter('world')

console.log(greeter.greet())
