// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export {}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
interface Triangle {
  kind: "triangle";
  boder: number;
  height: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

// function area(s: Shape): number { // error: returns number | undefined
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.height * s.width;
//       case "circle": return Math.PI * s.radius ** 2;
//   }
// }
