// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }

type Flags2 = {
  option1: boolean;
  option2: boolean;
}
