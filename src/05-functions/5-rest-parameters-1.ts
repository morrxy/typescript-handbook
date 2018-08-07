// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}

const employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
console.log(employeeName)
