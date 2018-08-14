// https://www.typescriptlang.org/docs/handbook/enums.html
export {}

// E.X is constant:
enum E { X }

// All enum members in 'E1' and 'E2' are constant.

enum E1 { x, Y, Z }

enum E2 {
  A = 1, B, C
}

enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}
