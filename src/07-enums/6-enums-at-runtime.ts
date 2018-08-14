// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

enum E {
  X, Y, Z
}

function f(obj: {X: number}) {
  return obj.X
}

console.log(f(E))
