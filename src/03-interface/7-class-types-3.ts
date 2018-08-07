// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface ClockConstructor {
  new (hour: number, minute: number): any
}

// Class 'Clock' incorrectly implements interface 'ClockConstructor'
// class Clock implements ClockConstructor {
//   currentTime: Date
//   constructor(h: number, m: number) {}
// }
