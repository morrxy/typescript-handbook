// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named
// OK, because of structural typing
p = new Person()
