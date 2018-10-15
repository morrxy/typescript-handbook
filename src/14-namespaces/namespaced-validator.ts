// https://www.typescriptlang.org/docs/handbook/namespaces.html

namespace Validation22 {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  const lettersRegexp = /^[A-Za-z]+$/
  const numberRegexp = /^[0-9]+$/

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
      return lettersRegexp.test(s)
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable (s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

// Some samples to try
let strings = ['Hello', '98052', '101']

// Validators to use
let validators: { [s: string]: Validation22.StringValidator } = {}
validators['ZIP code'] = new Validation22.ZipCodeValidator()
validators['Letters only'] = new Validation22.LettersOnlyValidator()

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`
    )
  }
}
