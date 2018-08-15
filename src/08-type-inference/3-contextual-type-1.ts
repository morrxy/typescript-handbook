// https://www.typescriptlang.org/docs/handbook/type-inference.html

export {}

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button) // <- Error
}

window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.button);  // <- Now, no error is given
};
