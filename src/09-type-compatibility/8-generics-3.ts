// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

let identity = function<T>(x: T): T {
  // ...
  return x
}

const reverse = function<U>(y: U): U {
  // ...
  return y
}

identity = reverse // OK, because (x: any) => any matches (y: any) => any
