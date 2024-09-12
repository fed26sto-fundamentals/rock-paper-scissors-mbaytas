console.log("Let the games begin!");
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  // Use the prompt method to get the user’s input
  let choice = prompt("Choose.");
  choice = choice.toLowerCase();
  // Return the choice if valid
  if (choices.includes(choice)) return choice;
  else return undefined;
}

console.log("Computer choice: " + getComputerChoice());
console.log("Human choice: " + getHumanChoice());
