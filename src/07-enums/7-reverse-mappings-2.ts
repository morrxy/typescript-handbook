// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

let Enum
(function(Enum) {
  Enum[Enum['A'] = 0] = 'A'
})(Enum || (Enum = {} as {[key: string]: any}))

const a = Enum.A
console.log(a)

const nameOfA = Enum[a]
console.log(nameOfA)
