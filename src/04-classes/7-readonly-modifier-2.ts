// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Octopus {
  readonly numberOfLegs: number = 8

  constructor(readonly name: string) {

  }
}

const dad = new Octopus('Man with the 8 strong legs')
console.log(dad.name)
