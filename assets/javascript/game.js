function randomNum(min, max) {
    let randomNumSet = 0;
    randomNumSet = Math.floor(Math.random() * (+max - +min)) + +min;
    return randomNumSet;
}

function sumScore(currentNum, sumNum){
    let total = parseInt(currentNum) + parseInt(sumNum);
    return total;
}

$(function () {
    let minNum = 19;
    let maxNum = 120;
    let redNum = randomNum(1,12);
    let blueNum = randomNum(1,12);
    let yellowNum = randomNum(1,12);
    let greenNum = randomNum(1,12);
    let score = win = loss = 0;

    $('#randomNum').text(randomNum(minNum,maxNum));
    $('.crystals').on('click',function(){
        let findId = this.id;
        let crystalNum = eval(findId + 'Num');
        let currentNum = $('#score').text();
        score = sumScore(currentNum, crystalNum);
        $('#score').text(score);
    });
});