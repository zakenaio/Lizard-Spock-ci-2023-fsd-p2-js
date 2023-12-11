// script.js

const OPTIONS = ["rock", "scissors", "paper", "spock", "lizard"];
const EMOJI = {
  rock: "⛰️",
  scissors: "✂️",
  paper: "🧻",
  spock: "🖖",
  lizard: "🦎",
};

let playerScore = 0;
let computerScore = 0;
let clickCount = 0; // count the number of clicks

function getResultFromDictionary(playerChoice, computerChoice) {
  const results = {
    rock: {
      rock: "Tie",
      scissors: "Player wins",
      paper: "Computer wins",
      spock: "Computer wins",
      lizard: "Player wins",
    },
    scissors: {
      rock: "Computer wins",
      scissors: "Tie",
      paper: "Player wins",
      spock: "Player wins",
      lizard: "Computer wins",
    },
    paper: {
      rock: "Player wins",
      scissors: "Computer wins",
      paper: "Tie",
      spock: "Computer wins",
      lizard: "Player wins",
    },
    spock: {
      rock: "Computer wins",
      scissors: "Computer wins",
      paper: "Player wins",
      spock: "Tie",
      lizard: "Player wins",
    },
    lizard: {
      rock: "Player wins",
      scissors: "Computer wins",
      paper: "Player wins",
      spock: "Player wins",
      lizard: "Tie",
    },
  };
  return results[playerChoice][computerChoice];
}

function showRules() {
  const rules = `
  Rock slår scissors
  Scissors slår paper
  Paper slår rock
  Spock slår rock och scissors
  Lizard slår paper och spock
  `;
  document.querySelector(".rules").textContent = rules;
  document.querySelector(".rules").style.display = "block";
}

function clearResult() {
  document.getElementById("gameResult").textContent = "";
}

function handleClick(choice) {
  // increment the click count
  clickCount++;

  // check if it's time to display an alert
  if (clickCount === 50) {
    alert(`You've made 50 clicks!`);
    clickCount = 0; // reset the click count
  }

  // get the computer's choice
  const computerChoice = OPTIONS[Math.floor(Math.random() * 5)];

  // determine the result and winner
  const result = getResultFromDictionary(choice, computerChoice);
  const winner = result.winner;

  // update score
  if (result.tie) {
    playerScore++;
    computerScore++;
  } else if (winner === "Player") {
    playerScore++;
  } else {
    computerScore++;
  }

  // display result
  clearResult();
  document.getElementById("gameResult").textContent = `${EMOJI[choice]} ${result.message} - ${Emoji[computerChoice]}`;

  // update the result after a few seconds
  setTimeout(() => {
    if (winner === "Player") {
      document.getElementById("gameResult").textContent = `${playerScore} - ${computerScore} - Player wins!`;
    } else if (winner === "Computer") {
      document.getElementById("gameResult").textContent = `${playerScore} - ${computerScore} - Computer wins!`;
    } else {
      document.getElementById("gameResult").textContent = `${playerScore} - ${computerScore} - It's a tie!`;
    }
  }, 5000);
}
