// GLOBAL CONSTANTS AND VARIABLES
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// FUNCTIONS

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

function playRound(humanChoice, computerChoice) {
  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);

  // Determine and declare the winner
  if (humanChoice == computerChoice) {
    console.log("Tie!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("Human wins!");
    humanScore++;
  } else {
    console.log("Computer wins!");
    computerScore++;
  }

  // Declare the score
  console.log("Human: " + humanScore + " | Computer: " + computerScore);
}

// RUN THE GAME

console.log("Let the games begin!");

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
