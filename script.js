let display = document.getElementById('display');

function appendDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePower() {
    display.value += '**';
}

function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateFactorial() {
    try {
        let num = eval(display.value);
        if (num === 0) {
            display.value = 1;
        } else if (num < 0) {
            display.value = 'Error';
        } else {
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            display.value = fact;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePi() {
    display.value += Math.PI;
}

function calculateE() {
    display.value += Math.E;
}

function calculateLn() {
    try {
        display.value = Math.log(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}