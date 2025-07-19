function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) return "rock";
    else if (x < 0.66) return "paper";
    else return "scissors";
}

function playRound(uc, cc) {
    uc = uc.toLowerCase();
    cc = cc.toLowerCase();
    const resultDisplay = document.getElementById("result-text");

    // Reset classes
    resultDisplay.classList.remove("win", "lose", "draw");

    if (uc === cc) {
        resultDisplay.textContent = `It's a DRAW! Both chose ${uc}`;
        resultDisplay.classList.add("draw");
    } else if (
        (uc === "rock" && cc === "scissors") ||
        (uc === "paper" && cc === "rock") ||
        (uc === "scissors" && cc === "paper")
    ) {
        resultDisplay.textContent = `You Win! ${uc} beats ${cc}`;
        resultDisplay.classList.add("win");
    } else {
        resultDisplay.textContent = `You Lose! ${cc} beats ${uc}`;
        resultDisplay.classList.add("lose");
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
