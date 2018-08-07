// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

const myAdd: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y
}

console.log(myAdd(3, 4))
