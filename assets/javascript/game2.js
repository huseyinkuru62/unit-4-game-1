// characters
let char1 = {
    'name': 'Sasa',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char2 = {
    'name': 'Pratik',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char3 = {
    'name': 'Nuta',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};
let char4 = {
    'name': 'Plikiv',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
};

let minPower = 50;
let maxPower = 120;

let playerSelected = enemySelected = false;

let playerSelectedId = enemeySelectedId = 0 ;

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

function setInfo(charId){
    let characterObj = eval('char' + charId);
    
    setRandom(characterObj);

    let name = characterObj['name'];
    let aPower = characterObj['Attack Power'];
    let nameID = '#c' + charId + 'name';
    let powerID = '#c' + charId + 'power';
    $(nameID).text(name);
    $(powerID).text('Power: ' + aPower);


}



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
$(function () {
    for (let i = 1; i < 5; i++) {
        setInfo(i);
    }
    let charactersList = $('.chracters');
    charactersList.click(function(){

        let selectedChar = $(this).parent();
        if (!playerSelected){
            $('#instructions').hide();
            playerSelectedId = $(selectedChar).attr("id");
            selectedChar.remove();
            playerSelected = true;
            $('#player').append(selectedChar);
            $('#playerCharacter').text("Your character:");
            $('#info').text("Select your enemy:");
        } else if ((playerSelected) && (!enemySelected)){
            enemeySelectedId = $(this).attr("id");
            selectedChar.remove();
            enemySelected = true;
            $('#enemy').append(selectedChar);
            $('#enemyCharacter').text("Your enemy:");
            $('#info').text("Remaining enemies:");
            $('#fightBtn').prop('disabled', false);
        }
     });
});