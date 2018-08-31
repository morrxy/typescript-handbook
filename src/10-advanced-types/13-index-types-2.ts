// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

interface Map<T> {
  [key: string]: T
}

let keys: keyof Map<number> // string
keys = 'abc'
console.log(keys)

let value: Map<number>['foo'] // number
value = 11
console.log(value)
