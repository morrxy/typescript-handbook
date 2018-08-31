// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

// function pluck(o, names) {
//   return names.map(n => o[n])
// }

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  age: 35,
  name: 'Jarid'
}

const strings: string[] = pluck(person, ['name'])

// pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name] // o[name] is of type T[K]
}

const name: string = getProperty(person, 'name');
const age: number = getProperty(person, 'age');
// const unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'
