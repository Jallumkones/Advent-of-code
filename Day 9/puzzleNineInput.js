const path = require('path');
const fs = require('fs');

const puzzleNineInput = fs
    .readFileSync(path.join(__dirname,'puzzleNineInput.txt'), 'utf-8')
    .toString()
    .split('\n')
    .map(number => Number(number));

// console.log(typeof puzzleNineInput[0]);

module.exports = puzzleNineInput;