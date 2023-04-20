// You must allow the user to input a single number and compare
//that single number to a random generate 5 numbers
// If there is a match with any of the 5 numbers it must indicate
// Numbers generated can not be higher then the value of 45 or equal 0.
//Ensure restrictions are also implemented
// Enjoy the Code

const game = {
  userInput: {
    value: " ",
    isNumber: false,
  },
};

const getUserInput = () => {
  return (game.userInput.value = prompt(
    "Please enter a number between 1 and 45."
  ));
};
const checkIfInputIsNumber = () => {
  const isNumber =
    !isNaN(parseInt(game.userInput.value)) || game.userInput.value === " "; // true = is a number

  return isNumber;
};

// const sendPrompt = () => {
//   return (game.userInput = prompt("Please enter a number between 1 and 100."));
// };
const validatePromp = () => {
  if (!userInputNumber) {
    console.log(userInputNumber);
    console.log("not a number");
    sendPrompt();
  }
};

const runGame = () => {
  getUserInput();
  checkIfInputIsNumber();
};
runGame();
