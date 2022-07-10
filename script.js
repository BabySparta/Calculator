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

// Basic math functions
const add = (num1, num2) => {return num1 + num2}
const sub = (num1, num2) => {return num1 - num2}
const mult = (num1, num2) => {return num1 * num2}
const div = (num1, num2) => {return num1 / num2}

// Takes 2 numbers and an operator and does the specified equation
const operate = (numb1, op, numb2) => {
    if(op === '+') {return (add(numb1, numb2))}
    else if(op === '-') {return (sub(numb1, numb2))}
    else if(op === '*') {return (mult(numb1, numb2))}
    else {return (div(numb1, numb2))}
}


// Gives all elements correct event listeners
one.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 1})
two.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 2})
three.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 3})
four.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 4})
five.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 5})
six.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 6})
seven.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 7})
eight.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 8})
nine.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 9})
zero.addEventListener('click', disTxt = () => {mainDisplay.textContent = mainDisplay.textContent + 0})
plus.addEventListener('click', displayTextAdd = () => {
    let num1 = mainDisplay.textContent;
    let op = '+';
    secondaryDisplay.textContent = num1 + " " + op;
    mainDisplay.textContent = "";});
subtract.addEventListener('click', displayTextSub = () => {
    let num1 = mainDisplay.textContent;
    let op = '-';
    secondaryDisplay.textContent = num1 + " " + op;
    mainDisplay.textContent = "";});
multiply.addEventListener('click', displayTextMult = () => {
    let num1 = mainDisplay.textContent;
    let op = '*';
    secondaryDisplay.textContent = num1 + " " + op;
    mainDisplay.textContent = "";});
divide.addEventListener('click', displayTextAdd = () => {
    let num1 = mainDisplay.textContent;
    let op = '/';
    secondaryDisplay.textContent = num1 + " " + op;
    mainDisplay.textContent = "";});
equal.addEventListener('click', answer = () => {
    let num2 = mainDisplay.textContent;
    const numOp = secondaryDisplay.textContent.split(" ");
    let num1 = numOp[0];
    let op = numOp[1];
    mainDisplay.textContent = operate(parseInt(num1), op, parseInt(num2));
    secondaryDisplay.textContent = num1 + " " + op + " " + num2 + " =";});
clear.addEventListener('click', clr = () => {
    mainDisplay.textContent = "";
    secondaryDisplay.textContent = "";
})