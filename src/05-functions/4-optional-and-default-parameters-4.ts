// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

// const result1 = buildName("Bob");                  // error, too few parameters
// const result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
const result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
const result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"

console.log(result3)
console.log(result4)
