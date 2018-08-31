// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

let s = 'foo'
// s = null // error, 'null' is not assignable to 'string'

let sn: string | null = 'bar'
sn = null // ok

// sn = undefined // error, 'undefined' is not assignable to 'string | null'
