// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

interface Person {
  name: string;
  age: number;
}

type NullablePerson = {
  [P in keyof Person]: Person[P] | null
}

type PartialPerson = {
  [P in keyof Person]?: Person[P]
}

// general version
type Nullable<T> = { [P in keyof T]: T[P] | null }
type Partial<T> = { [P in keyof T]?: T[P] }
