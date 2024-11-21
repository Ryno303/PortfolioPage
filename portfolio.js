let nextOne = document.getElementById('next1');
let nextTwo = document.getElementById('next2');
let nextThree = document.getElementById('next3');
let nextFour = document.getElementById('next4');
let lastOne = document.getElementById('last1');
let lastTwo = document.getElementById('last2');
let lastThree = document.getElementById('last3');
let lastFour = document.getElementById('last4');

let styleGuide = document.getElementById('styleGuide');
let spaceMission = document.getElementById('spaceMission');
let ticTacToe = document.getElementById('ticTacToe');
let VitaFruit = document.getElementById('VitaFruit');


const showSpaceMission = function() {

    styleGuide.style.display = 'none';
    ticTacToe.style.display = 'none';
    spaceMission.style.display = 'flex';
    VitaFruit.style.display = 'none';
}

nextOne.addEventListener('click', showSpaceMission);
lastThree.addEventListener('click', showSpaceMission);

const showTicTacToe = function() {
    styleGuide.style.display = 'none';
    spaceMission.style.display = 'none';
    ticTacToe.style.display = 'flex';
    VitaFruit.style.display = 'none';
}

nextTwo.addEventListener('click', showTicTacToe);
lastFour.addEventListener('click', showTicTacToe);

const showStyleGuide = function() {

    ticTacToe.style.display = 'none';
    spaceMission.style.display = 'none';
    styleGuide.style.display = 'flex';
    VitaFruit.style.display = 'none';
}

nextFour.addEventListener('click', showStyleGuide);
lastTwo.addEventListener('click', showStyleGuide);

const showVitaFruit = function() {

    ticTacToe.style.display = 'none';
    spaceMission.style.display = 'none';
    styleGuide.style.display = 'none';
    VitaFruit.style.display = 'flex';
    
}

nextThree.addEventListener('click', showVitaFruit);
lastOne.addEventListener('click', showVitaFruit);

const buttonHover1 = function () {
    nextOne.style.backgroundColor = 'white';
    nextOne.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover1 = function () {
    nextOne.style.backgroundColor = '';
    nextOne.style.color = '';
    document.body.style.cursor = '';
    
}

nextOne.addEventListener('mouseover', buttonHover1);
nextOne.addEventListener('mouseout', buttonOffHover1);

const buttonHover2 = function () {
    nextTwo.style.backgroundColor = 'white';
    nextTwo.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover2 = function () {
    nextTwo.style.backgroundColor = '';
    nextTwo.style.color = '';
    document.body.style.cursor = '';
    
}

nextTwo.addEventListener('mouseover', buttonHover2);
nextTwo.addEventListener('mouseout', buttonOffHover2);

const buttonHover3 = function () {
    nextThree.style.backgroundColor = 'white';
    nextThree.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover3 = function () {
    nextThree.style.backgroundColor = '';
    nextThree.style.color = '';
    document.body.style.cursor = '';
    
}

nextThree.addEventListener('mouseover', buttonHover3);
nextThree.addEventListener('mouseout', buttonOffHover3);

const buttonHover4 = function () {
    lastOne.style.backgroundColor = 'white';
    lastOne.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover4 = function () {
    lastOne.style.backgroundColor = '';
    lastOne.style.color = '';
    document.body.style.cursor = '';
    
}

lastOne.addEventListener('mouseover', buttonHover4);
lastOne.addEventListener('mouseout', buttonOffHover4);

const buttonHover5 = function () {
    lastTwo.style.backgroundColor = 'white';
    lastTwo.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover5 = function () {
    lastTwo.style.backgroundColor = '';
    lastTwo.style.color = '';
    document.body.style.cursor = '';
    
}

lastTwo.addEventListener('mouseover', buttonHover5);
lastTwo.addEventListener('mouseout', buttonOffHover5);

const buttonHover6 = function () {
    lastThree.style.backgroundColor = 'white';
    lastThree.style.color = 'black';
    document.body.style.cursor = 'pointer';
    
}

const buttonOffHover6 = function () {
    lastThree.style.backgroundColor = '';
    lastThree.style.color = '';
    document.body.style.cursor = '';
    
}

lastThree.addEventListener('mouseover', buttonHover6);
lastThree.addEventListener('mouseout', buttonOffHover6);

