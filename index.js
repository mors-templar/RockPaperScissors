function getComputerChoice() {
    let x = Math.random();

    if (rand < 0.33) {
        return "rock";
    } else if (rand < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice() {
    let uchoice = prompt("Enter your choice (rock, paper, or scissors):");
    return uchoice;
}

function playRound(hc, cc) {
    hc = hc.toLowerCase();
    cc = cc.toLowerCase();

    if (hc === cc) {
        console.log(`It is a DRAW, both players chose ${hc}`);
        return "draw";
    } else if (
        (hc === "rock" && cc === "scissors") ||
        (hc === "paper" && cc === "rock") ||
        (hc === "scissors" && cc === "paper")
    ) {
        console.log(`You WIN! ${hc} beats ${cc}`);
        return "u";
    } else {
        console.log(`You LOSE! ${cc} beats ${hc}`);
        return "c";
    }
}



playGame();
