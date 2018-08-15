// https://www.typescriptlang.org/docs/handbook/type-inference.html

export {}

class Animal {}

class Rhino extends Animal {}

class Elephant extends Animal {}

class Snake extends Animal {}

function createZoo(): Animal[] {
  return [new Rhino(), new Elephant(), new Snake()]
}
