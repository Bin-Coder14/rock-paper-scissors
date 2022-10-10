const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    let choice_num = Math.floor(Math.random() * 3 )
    let computerSelection = choices[choice_num]

    return computerSelection;
}


// The selections of the two users
let playerSelection;
let computerSelection;


let computerScore = 0;
let playerScore =  0;

// The basic game logic
function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection) {
        return 'It is a drawww'
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++
        return 'Computer Wins!! Rock beats scissors'
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++
        return 'Player Wins!! Paper beats Rock!'
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++
        return "Computer Wins!! Scissors beats paper"
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerScore++
        return "Player Wins!! Rock beats Scissors!"
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++
        return "Computer Wins!! Paper beats rock"
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        playerScore++
        return "Player Wins!! Scissors beats paper!"
    } else {
        return "ERROR!!! What you have entered has not been found in our database! Please try again."
    }
}

function game(){
    computerScore;
    playerScore;

    for (let round = 0; round < 5; round++) {
        playerSelection = prompt('Round ' + (round+1).toString() + ': What do you choose, Rock, Paper or Scissors? :').toLowerCase()
        computerSelection = getComputerChoice()

        console.log(playRound(computerSelection, playerSelection))
    }

    if (computerScore == playerScore){
        console.log('Its a tie!!! Try again!')
    } else if (computerScore > playerScore){
        console.log('uhh...The computer won. Nice try tho. ')
    } else if (playerScore > computerScore){
        console.log('HOORAY!!! You have won!!! ')
    }
}
game();

