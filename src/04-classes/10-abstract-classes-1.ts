// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

abstract class Animal {
  abstract makeSound(): void

  moveBy(): void {
    console.log('roaming the earth...')
  }
}
