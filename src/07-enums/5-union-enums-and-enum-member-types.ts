// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// const c: Circle = {
//   kind: ShapeKind.Square, // Error
//   radius: 100,
// }

enum E {
  Foo,
  Bar,
}

// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) { // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.

//   }
// }
