// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

interface Empty<T> {
  data: T
}

let x: Empty<number>
const y: Empty<string> = {
  data: 'y'
}

// x = y // Error, because x and y are not compatible
