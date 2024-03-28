
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    let currentInput = '';

    buttons.addEventListener('click', function (event) {
        const buttonValue = event.target.dataset.value;

        if (buttonValue) {
            ButtonPress(buttonValue);
        }
    });

    function ButtonPress(value) {
        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case 'C':
                erase();
                break;
            case '=':
                calculate();
                break;
            case '%':
                Percentage();
                break;
            default:
                appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    function erase() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    function calculate() {
        try {
            display.value = eval(currentInput);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function Percentage() {
        try {
            display.value = eval(currentInput) / 100;
        } catch (error) {
            display.value = 'Error';
        }
    }
});

