const userName = "Maximilian";
let age: number;
age = 30;

const button = document.querySelector("button")!;
function add(num1: number, num2: number) {
  if (num1 + num2 > 0) {
    return num1 + num2;
  }
  return;
}

function clickHandler(message: string) {
  console.log("Clicked!" + message);
}
// a comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

console.log(userName);
