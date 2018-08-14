// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length)
  return arg
}

// loggingIdentity(3) // Error, number doesn't have a .length property

loggingIdentity({length: 10, value: 3})
