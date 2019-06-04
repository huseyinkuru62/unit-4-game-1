// characters
let char1 = {
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char2 = {
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char3 = {
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char4 = {
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};

let minPower = 1;
let maxPower = 10;

function attack(){
    // Attack Power is 6, each attack will increase the Attack Power by 6

}

// returns a random number between min and max included
function randomNum(min, max) {
    let randomNumSet = 0;
    randomNumSet = Math.floor(Math.random() * (+max - +min)) + +min;
    return randomNumSet;
}

// set the random num to each attribute of each character
function setRandom(char) {
    char['Health Points']= randomNum(minPower, maxPower);
    char['Attack Power']= randomNum(minPower, maxPower);
    char['Counter Attack Power']= randomNum(minPower, maxPower);
}

setRandom(char1);
setRandom(char2);
setRandom(char3);
setRandom(char4);

// sum of scores
function sumScore(currentNum, sumNum) {
    let total = parseInt(currentNum) + parseInt(sumNum);
    return total;
}

// subtract of scores
function minusPower(currentNum, minusNum) {
    let total = parseInt(currentNum) - parseInt(minusNum);
    return total;
}

// begin when doc ready
// $(function () {

// });