// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

// const result1 = buildName("Bob");                  // error, too few parameters
// const result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
const result3 = buildName("Bob", "Adams");         // ah, just right
