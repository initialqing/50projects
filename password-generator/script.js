const generate = document.getElementById('generate');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const lengthEl = document.getElementById('length');
const resEl = document.getElementById('result')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercase.checked;
    const hasupper = uppercase.checked;
    const hasNumber = numbers.checked;
    const hassymbol = symbols.checked;

    const password = generatePassrod(hasLower, hasupper, hasNumber, hassymbol,length);
    console.log(password);
    resEl.innerText = password;
})

function generatePassrod(lower, upper, number, symbol, length = 12) {
    let generatedPassword = ''
    const typeCount = lower + upper + number + symbol;
    // Object.values() returns an array of the values of the object
    const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if (typeCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typeCount) {
        typeArr.forEach(type => {
            // Object.keys() returns an array of the keys of the object
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }
    return generatedPassword.slice(0,length)
}

function getRandomLower() {
    return String.fromCharCode(getRandomIndex(26) + 97)
};

function getRandomUpper() {
    return String.fromCharCode(getRandomIndex(26) + 65)
};
function getRandomNumber() {
    return String.fromCharCode(getRandomIndex(10) + 48)
};
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[getRandomIndex(symbols.length)]
};


function getRandomIndex(number) {
    return Math.floor(Math.random() * number);
}