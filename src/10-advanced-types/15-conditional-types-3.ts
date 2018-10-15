// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

interface Foo {
  propA: boolean;
  propB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
  const a = f(x)

  const b: string | number = a
}
