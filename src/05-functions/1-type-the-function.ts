// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function add(x: number, y: number): number {
  return x + y
}

const myAdd = function(x: number, y: number): number { return x + y }

console.log(add(1, 2))
console.log(myAdd(3, 4))
