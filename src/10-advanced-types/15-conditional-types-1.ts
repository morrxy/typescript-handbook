// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

declare function f<T extends boolean>(x: T): T extends true ? string: number;

// Type is string | number
const x = f(Math.random() < 0.5)
