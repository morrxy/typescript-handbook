// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// String
let color: string = 'blue'
color = 'red'

console.log(color)

const fullName: string = `Bob Bobbington`;
const age: number = 37;
const sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`

console.log(sentence)
