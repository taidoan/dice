let rolledNumber;

const rollDice = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  return (rolledNumber = randomNumber);
};

const rollButton = document.getElementById("roll__button");

const diceFace = () => {
  const newDice = document.createElement("div");
  const dice = document.querySelector(".dice-face");
  const diceDot = document.createElement("div");
  const diceDotClass = "dice-dot";
  diceDot.className = diceDotClass;

  if (!dice) {
    console.log("dice doesnt exist");
    newDice.className = "dice-face";

    for (let x = 0; x < rolledNumber; x++) {
      newDice.appendChild(diceDot.cloneNode(true));
    }

    document.body.insertBefore(newDice, rollButton);
  } else {
    dice.innerHTML = "";

    for (let x = 0; x < rolledNumber; x++) {
      dice.appendChild(diceDot.cloneNode(true));
    }
  }
};

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
  diceFace();
  rollResult();
});
