// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  const counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = () => { };
  return counter;
}

const c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log(c, c.interval, c.reset)
