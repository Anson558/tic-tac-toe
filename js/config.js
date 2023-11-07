function submitXName() {
    playerData[0].name = XNameInput.value;
    if (playerData[0].name == '') {
        XNameElement.textContent = 'Enter Valid Name';
        return;
    }
    XNameElement.textContent = playerData[0].name;
    XNameInput.value = '';
    xNameEntered = true;
    if (xNameEntered && oNameEntered) {
        startGameButton.style.display = 'block';
    }
}

function submitOName() {
    playerData[1].name = ONameInput.value;
    if (playerData[1].name == '') {
        ONameElement.textContent = 'Enter Valid Name';
        return;
    }
    ONameElement.textContent = playerData[1].name;
    ONameInput.value = '';
    oNameEntered = true;
    if (xNameEntered && oNameEntered) {
        startGameButton.style.display = 'block';
    }
}
