// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const x = { a: 1, b: 2, c: 3, d: 4 }

const a = getProperty(x, 'a')
console.log(a)

// getProperty(x, 'm') // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
