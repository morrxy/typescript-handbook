// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Point {
    x: number
    y: number
}

interface Point3d extends Point {
    z: number
}

const point3d: Point3d = {x: 1, y: 2, z: 3}
console.log(point3d)
