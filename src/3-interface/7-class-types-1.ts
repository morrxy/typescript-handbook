// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {}
}

const c = new Clock(12, 10)

console.log(c, c.currentTime)
