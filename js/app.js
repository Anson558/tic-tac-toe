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

//config
const XNameInput = document.getElementById('x-name-input');
const ONameInput = document.getElementById('o-name-input');
const XNameSubmit = document.getElementById('x-name-submit');
const ONameSubmit = document.getElementById('o-name-submit')
const XNameElement = document.getElementById('x-name');
const ONameElement = document.getElementById('o-name');

XNameSubmit.addEventListener('click', submitXName);
ONameSubmit.addEventListener('click', submitOName);

//game
const gameTiles = document.querySelectorAll('#game-board li')

for (const tile of gameTiles) {
    tile.addEventListener('click', selectGameTile)
}
