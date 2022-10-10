const choices = ['rock', 'paper', 'scissors']

let playerSelection = prompt('What do you choose, Rock, Paper or Scissors? :').toLowerCase()

function getComputerChoice(){
    let choice_num = Math.floor(Math.random() * 3 )
    let computerSelection = choices[choice_num]

    return computerSelection;
}

function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection) {
        return 'It is a drawww'
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'Computer Wins!! Rock beats scissors'
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return 'Player Wins!! Paper beats Rock!'
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return "Computer Wins!! Scissors beats paper"
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return "Player Wins!! Rock beats Scissors!"
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return "Computer Wins!! Paper beats rock"
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return "Player Wins!! Scissors beats paper!"
    }
}

console.log(playRound(getComputerChoice(), playerSelection))