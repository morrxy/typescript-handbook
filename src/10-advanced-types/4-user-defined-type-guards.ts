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
    swim: () => console.log('swim')
  }
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

const pet = getSmallPet()

// Both calls to 'swim' and 'fly' are now okay.

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
