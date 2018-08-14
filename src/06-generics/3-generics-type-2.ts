// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function identity<T>(arg: T): T {
  return arg
}

const myIdentity: {<T>(arg: T): T} = identity

console.log(myIdentity(11))
