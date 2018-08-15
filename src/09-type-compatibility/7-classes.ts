// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let a: Animal = new Animal('pig', 4)
let s: Size = new Size(4)

a = s // OK
s = a // OK
