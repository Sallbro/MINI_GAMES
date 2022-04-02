let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const statusDisplay = document.querySelector('.game--status');
const cellstyle = document.querySelector('.cell');
const wincondition = [[0, 1, 2], [0, 3, 6], [6, 7, 8], [8, 5, 2], [0, 4, 8], [2, 4, 6], [1, 4, 7], [3, 4, 5]];

wonmessage = () => {
    statusDisplay.innerHTML = `winner is ${currentPlayer}...`;
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', restartgame);

function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] != "") {
        return;
    }
    playhandless(clickedCell, clickedCellIndex);
    winnercheck();
}

function playhandless(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function winnercheck() {
    for (let i = 0; i <= 7; i++) {
        const wincount = wincondition[i];
        let a = gameState[wincount[0]];
        let b = gameState[wincount[1]];
        let c = gameState[wincount[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a == b && b == c) {
            wonmessage();
            document.querySelector('.game--container').innerHTML = "IF YOU WANT TO PLAY AGAIN RESTART THE GAME BY CLICKING THE RESTART BUTTON!...";
            break;

        }
    }
    let epty = !gameState.includes("");
    if (epty) {
        document.querySelector('.game--container').innerHTML = "GAME IS TIE";
    }
    if (currentPlayer == "X") {
        // cellstyle.style.color = "blue";
        currentPlayer = "O";


    }
    else {
        // cellstyle.style.color = "red";
        currentPlayer = "X";
    }
}

function restartgame() {
    location.reload();
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}





