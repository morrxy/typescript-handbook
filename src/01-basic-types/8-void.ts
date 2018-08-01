// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Void
function warnUser(): void {
  console.log("This is my warning message")
}
warnUser()

let unusable: void = undefined
console.log(unusable)