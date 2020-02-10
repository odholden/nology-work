const moves = ['rock','paper','scissors'];
const winMatrix = [
    ["draw", "computer", "player"],
    ["player", "draw", "computer"],
    ["computer", "player", "draw"]
];

const getPlayerMove = () => moves.indexOf(prompt("Whats yo move"));

const getComputerMove = () => Math.floor(Math.random() * 3);

const getResult = (playerMove, computerMove) => winMatrix[playerMove][computerMove];

const game = () => {
    const playerMove = getPlayerMove();
    const computerMove = getComputerMove();
    return getResult(playerMove, computerMove);
}

const gameLoop = () => {
    let again = true;
    while (again) {
        alert(game());
        again = prompt("enter any character to play again");
    }
    alert("bye!");
}

alert(gameLoop());

