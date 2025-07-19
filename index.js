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

function getUserChoice() {
    let uchoice = prompt("Enter your choice (rock, paper, or scissors):");
    return uchoice;
}

function playRound(uc, cc) {
    uc = uc.toLowerCase();
    cc = cc.toLowerCase();

    if (uc === cc) {
        console.log(`It is a DRAW, both players chose ${uc}`);
        return "draw";
    } else if (
        (uc === "rock" && cc === "scissors") ||
        (uc === "paper" && cc === "rock") ||
        (uc === "scissors" && cc === "paper")
    ) {
        console.log(`You WIN! ${uc} beats ${cc}`);
        return "u";
    } else {
        console.log(`You LOSE! ${cc} beats ${uc}`);
        return "c";
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
