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

function playerChoice(player) {
    const computer = computerChoice();
    const result = whoWins(player, computer);
    // try results, your need results. 
    // how to target them?function playerChoice(choice) {
    document.getElementById('result').innerHTML = `You chose ${choice}.<br>Computer chose ${computer}.<br>${result}`;

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

// WHO WINS

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


function playerChoice(choice) {
    const player = choice;
    const computer = computerChoice();
    console.log('Player choice:', player);
    console.log('Computer choice:', computer);
    const result = whoWins(player, computer);
    console.log(result);
}
//PLEASE WORK! 


