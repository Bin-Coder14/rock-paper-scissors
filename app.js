const choices = ['rock', 'paper', 'scissors']

let playerSelection = prompt('What do you choose, Rock, Paper or Scissors? :').toLowerCase()

function getComputerChoice(){
    let choice_num = Math.floor(Math.random() * 3 )
    let computerSelection = choices[choice_num]

    return computerSelection;
}



console.log(getComputerChoice())