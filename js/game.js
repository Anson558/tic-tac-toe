function resetGame() {
    activePlayer = 1;
    currentRound = 1;
    gameEnded = false;
    announceWinnerElement.innerHTML =
        'You won, <span id="winner-name">PLAYER NAME</span>!';
    announceWinnerElement.style.display = 'none';
    playerNameElement.textContent = playerData[activePlayer - 1].name;

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoard.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startGame() {
    if (xNameEntered && oNameEntered) {
        resetGame();
        playerTurnElement.style.display = 'block'
        gameBoard.style.display = 'grid'
    }
}

function switchPlayer() {
    if (activePlayer == 1) {
        activePlayer = 2;
    } else if (activePlayer == 2) {
        activePlayer = 1;
    }
    playerNameElement.textContent = playerData[activePlayer - 1].name;
}

function selectGameTile(event) {
    if (gameEnded === false) {
        const selectedTile = event.target;
        if (!selectedTile.classList.contains('disabled')) {
            selectedTile.textContent = playerData[activePlayer - 1].symbol;
            selectedTile.classList.add('disabled');
        
            const tileRow = selectedTile.dataset.row;
            const tileCol = selectedTile.dataset.col;
        
            gameData[tileRow - 1][tileCol - 1] = activePlayer;
        
            winnerId = checkForGameOver();
            console.log(winnerId);
        
            if (winnerId != 0) {
                endGame(winnerId);
            }
        
            switchPlayer();
            currentRound += 1;
        }
    }
}

function checkForGameOver() {
    //Check Rows
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    //Check Columns
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    //Check Diagonal
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    //Check other Diagonal
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    announceWinnerElement.style.display = 'block';
    if (winnerId > 0) {
        announceWinnerElement.innerHTML =  'You won, <span id="winner-name">' + playerData[winnerId - 1].name + '</span>!';
    } else if (winnerId < 0) {
        announceWinnerElement.innerHTML = "It's a Draw!";
    }
    gameEnded = true;
}
