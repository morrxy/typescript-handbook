// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

// With --strictNullChecks, an optional parameter automatically adds | undefined:
function f(x: number, y?: number) {
  return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
// f(1, null) // error, 'null' is not assignable to 'number | undefined'

// The same is true for optional properties:
class C {
  a: number;
  b?: number;
}

const c = new C()
c.a = 12
// c.a = undefined // error, 'undefined' is not assignable to 'number'
c.b = 13
c.b = undefined // ok
// c.b = null // error, 'null' is not assignable to 'number | undefined'
