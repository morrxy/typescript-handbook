// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface Point {
  readonly x: number
  readonly y: number
}

const p1: Point = {x: 10, y: 20}
// p1.x = 5 // Cannot assign to 'x' because it is a constant or a read-only property.

let a: number[] = [1, 2, 3, 4]
const ro: ReadonlyArray<number> = a
// ro[0] = 12 // error!
// ro.push(5) // error!
// ro.length = 100 // error!
// a = ro // error!

a = ro as number[]
