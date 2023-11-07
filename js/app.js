const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const playerData = [
    {
        symbol: 'X',
    },
    {
        symbol: 'O',
    },
];

let activePlayer = 1;
let currentRound = 1;
let gameEnded = true;

//game
const startGameButton = document.getElementById('start-game-button');
const gameTiles = document.querySelectorAll('#game-board li');
const gameBoard = document.getElementById('game-board');
const playerNameElement = document.getElementById('player-turn-name');
const playerTurnElement = document.getElementById('player-turn');
const announceWinnerElement = document.getElementById('announce-winner');

startGameButton.addEventListener('click', startGame);

for (const tile of gameTiles) {
    tile.addEventListener('click', selectGameTile);
}
