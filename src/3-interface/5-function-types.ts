// https://www.typescriptlang.org/docs/handbook/interfaces.html
export {}

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = (source: string, subString: string) => {
  const result = source.search(subString)
  return result > -1
}

let mySearch2: SearchFunc

mySearch2 = (src: string, sub: string) => {
  const result = src.search(sub)
  return result > -1
}

let mySearch3: SearchFunc;
mySearch3 = (src, sub) => {
    const result = src.search(sub);
    return result > -1;
}
