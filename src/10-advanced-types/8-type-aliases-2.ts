// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type Container<T> = { value: T }

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

const c: Container<number> = {
  value: 1
}

console.log(c.value)

const t: Tree<number> = {
  left: {} as Tree<number>,
  right: {} as Tree<number>,
  value: 2
}

console.log(t.value)
