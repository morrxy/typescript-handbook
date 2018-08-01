// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green

enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green

enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2]
console.log(colorName)