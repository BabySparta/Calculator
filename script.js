// gets all elements
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const mainDisplay = document.querySelector('.main');
const secondaryDisplay = document.querySelector('.secondary');
const plus = document.querySelector('.add');
const subtract = document.querySelector('.sub');
const multiply = document.querySelector('.mult');
const divide = document.querySelector('.div');
const clear = document.querySelector('.clear')
const equal = document.querySelector('.equal');
const del = document.querySelector('.del');
const point = document.querySelector('.point');

// Basic math functions
const add = (num1, num2) => {return Number(num1) + Number(num2)}
const sub = (num1, num2) => {return Number(num1) - Number(num2)}
const mult = (num1, num2) => {return Number(num1) * Number(num2)}
const div = (num1, num2) => {return Number(num1) / Number(num2)}

// Takes 2 numbers and an operator and does the specified equation
const operate = (num1, op, num2) => {
    if(op === '+') {; return add(num1, num2)}
    else if(op === '-') {return sub(num1, num2)}
    else if(op === '*') {return mult(num1, num2)}
    else {return div(num1, num2)}
}


// Gives all elements correct event listeners
window.addEventListener('keydown', keySupport)
one.addEventListener('click', disTxt = () => {numTxt(1)})
two.addEventListener('click', disTxt = () => {numTxt(2)})
three.addEventListener('click', disTxt = () => {numTxt(3)})
four.addEventListener('click', disTxt = () => {numTxt(4)})
five.addEventListener('click', disTxt = () => {numTxt(5)})
six.addEventListener('click', disTxt = () => {numTxt(6)})
seven.addEventListener('click', disTxt = () => {numTxt(7)})
eight.addEventListener('click', disTxt = () => {numTxt(8)})
nine.addEventListener('click', disTxt = () => {numTxt(9)})
zero.addEventListener('click', disTxt = () => {numTxt(0)})
del.addEventListener('click', lastChar = () => {mainDisplay.textContent = mainDisplay.textContent.slice(0, -1)})
plus.addEventListener('click', plz = () => {disOp('+')})
subtract.addEventListener('click', plz = () => {disOp('-')})
multiply.addEventListener('click', plz = () => {disOp('*')})
divide.addEventListener('click', plz = () => {disOp('/')})
equal.addEventListener('click', plz = () => {disEqual()})
clear.addEventListener('click', clr = () => {
    mainDisplay.textContent = 0;
    secondaryDisplay.textContent = "";});
point.addEventListener('click', decimal = () => {addPoint()})

function keySupport(e) {
    if (e.key >= 0 && e.key <= 9) {numTxt(e.key)}
    if (e.key === '.') {addPoint()}
    if (e.key === '=' || e.key === 'Enter') {disEqual()}
    if (e.key === 'Backspace' || e.key === 'Delete') {mainDisplay.textContent = mainDisplay.textContent.slice(0, -1)}
    if (e.key === 'Escape') { mainDisplay.textContent = 0; secondaryDisplay.textContent = "";}
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {disOp(e.key);}
}

function addPoint() {
    if(mainDisplay.textContent.includes('.')){return;}
    mainDisplay.textContent = mainDisplay.textContent + '.'
}

function numTxt(number) {
    if (mainDisplay.textContent.length >= 12) {return;}
    let checkEqual = secondaryDisplay.textContent.split(' ')
    if(checkEqual[3] === '=' && checkEqual[4] === undefined) {
        secondaryDisplay.textContent = secondaryDisplay.textContent + ' ' + mainDisplay.textContent;
        mainDisplay.textContent = "";
    }
    remZeros(); 
    mainDisplay.textContent += number;
}

function disOp(operation) {
    if(secondaryDisplay.textContent !== '' && !secondaryDisplay.textContent.includes('=')) {disEqual()}
    if(mainDisplay.textContent === "") {
        let splitDis = secondaryDisplay.textContent.split(' ');
        let number = splitDis[0];
        secondaryDisplay.textContent = number + ' ' + operation;
        return;
    }
    let num1 = mainDisplay.textContent;
    secondaryDisplay.textContent = num1 + " " + operation;
    mainDisplay.textContent = "";
}

function disEqual() {
    if(secondaryDisplay.textContent === '') {return;}
    if(secondaryDisplay.textContent.includes('=')) {return;}
    let num2 = mainDisplay.textContent;
    let disText2 = secondaryDisplay.textContent
    if(num2 === '') {return;}
    const numOp = secondaryDisplay.textContent.split(" ");
    if(disText2 === '') {secondaryDisplay.textContent = mainDisplay.textContent + ' ='; return}
    let num1 = numOp[0];
    let op = numOp[1];
    if(num2 === '0' && op === '/') {alert('Nice try but no. Try again'); return}
    let rounded = operate(num1, op, num2)
    mainDisplay.textContent = Math.round(rounded * 10000000) / 10000000;
    if (mainDisplay.textContent.length >= 12) {mainDisplay.textContent = Number(mainDisplay.textContent).toExponential(4)};
    secondaryDisplay.textContent = num1 + " " + op + " " + num2 + " =";
}

function remZeros() {
    if(mainDisplay.textContent.includes('.')){
        while(mainDisplay.textContent.charAt(0) === '0' && mainDisplay.textContent.charAt(1) === '0') {
            mainDisplay.textContent = mainDisplay.textContent.slice(1)
        }
    } else {while(mainDisplay.textContent.charAt(0) === '0') {
        mainDisplay.textContent = mainDisplay.textContent.slice(1)
    }}
}

function limitChar() {
    if (mainDisplay.textContent.length >= 12) {
        return;
    }
}

window.onkeydown = function(event){     // keyboard suppor. It's goddamn long.
    let x = event.key;
    let keyD;
    let group;
    switch(x){
        case '1':
            keyD = document.querySelector(".one");
            group = 'press';
            break;
        case '2':
            keyD = document.querySelector(".two");
            group = 'press';
            break;
        case '3':
            keyD = document.querySelector(".three");
            group = 'press';
            break;
        case '4':
            keyD = document.querySelector(".four");
            group = 'press';
            break;
        case '5':
            keyD = document.querySelector(".five");
            group = 'press';
            break;
        case '6':
            keyD = document.querySelector(".six");
            group = 'press';
            break;
        case '7':
            keyD = document.querySelector(".seven");
            group = 'press';
            break;
        case '8':
            keyD = document.querySelector(".eight");
            group = 'press';
            break;
        case '9':
            keyD = document.querySelector(".nine");
            group = 'press';
            break; // sigh
        case '0':
            keyD = document.querySelector(".zero");
            group = 'press';
            break;
        case '+':
            keyD = document.querySelector('.add');
            group = 'press';
            break;
        case '-':
            keyD = document.querySelector('.sub');
            group = 'press';
            break;
        case '*':
            keyD = document.querySelector('.mult');
            group = 'press';
            break;
        case '/':
            keyD = document.querySelector('.div');
            group = 'press';
            break;
        case '=':
            keyD = document.querySelector('.equal');
            group = 'press';
            break;
        case 'Enter':
            keyD = document.querySelector('.equal');
            group = 'press';
            break;
        case '.':
            keyD = document.querySelector(".point");
            group = 'press';
            break;
        case 'Backspace':
            keyD = document.querySelector(".del");
            group = 'press';
            break;
        case 'Escape':
            keyD = document.querySelector('.clear');
            group = 'press';
            break;
    } if (keyD != undefined){
        keyD.classList.add(group);
        this.setTimeout(function() {keyD.classList.remove(group)}, 50);
}
}