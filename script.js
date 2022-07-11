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
    remZeros(); 
    mainDisplay.textContent += number;
}

function disOp(operation) {
    if(secondaryDisplay.textContent !== '' && !secondaryDisplay.textContent.includes('=')) {disEqual()}
    let num1 = mainDisplay.textContent;
    secondaryDisplay.textContent = num1 + " " + operation;
    mainDisplay.textContent = "";
}

function disEqual() {
    if(secondaryDisplay.textContent === '') {return;}
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


// Things left to do :
// not allow multiple operations to be inputted
// If you type a number after doing an equation, start a new equation
// dont do anything if equal is pressed twice in a row