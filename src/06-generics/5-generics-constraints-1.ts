// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function loggingIdentity<T>(arg: T) {
  // console.log(arg.length) // Error: T doesn't have .length
  return arg
}
