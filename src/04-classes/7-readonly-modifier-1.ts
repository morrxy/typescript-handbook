// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8

  constructor(theName: string) {
    this.name = theName
  }
}

const dad = new Octopus('Man with the 8 strong legs')
console.log(dad.name)
// dad.name = 'Man with the 3-piece suit' // error! name is readonly.
