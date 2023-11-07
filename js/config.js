function submitXName() {
    playerData[0].name = XNameInput.value;
    XNameElement.textContent = playerData[0].name;
    XNameInput.value = ''
}

function submitOName() {
    playerData[1].name = ONameInput.value;
    ONameElement.textContent = playerData[1].name;
    ONameInput.value = ''
}
