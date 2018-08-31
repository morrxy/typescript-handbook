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
pet.layEggs(); // okay
// pet.swim();    // errors
