function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText == 'Error') {
        clearDisplay();
    }
    display.innerText += character;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
