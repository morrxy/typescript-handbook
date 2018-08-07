// https://www.typescriptlang.org/docs/handbook/functions.html
export {}

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

const buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

const employeeName = buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie")
console.log(employeeName)
