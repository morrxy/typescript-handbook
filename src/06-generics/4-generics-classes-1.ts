// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}

console.log(myGenericNumber.add(1, 2))
