// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Animal {
  private name: string
  constructor(theName: string) { this.name = theName }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

let animal = new Animal('Goat')
const rhino = new Rhino()
const employee = new Employee('Bob')

animal = rhino
// Error: 'Animal' and 'Employee' are not compatible
// animal = employee
