// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

interface Person {
  name: string;
  age: number;
}

interface PersonPartial {
  name?: string;
  age?: number;
}

interface PersonReadonly {
  readonly name: string;
  readonly age: number;
}
