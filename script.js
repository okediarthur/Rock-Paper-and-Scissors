function getcomputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerChoice){
    if (playerSelection === computerChoice) {
        return("It's a tie!");
    } else if (playerSelection === 'rock' && computerChoice === 'scissors'){
        return("Rock beats Scissors. You win!");
    } else if (playerSelection === 'scissors' && computerChoice === 'paper'){
        return("Scissors cuts paper. You win!");
    } else if (playerSelection === 'paper' && computerChoice === 'rock'){
        return("Paper wraps rock. You win");
    } else {
        return "Computer wins!";
    }
}

// function playGame(){
//     const playerSelection = document.getElementById("userChoice").value.toLowerCase();
//     const computerChoice = getcomputerChoice();
//     const result = playRound(playerSelection, computerChoice);
//     const resultElement = document.getElementById("result");

//     resultElement.textContent = result;
// }

let gameResults = [];

let gameCount = 0;

function game(){
    if(gameCount < 5){
    const playerSelection = document.getElementById("userChoice").value.toLowerCase();
    const computerChoice = getcomputerChoice();
    const result = playRound(playerSelection, computerChoice);
    
    gameResults.push(result);

    gameCount++;

    const resultElement = document.getElementById("result");
    resultElement.textContent = result;

    if(gameCount === 5){
        resultElement.textContent += "\nGame Over! Results: " + gameResults.join(", ");
    } else {
        resultElement.textContent = "Game Over! Results: " + gameResults.join(", ");
    }
}
}