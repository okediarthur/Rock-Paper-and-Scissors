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

function game(){

    // let gameResults = [];
    let computerScore = 0;
    let playerScore = 0;
    let gameCount = 0;

    function updateScore(result){
        if(result.includes("You win")){
            playerScore++;
        }else if(result.includes("Computer wins")){
            computerScore++;
        }
    }

    function checkGameCompletion(){
        if(gameCount <= 5){
            console.log("Game Over. Results:", "Player: " + playerScore, "Computer: " + computerScore); 
            if(playerScore > computerScore){
                console.log("Overall Winner: Player!")
            } else if(computerScore > playerScore){
                console.log("Overall Winner: Computer!")
            }else {
                console.log("It's a tie in the overall game!");
            }
        }
    }

    let rock = document.querySelector('#rock');
    rock.addEventListener('click', function() {
        var computerChoice = getcomputerChoice();
        var result = playRound("rock", computerChoice);
        document.getElementById("result").innerText = result;
        updateScore(result);
        gameCount++;
        checkGameCompletion();
    });

    let paper = document.querySelector('#paper');
    paper.addEventListener('click', function() {
        var computerChoice = getcomputerChoice();
        var result = playRound("paper", computerChoice);
        document.getElementById("result").innerText = result;
        updateScore(result);
        gameCount++;
        checkGameCompletion();
    });

    let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', function() {
        var computerChoice = getcomputerChoice();
        var result = playRound("scissors", computerChoice);
        document.getElementById("result").innerText = result;
        updateScore(result);
        gameCount++;
        checkGameCompletion();
    });
}

game();