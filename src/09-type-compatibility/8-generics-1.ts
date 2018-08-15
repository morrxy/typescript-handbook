// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

interface Empty<T> {
}

let x: Empty<number>
const y: Empty<string> = {}

x = y // OK, because y matches structure of x
