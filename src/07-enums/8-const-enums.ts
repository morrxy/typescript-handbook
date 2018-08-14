// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

const enum Enum {
  A = 1,
  B = A * 2
}

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

const directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
]

// in generated code will become
// const directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */]
