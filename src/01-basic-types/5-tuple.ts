// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Tuple
let x: [string, number]
x = ['hello', 10]

// let x1: [string, number] = [10, 'hello'] // Type 'number' is not assignable to type 'string'.

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'