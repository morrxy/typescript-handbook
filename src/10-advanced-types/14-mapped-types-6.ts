// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

interface Person {
  name: string;
  age: number;
}

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(o: T): Proxify<T> {
  // ...wrap proxies
  const result = {} as Proxify<T>

  for (const k in o) {
    result[k] = {
      get: () => o[k],
      set: v => o[k] = v
    }
  }

  return result
}

const p1: Person = {
  age: 22,
  name: 'hj'
}

const proxyProps = proxify(p1)

console.log(proxyProps.age.get())
proxyProps.age.set(40)
console.log(proxyProps.age.get())

function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}

// const originalProps = unproxify(proxyProps)
