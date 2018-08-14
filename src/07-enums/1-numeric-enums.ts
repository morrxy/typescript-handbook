// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

enum Response {
  No = 0,
  Yes = 1,
}

function response(recipient: string, message: Response): void {
  // ...
}

response('Princess Caroline', Response.Yes)

// enum E {
//   A = getSomeValue(),
//   B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }
