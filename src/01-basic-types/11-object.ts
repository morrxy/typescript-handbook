// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Object

declare function create(o: object | null): void

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
