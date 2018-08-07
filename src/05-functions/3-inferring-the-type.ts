// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

const myAdd = function (x: number, y: number): number {
  return x + y
}

console.log(myAdd(1, 2))

const myAdd2: (baseValue: number, increment: number) => number =
  function(x, y) { return x + y }

console.log(myAdd2(2, 3))
