
// COMPUTER CHOICE 
/**
 * Users choice when pressing a choosen button
 */
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

// WIN LOSE LIST  
/**
 * makes five keys with winning hand
 * and the two loosing in the dict. 
 */
const wins = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors'],
};

//  WHO WINS
/**
 * determines who wins by using the keys / dict.
 */
function whoWins(player, computer) {
    const winConditions = wins[player];
    if (player === computer) {
        return 'Tie!';
    }
    if (winConditions.includes(computer)) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// SCORES 
let playerScore = 0;
let computerScore = 0;

/**
 * updates score to player-score span by listening to 
 * who wins result. 
 */
function updateScore() {
    // PLAYER-SCORE
    document.getElementById('player-score').innerText = playerScore;
    // COMPUTER-SCORE
    document.getElementById('computer-score').innerText = computerScore;
}

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
    document.getElementById('result').innerHTML = `<h2>You chose ${choice}.<br>Computer chose ${computer}.<br>${result}</h2>`;
}

// RESET BUTTON! 
/**
 * resets game by changing score spans to 0
 * and update result to its default value. RESULTS
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result').innerHTML = `<h2>RESULTS</h2>`;
}