// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Animal {
  private name: string

  constructor(theName: string) {
    this.name = theName
  }
}

// Error: 'name' is private
// new Animal('Cat').name
