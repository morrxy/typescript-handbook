// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

interface GenericIdentityFn {
  <T>(arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

const myIdentity: GenericIdentityFn = identity

console.log(myIdentity(11))
