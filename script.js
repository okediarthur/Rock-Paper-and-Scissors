function getcomputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.round() * choices.length);
    return choices[randomIndex];
}

function playerSelection(){
    const playerChoice = prompt("Input choice(Rock, Paper, Scissors):");
    return playerChoice;
}

function playRound(playerSelection, computerChoice){
    
}

const playerSelection = "rock";
const computerChoice = getcomputerChoice();
console.log(playRound(playerSelection, computerChoice))