let rolledNumber;

const rollDice = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return (rolledNumber = randomNumber);
};

const rollButton = document.getElementById("roll__button");

const rollResult = () => {
  const newSpan = document.createElement("span");
  newSpan.className = "roll__result";
  const checkSpan = document.querySelector("span.roll__result");

  if (!checkSpan) {
    newSpan.textContent = `You rolled a ${rolledNumber}`;
    document.body.insertBefore(newSpan, rollButton);
  } else {
    checkSpan.textContent = `You rolled a ${rolledNumber}`;
  }
};

rollButton.addEventListener("click", () => {
  rollDice();
  rollResult();
});
