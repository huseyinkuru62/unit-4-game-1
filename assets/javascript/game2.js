let pictures = ["🐮", "😼", "🐶", "🐘","🦊","😱","🤕","👴","🐻","🐰","🦀"];


// characters
let c1 = {
    'name': 'Sasa',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
    'img':''
};
let c2 = {
    'name': 'Pratik',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
    'img':''
};
let c3 = {
    'name': 'Nuta',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
    'img':''
};
let c4 = {
    'name': 'Plikiv',
    'Health Points': 0,
    'Attack Power': 0,
    'Counter Attack Power': 0,
    'img':''
};

let minPower = 10;
let maxPower = 25;

let minHealth = 100;
let maxHealth = 200;

let playerSelected = enemySelected = false;

let playerSelectedId = enemeySelectedId = 0;

let numberOfWins = 0;

function attack() {
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
    char['Health Points'] = randomNum(minHealth, maxHealth);
    char['Attack Power'] = randomNum(8, 8);
    char['Counter Attack Power'] = randomNum(minPower, maxPower);
    char['img'] = pictures[randomNum(0, pictures.length - 1)];
}

function setInfo(charId,firstSet = false) {
    let characterObj = eval('c' + charId);
    if(firstSet){
        setRandom(characterObj);
    }
    let name = characterObj['name'];
    let hPoints = characterObj['Health Points'];
    let pic = characterObj['img'];
    let nameID = '#c' + charId + 'name';
    let healthId = '#c' + charId + 'health';
    let picId = '#c' + charId + 'pic';
    $(picId).text(pic);
    $(nameID).text(name);
    $(healthId).text('Health: ' + hPoints);
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

function fightAction(p1,p2){
    let p1Power = p1['Attack Power'];
    p1['Attack Power'] += 8;
    let p1Health = p1['Health Points'];
    let p2Power = p2['Counter Attack Power'];
    let p2Health = p2['Health Points'];

    let firstFight = p2Health - p1Power;
    let secondFight =  p1Health - p2Power;

    p2['Health Points'] = firstFight;
    p1['Health Points'] = secondFight;

    for (let i = 1; i < 5; i++) {
        setInfo(i);
    }

    if(secondFight < 0){
        $('#reset').show();
        $('#reset').click(function() {
            location.reload();
        });
        $('#fightBtn').prop('disabled', true);
        return "Game Over";
    } else if (firstFight < 0){
        $('#fightBtn').prop('disabled', true);
        enemySelected = false;
        numberOfWins++;
        $('#' + enemeySelectedId).remove();
        if(numberOfWins !== 3){
            return "You defeated " + p2['name'] + ", select your next opponent";
        } else {
            $('#reset').show();
            $('#reset').click(function() {
                location.reload();
            });
            return "You won!";
        }
    } else {
        return "You attacked " + p2['name'] + " for " + p1Power + " damage. " + p2['name'] + " attacked back for " + p2Power + " damage.";
    }

}

// begin when doc ready
$(function () {
    $('#reset').hide();
    for (let i = 1; i < 5; i++) {
        setInfo(i,true);
    };
    $('.chracters').click(function () {

        let selectedChar = $(this).parent();
        if (!playerSelected) {
            $('#instructions').hide();
            playerSelectedId = $(selectedChar).attr("id");
            selectedChar.remove();
            playerSelected = true;
            $('#player').append(selectedChar);
            $('#playerCharacter').text("Your character:");
            $('#info').text("Select your enemy:");
        } else if ((playerSelected) && (!enemySelected)) {
            enemeySelectedId = $(selectedChar).attr("id");
            selectedChar.remove();
            enemySelected = true;
            $('#enemy').append(selectedChar);
            $('#enemyCharacter').text("Your enemy:");
            $('#info').text("Remaining enemies:");
            $('#fightBtn').prop('disabled', false);
        }
    });

    $('#fightBtn').click(function () { 
        let player = eval(playerSelectedId);
        let enemy = eval(enemeySelectedId);
        $('#results').text(fightAction(player,enemy));
    });

    $('#backBtn').click(function () { 
        window.history.back();
    });
});