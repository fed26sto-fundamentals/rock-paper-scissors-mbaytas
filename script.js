console.log("Let the games begin!");

const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Randomly return one of the choices
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

console.log("Human choice: " + getHumanChoice());
console.log("Computer choice: " + getComputerChoice());
