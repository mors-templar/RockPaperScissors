function getComputerChoice() {
    let x = Math.random();

    if (x < 0.33) {
        return "rock";
    } else if (x < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function getUserChoice() {
//     let uchoice = prompt("Enter your choice (rock, paper, or scissors):");
//     return uchoice;
// }

function playRound(uc, cc) {
    uc = uc.toLowerCase();
    cc = cc.toLowerCase();
    let resultDisplay = document.getElementById("result-text")

    if (uc === cc) {
        resultDisplay.textContent = `It's a DRAW! Both chose ${uc}`
    } else if (
        (uc === "rock" && cc === "scissors") ||
        (uc === "paper" && cc === "rock") ||
        (uc === "scissors" && cc === "paper")
    ) {
        resultDisplay.textContent = `You Win! ${uc} beats ${cc}`
    } else {
        resultDisplay.textContent = `You Lose! ${cc} beats ${uc}`
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
