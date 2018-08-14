// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

enum Enum {
  A
}
const a = Enum.A
console.log(a)

const nameOfA = Enum[a]
console.log(nameOfA)
