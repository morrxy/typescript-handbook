// https://www.typescriptlang.org/docs/handbook/modules.html

import { StringValidator } from "./StringValidator";

const lettersRegexp = /^[A-Za-z]+$/;

export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
