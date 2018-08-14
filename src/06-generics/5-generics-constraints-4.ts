// https://www.typescriptlang.org/docs/handbook/generics.html
export {}

function create<T>(c: { new(): T; }): T {
  return new c()
}
