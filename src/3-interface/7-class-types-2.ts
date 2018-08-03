// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface ClockInterface {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {}

  setTime(d: Date) {
    this.currentTime = d
  }
}

const c = new Clock(12, 10)
c.setTime(new Date())

console.log(c)
console.log(c.currentTime)
