// https://www.typescriptlang.org/docs/handbook/modules.html

import { ZipCodeValidator } from './ZipCodeValidator'
import { ZipCodeValidator as ZCV } from './ZipCodeValidator'
import * as validator from "./ZipCodeValidator";

const myValidator = new ZipCodeValidator()

const myValidator2 = new ZCV()

const myValidator3 = new validator.ZipCodeValidator();
