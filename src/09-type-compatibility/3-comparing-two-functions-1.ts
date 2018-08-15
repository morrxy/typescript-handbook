// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

let x = (a: number) => 0
let y = (b: number, s: string) => 0

y = x
// x = y // Error
