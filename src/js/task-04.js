let counterValue = 0;
const valueSpan = document.getElementById("value");

const buttons = document.querySelectorAll("#counter button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    if (action === "increment") {
      counterValue +=1;
    } else if (action === "decrement") {
      counterValue -= 1;
    }
    valueSpan.innerHTML = counterValue;
  });
});