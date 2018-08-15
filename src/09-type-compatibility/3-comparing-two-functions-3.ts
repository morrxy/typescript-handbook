// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

let x = () => ({name: 'Alice'})
let y = () => ({name: 'Alice', location: 'Seattle'})

x = y // OK
// y = x // Error, because x() lacks a location property
