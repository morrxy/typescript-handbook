// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function identity<T>(arg: T) {
  return arg
}

const myIdentity: <T>(arg: T) => T = identity

const myIdentity2: <U>(arg: U) => U = identity

console.log(myIdentity(11))
