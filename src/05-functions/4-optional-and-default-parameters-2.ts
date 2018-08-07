// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

const result1 = buildName("Bob");                  // works correctly now
// const result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
const result3 = buildName("Bob", "Adams");         // ah, just right
