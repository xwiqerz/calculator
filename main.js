console.log("hej");
const button = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

button.forEach(function (button) {
  button.addEventListener("click", calculator);
});

function calculator(event) {
  //nuvarande värde av iklickade knappar
  const currentButtonValue = event.target.value;

  if (currentButtonValue === "=") {
    //kolla om screen inte är tom, kör då calc
    if (screen.value !== "") {
      //räkna ut o lägg ut på screen
      screen.value = eval(screen.value);
    }
  } else if (currentButtonValue === "C") {
    //cleara displayen
    screen.value = "";
  } else {
    screen.value += currentButtonValue;
  }
}
