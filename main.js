const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(function (button) {
  button.addEventListener("click", calculator);
});

function calculator(button) {
  //nuvarande värde av iklickade knappar
  const currentButtonValue = button.target.value;

  if (currentButtonValue === "=") {
    //kolla om screen inte är tom, kör då calc
    if (screen.value !== "") {
      //räkna ut o lägg ut på screen
      screen.value = eval(screen.value);
    }
  } else if (currentButtonValue === "C") {
    //cleara displayen
    screen.value = "";
  } else if (
    (currentButtonValue === "/" ||
      currentButtonValue === "*" ||
      currentButtonValue === "+") &&
    screen.value === ""
  ) {
    return;
  } else {
    screen.value += currentButtonValue;
  }
}
