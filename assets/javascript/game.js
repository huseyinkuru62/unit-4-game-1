function randomNum(min, max) {
    let randomNumSet = 0;
    randomNumSet = Math.floor(Math.random() * (+max - +min)) + +min;
    return randomNumSet;
}

function sumScore(currentNum, sumNum) {
    let total = parseInt(currentNum) + parseInt(sumNum);
    return total;
}

function setCrystals() {
    redNum = randomNum(1, 12);
    blueNum = randomNum(1, 12);
    yellowNum = randomNum(1, 12);
    greenNum = randomNum(1, 12);
}

let redNum = randomNum(1, 12);
let blueNum = randomNum(1, 12);
let yellowNum = randomNum(1, 12);
let greenNum = randomNum(1, 12);

$(function () {
    let minNum = 19;
    let maxNum = 120;
    let score = win = loss = 0;
    let winNum = randomNum(minNum, maxNum);
    let winCount = $('#winCount');
    let lossCount = $('#lossCount');
    let info = $('#info');

    $('#randomNum').text(winNum);

    $('.crystals').on('click', function () {
        let findId = this.id;
        let crystalNum = eval(findId + 'Num');
        let currentScore = $('#score').text();
        score = sumScore(currentScore, crystalNum);
        $('#score').text(score);
        if (score == winNum) {
            info.text('You win 🔮!');
            $('#score').text("0");
            winNum = randomNum(minNum, maxNum);
            $('#randomNum').text(winNum);
            setCrystals();
            winCount.text(sumScore(winCount.text(), 1));
        } else if (score > winNum) {
            info.text('You lost sorry 😞!');
            $('#score').text("0");
            winNum = randomNum(minNum, maxNum);
            $('#randomNum').text(winNum);
            setCrystals();
            lossCount.text(sumScore(lossCount.text(), 1));
        }
    });

    $('#backBtn').click(function () {
        window.history.back();
    });
});