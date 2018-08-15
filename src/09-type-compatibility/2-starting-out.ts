// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

interface Named {
  name: string;
}

let x: Named
const y = { name: 'Alice', location: 'Seattle' }
x = y

function greet(n: Named) {
  console.log('Hello, ' + n.name)
}

greet(y)
