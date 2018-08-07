// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

const square = <Square>{}
// const square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

console.log(square)
