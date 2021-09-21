const path = require('path');
const fs = require('fs');

const puzzleSeventeenInput = fs
    .readFileSync(path.join(__dirname,'puzzleSeventeenInput.txt'),'utf-8')
    .toString()
    .split('\n')
    .map(ele => ele.split(''));

module.exports = puzzleSeventeenInput;