// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
  name: string;
}

const people: LinkedList<Person> = {
  name: 'tom',
  next: {
    name: 'john',
    next: {} as LinkedList<Person>
  }
}

let s = people.name
console.log(s)

s = people.next.name
console.log(s)

// it’s not possible for a type alias to appear anywhere else on the right side of the declaration:
// type Yikes = Array<Yikes> // error
