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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanScore)
console.log(computerScore)
console.log(humanSelection)
console.log(computerSelection)

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

console.log(playRound(humanSelection, computerSelection))