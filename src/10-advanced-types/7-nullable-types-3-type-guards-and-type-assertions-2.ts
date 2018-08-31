// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

// In cases where the compiler can’t eliminate null or undefined,
// you can use the type assertion operator to manually remove them.
// The syntax is postfix !: identifier! removes null and undefined from the type of identifier:

// function broken(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + '.  the ' + epithet // error, 'name' is possibly null
//   }
//   name = name || 'Bob'
//   return postfix('great')
// }

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet // error, 'name' is possibly null
  }
  name = name || 'Bob'
  return postfix('great')
}
