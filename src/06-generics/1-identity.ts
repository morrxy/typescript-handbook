// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function identity<T>(arg: T): T {
  return arg
}

const output = identity<string>('myString')

console.log(output)
