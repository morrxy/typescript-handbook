// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type Alias = { num: number }
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
