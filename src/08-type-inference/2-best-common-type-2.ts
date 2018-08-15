// https://www.typescriptlang.org/docs/handbook/type-inference.html

export {}

class Animal {}

class Rhino extends Animal {}

class Elephant extends Animal {}

class Snake extends Animal {}

const zoo = [new Rhino(), new Elephant(), new Snake()]

const zoo2: Animal[] = [new Rhino(), new Elephant(), new Snake()]
