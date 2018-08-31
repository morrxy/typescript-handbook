// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export {}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    layEggs: () => console.log('lay eggs'),
    swim: () => {}
  }
}

const pet = getSmallPet();

// Each of these property accesses will cause an error
// if (pet.swim) {
//   pet.swim()
// } else if (pet.fly) {
//   pet.fly()
// }
