const buttons = document.getElementsByTagName("button");

const getComputerMove = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

const getWinner = (player, computer) => {
    const winMatrix = [
        ["draw", "lose", "win"],
        ["win", "draw", "lose"],
        ["lose", "win", "draw"]
    ];
    return winMatrix[player][computer];
}

const playGame = (playerMove) => {
    const computerMove = getComputerMove();
    const winner = getWinner(playerMove, computerMove);
    return winner;
}

[...buttons].forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonValue = Number(event.target.value);
        alert(playGame(buttonValue));
    });
});