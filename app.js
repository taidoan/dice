let rolledNumber; // Store our dice roll
const rollButton = document.getElementById("roll__button"); // Roll dice button

const rollDice = () => {
  // Roll the dice number
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  rolledNumber = randomNumber;

  // Add the dice/update it
  const newDice = document.createElement("div"); // Create the dice
  const dice = document.querySelector(".dice-face"); // Select the dice
  const diceDot = document.createElement("div"); // Create dice dot
  diceDot.className = "dice-dot"; // Add class to the dot

  if (!dice) {
    // if dice doesnt exist, create it
    newDice.className = "dice-face";
    for (let x = 0; x < rolledNumber; x++) {
      // Create the number of dots
      newDice.appendChild(diceDot.cloneNode(true));
    }
    document.body.insertBefore(newDice, rollButton);
  } else {
    // If it does exist, update it
    dice.innerHTML = ""; // Remove existing dots
    for (let x = 0; x < rolledNumber; x++) {
      dice.appendChild(diceDot.cloneNode(true));
    }
  }

  // Add result text
  const result = document.createElement("span"); // Create the result span
  result.className = "roll__result";
  const checkResult = document.querySelector("span.roll__result"); // Check if the result exists

  if (!checkResult) {
    result.textContent = `You rolled a ${rolledNumber}`;
    document.body.insertBefore(result, rollButton);
  } else {
    checkResult.textContent = `You rolled a ${rolledNumber}`;
  }
};

rollButton.addEventListener("click", () => {
  rollDice();
});
