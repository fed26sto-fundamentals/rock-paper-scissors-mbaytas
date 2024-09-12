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
  if (choices.includes(choice)) return choice;
  else return "INVALID";
}

function playGame() {
  // Variables
  let humanScore = 0;
  let computerScore = 0;

  // Functions
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

  // Execute
  console.log("Let the games begin!");

  for (i = 1; i <= 5; i++) {
    console.log("Round " + i);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
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
