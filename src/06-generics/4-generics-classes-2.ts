// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function(x, y) {
  return x + y
}

console.log(stringNumeric.add('a', 'b'))
