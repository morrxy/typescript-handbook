// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Type assertions

const someValue: any = "this is a string"
const strLength: number = (<string>someValue).length
console.log(strLength)

const someValue2: any = "this is a string"
const strLength2: number = (someValue2 as string).length
console.log(strLength2)
