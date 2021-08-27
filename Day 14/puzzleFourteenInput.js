const path = require('path');
const fs = require('fs');

const puzzleForteenInput = fs
    .readFileSync(path.join(__dirname,'puzzleFourteenInput.txt'), 'utf-8')
    .toString()
    .split('\n')
    .map(ele => ele.split(' = '))

module.exports = puzzleForteenInput;