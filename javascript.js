//query selector for the score updates
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

//query selector for the round updates
const roundResults = document.querySelector('.round-results');

// query selector for the restart button
const restartGame = document.querySelector('#reset');
restartGame.addEventListener('click',() => refreshPage()); 

//start game when any button is clicked (excluded the reset button)
const buttons = document.querySelectorAll('button:not(#reset)');
buttons.forEach((button) => {
    button.addEventListener('click', playerPlay)});

let playerWin = 0;
let computerWin = 0;


//function for random number between 1-3 for the cpu
function computerPlay () {
    computerRNG = Math.floor(Math.random() * 3) + 1;

    if (computerRNG == 1) {
        return 'rock';
        } else if (computerRNG == 2) {
            return 'paper'; 
        } else {return 'scissors';}
    }

//function for game logic
function playRound (playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
            (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper'))
            {
            playerWin += 1;
            playerScore.textContent = playerWin;
            roundResults.textContent = 'you have won with your ' + playerSelection;} 
            else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock'))
            {
            computerWin += 1; 
            computerScore.textContent = computerWin;
            roundResults.textContent = 'computer has won with their ' + computerSelection;}
            else {
            roundResults.textContent = "It's a tie, you both drew with your " + playerSelection;
            }
        checkScore();
    }

//function for player choice which plays a round
function playerPlay(e) {
    let playerSelection = (e.target.id);
        playRound(playerSelection, computerPlay());
}

function checkScore() {
    if (playerWin === 5) {
        roundResults.textContent = "You have won the match!";
    } else if (computerWin === 5) {
        roundResults.textContent = "Computer has won the match!";
    } 
}


function refreshPage() {
    window.location.reload();
} 


