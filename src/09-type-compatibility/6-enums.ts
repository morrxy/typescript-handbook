// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

enum Status { Ready, Waiting }
enum Color { Red, Blue, Green }

let status = Status.Ready
// status = Color.Green // Error
