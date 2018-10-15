// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

type NonFunctionPropertiesNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertiesNames<T>>

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part> // 'updatePart'
type T41 = NonFunctionPropertiesNames<Part> // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part> // { updatePart(newName: string): void }
type T43 = NonFunctionProperties<Part> // { id: number, name: string, subparts: Part[] }

// conditional types are not permitted to reference themselves recursively
// Error ElementType circularly references it self
// type ElementType<T> = T extends any[] ? ElementType<T[number]> : T;
