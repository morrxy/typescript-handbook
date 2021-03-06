// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object';

type T10 = TypeName<string | (() => void)>; // 'string' | 'function'
type T12 = TypeName<string | string[] | undefined>; // 'string' | 'object' | 'undefined'
type T11 = TypeName<string[] | number[]>; // 'object'
