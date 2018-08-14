// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

const myIdentity: GenericIdentityFn<number> = identity

console.log(myIdentity(111))
