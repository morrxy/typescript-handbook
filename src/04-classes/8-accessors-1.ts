// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Employee {
  fullName: string
}

const employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
