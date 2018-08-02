// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Any
let notSure: any = 4
notSure = 'maybe a string insted'
notSure = false

const notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

const prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

const list: any[] = [1, true, 'free']
list[1] = 100
