// SCORES 
let playerScore = 0;
let computerScore = 0;

/**
 * Computers randomly generated choice
 */
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * 5)];
}

// EVENT LISTENERS FOR PLAYERCHOICE BUTTONS
document.addEventListener('DOMContentLoaded', function () {
    ['rock', 'paper', 'scissors', 'lizard', 'spock'].forEach(choice => {
        document.getElementById(`${choice}-btn`).addEventListener('click', () => playerChoice(choice));
    });
});

// EVENT LISTENER FOR RESET BUTTON
document.getElementById('rst-btn').addEventListener('click', resetGame);

/**
 * Get the players choice (choice) and compare
 * to computerChoice (computer)
 */
function playerChoice(choice) {
    const computer = computerChoice();
    const result = whoWins(choice, computer);

    // SCORE ADDITION 
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }

    // SCORE UPDATE
    updateScore();
    document.getElementById('result').innerHTML =
        `<h2>
        You chose <span id="emp">${choice}.</span><br>
        Computer chose <span id="emp">${computer}.</span><br>
        <span id="strong">${result}</span></h2>`;
}

/**
 * Defines the winning and losing combinations for each hand
 */
const wins = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
};

/**
 * Determines who wins by using the keys / dict.
 */
function whoWins(player, computer) {
    if (player === computer) {
        return 'Tie!';
    }
    if (wins[player].includes(computer)) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

/**
 * Updates score to player-score span by listening to 
 * who wins result. 
 */
function updateScore() {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
}

/**
 * resets game by changing score spans to 0
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result').innerHTML = '';
}