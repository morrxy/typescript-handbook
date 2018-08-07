// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig) {

}

// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'.
// let mySquare = createSquare({colour: 'red', width: 100})

// solution 1:
const mySquare2 = createSquare({width: 100, opacity: 0.5} as SquareConfig)

// solution 2:
interface SquareConfig2 {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare2(config: SquareConfig2) {
  console.log(config)
}

const mySquare3 = createSquare2({width: 100, opacity: 0.5})

// solution 3:
const squareOptions = { colour: "red", width: 100 }
const mySquare4 = createSquare(squareOptions)
