// https://www.typescriptlang.org/docs/handbook/symbols.html

export {}

const sym1 = Symbol()
const sym2 = Symbol('key')

// const x = sym1 === sym2 // false, symbols are unique

const sym = Symbol()

const obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"

const getClassNameSymbol = Symbol()

class C {
  [getClassNameSymbol]() {
    return 'C'
  }
}

const c = new C()
const className = c[getClassNameSymbol]() // 'C'
console.log(className)
