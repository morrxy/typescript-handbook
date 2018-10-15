// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
export {}

const someArray = [1, 'string', false]

for (const entry of someArray) {
  console.log(entry) // 1, 'string', false
}

const list = [4, 5, 6];

for (const i in list) {
   console.log(i); // "0", "1", "2",
}

for (const i of list) {
   console.log(i); // "4", "5", "6"
}

const pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (const pet in pets) {
   console.log(pet); // "species"
}

for (const pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
