// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export {}

function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{}
  for (const id in first) {
    if (first.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>first)[id]
    }
  }

  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }

  return result
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {
    console.log('log...')
  }
}

const jim = extend(new Person('Jim'), new ConsoleLogger())
console.log(jim.name)
jim.log()
