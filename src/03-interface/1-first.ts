// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

// one
function printLabel(labelledObj: {label: string }) {
  console.log(labelledObj.label)
}

const myObj = {size: 10, label: "Size 10 Object"}
printLabel(myObj)

// two
interface LabelledValue {
  label: string
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

const myObj2 = {size: 10, label: "Size 10 Object"}
printLabel2(myObj)
