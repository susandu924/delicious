//  Refactor the Game

// Your First Interactive Game
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, scissors?");
    // ternary function: if true ? start game, if not maybe next time
    startGame ? playGame() : alert("OK, maybe next time.");
};
// Game flow function
const playGame = () => {
    while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === ""){
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }  
        playerChoice = evaluatePlayerchoice(playerChoice);
        if (!playerChoice) {
            invalidChoice;
            continue;
        }     
        const computerChoice = getComputerchoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("please enter rock, paper, or scissors.")
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind.Maybe next time.")
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ){
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.")
};

const getComputerchoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArr = ["rock", "paper", "scissors"];
    return rpsArr[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner = 
    player === computer
    ? "Tie game!"
    : player === "rock" && computer === "paper" ? `player: ${player} \nComputer: ${computer} \nComputer wins!`
    : player === "paper" && computer === "scissors" ? 
    `player: ${player} \nComputer: ${computer} \nComputer wins!`
    : player === "scissors" && computer === "rock" ?
    `player: ${player} \nComputer: ${computer} \nComputer wins!`
    : `player: ${player} \nComputer: ${computer}\nplayerOne wins!`

return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    alert("Play again?")
};

const thanksForPlaying = () => {
    alert("OK, thanks for playing.");
};
    
initGame();

