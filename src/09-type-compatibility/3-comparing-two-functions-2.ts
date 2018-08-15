// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

export {}

const items = [1, 2, 3]

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item))

// Should be OK!
items.forEach(item => console.log(item))
