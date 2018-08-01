// https://www.typescriptlang.org/docs/handbook/basic-types.html
export {}

// Never

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

error('test err')

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}
