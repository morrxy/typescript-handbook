// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Person {
  protected name: string

  protected constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

const howard = new Employee('Howard', 'Sales')
// const john = new Person('John') // Error: The 'Person' constructor is protected
