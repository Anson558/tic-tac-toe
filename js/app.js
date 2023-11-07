const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const playerData = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
];

let activePlayer = 1;
let currentRound = 1;
let xNameEntered = false;
let oNameEntered = false;
let gameEnded = false;

//config
const XNameInput = document.getElementById('x-name-input');
const ONameInput = document.getElementById('o-name-input');
const XNameSubmit = document.getElementById('x-name-submit');
const ONameSubmit = document.getElementById('o-name-submit');
const XNameElement = document.getElementById('x-name');
const ONameElement = document.getElementById('o-name');

XNameSubmit.addEventListener('click', submitXName);
ONameSubmit.addEventListener('click', submitOName);

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
