// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

console.log(loggingIdentity2([1, 2]))
console.log(loggingIdentity3(['1', 2]))
