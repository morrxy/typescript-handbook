// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Type assertions

let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
console.log(strLength)

let someValue2: any = "this is a string"
let strLength2: number = (someValue2 as string).length
console.log(strLength2)