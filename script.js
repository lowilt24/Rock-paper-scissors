function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3+1);
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Select: Rock/Paper/Scissors")
    humanChoice = humanChoice.toLowerCase()
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice=== "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You won the round")
        humanScore += 1;
    } else if (humanChoice === computerChoice){
        console.log("Its a tie")
    } else {
        console.log("You lose The round")
        computerScore += 1;
    }
}

function playGame() {
    let round ;
    let humanSelection;
    let computerSelection;

    for (round = 1; round <= 5; round++) {
        console.log("Round " + round);

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log("Your choice: "+ humanSelection);
        console.log("ComputerChoice: " + computerSelection);

        playRound(humanSelection,computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore >= 3) {
        console.log("Congratulations, YOU WON THE GAME!")
    } else {
        console.log("Damn, You lost :(")
    }
    console.log("Thanks for playing!");
}

playGame();