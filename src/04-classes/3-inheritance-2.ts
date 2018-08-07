// https://www.typescriptlang.org/docs/handbook/classes.html
export {}

class Animal {
  name: string

  constructor(theName: string) {
    this.name = theName
  }

  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

const sam = new Snake('Sammy the Python')
const tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move()
