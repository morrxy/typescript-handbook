// https://www.typescriptlang.org/docs/handbook/modules.html

export interface StringValidator {
  isAcceptable(s: string): boolean;
}
