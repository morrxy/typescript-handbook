// https://www.typescriptlang.org/docs/handbook/advanced-types.html
export {}

function createElement(tagName: 'img'): HTMLImageElement
function createElement(tagName: 'input'): HTMLInputElement
// ... more overloads ...
function createElement(tagName: string): Element {
  // ... code goes here ...
  return document.createElement(tagName)
}
