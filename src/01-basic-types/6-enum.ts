// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Enum
enum Color {Red, Green, Blue}
const c: Color = Color.Green

enum Color2 {Red = 1, Green, Blue}
const c2: Color2 = Color2.Green

enum Color3 {Red = 1, Green = 2, Blue = 4}
const c3: Color3 = Color3.Green

enum Color4 {Red = 1, Green, Blue}
const colorName: string = Color4[2]
console.log(colorName)
