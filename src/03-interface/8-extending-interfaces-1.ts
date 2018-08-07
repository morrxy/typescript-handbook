// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

const square = <Square>{}
// const square = {} as Square
square.color = 'blue'
square.sideLength = 10

console.log(square)
