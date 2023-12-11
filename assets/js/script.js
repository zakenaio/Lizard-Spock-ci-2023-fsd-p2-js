/** Here is the computers choice
     * let, const? test. 
    */

// MAKE SURE ITS RANDOM
// use Math.floor for int, rounded whole number
// use Math.random for random number * 5 for the different
// choices
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

// WIN LOSE LIST TEST 
// try if / else if you dont make this work. 
const wins = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors'],
}

/** WHO WINS
 * player === comp : tie.
 */
function whoWins(player, computer) {
    const winConditions = wins[player];
    if (winConditions.includes(computer)) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// SCORES HERE 
// START SCORE = 0 
let playerScore = 0;
let computerScore = 0;

function updateScore() {
    // PLAYER-SCORE
    document.getElementById('player-score').innerText = playerScore;
    // COMPUTER-SCORE
    document.getElementById('computer-score').innerText = computerScore;
}

function playerChoice(choice) {
    const computer = computerChoice();
    const result = whoWins(choice, computer);

    // PLEASE WORK! 
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }

    // SCORE UPDATE
    updateScore();
    document.getElementById('result').innerHTML = `You chose ${choice}.Computer chose ${computer}.${result}`;
}







