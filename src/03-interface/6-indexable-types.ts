// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

const myStr: string = myArray[0]
console.log(myStr)

// string and number support index signature
class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // [x: number]: Animal // error
  [x: string]: Dog
}

interface Okay {
  [x: number]: Dog // ok
  [x: string]: Animal
}

interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string // error
}

interface ReadonlyArray {
  readonly [index: number]: string
}

const myArray2: ReadonlyArray = ["Alice", "Bob"]
// myArray2[2] = 'Mallory' // error
