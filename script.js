// GLOBAL CONSTANTS AND VARIABLES

const choices = ["rock", "paper", "scissors"];

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
  if (choices.includes(choice)) {
    return choice;
  } else {
    getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  let winner;
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
    winner = "human";
  } else {
    winner = "computer";
  }

  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  console.log("Let the games begin!");

  for (i = 1; i <= 5; i++) {
    console.log("Round " + i);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const winner = playRound(humanSelection, computerSelection);
    console.log("Winner: " + winner);

    if (winner == "computer") {
      computerScore++;
    }
    if (winner == "human") {
      humanScore++;
    }

    console.log("Human: " + humanScore + " | Computer: " + computerScore);
  }

  if (humanScore == computerScore) {
    console.log("The game is a tie!");
  } else if (humanScore > computerScore) {
    console.log("Human wins the game!");
  } else {
    console.log("Computer wins the game!");
  }
}

// RUN THE GAME

playGame();

// TO DO
// + move the playRound() function out of playGame() into global scope
// + re-ask for human choice if invalid
// - there should be 5 rounds without tie, if there are ties, increase number of rounds
// - ask to play again
// - UI
