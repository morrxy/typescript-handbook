// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

const result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
const result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// const result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
const result4 = buildName("Bob", "Adams");         // ah, just right
