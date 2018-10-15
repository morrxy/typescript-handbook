// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string[]>>; // string[]
type T5 = Unpacked<Unpacked<Promise<string[]>>>; // string

type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>; // string
type T11 = Foo<{ a: string, b: number }>; // string | number

type Bar<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
type T20 = Bar<{ a: (x: string) => void, b: (x: string) => void }>;  // string
type T21 = Bar<{ a: (x: string) => void, b: (x: number) => void }>;  // string & number

declare function foo(x: string): number;
declare function foo(x: number): string;
declare function foo(x: string | number): string | number;
type T30 = ReturnType<typeof foo>;  // string | number

// type ReturnType<T extends (...args: any[]) => infer R> = R;  // Error, not supported

type AnyFunction = (...args: any[]) => any;
type ReturnType2<T extends AnyFunction> = T extends (...args: any[]) => infer R ? R : any;
