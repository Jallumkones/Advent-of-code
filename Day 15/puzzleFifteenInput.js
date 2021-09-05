const path = require('path');
const fs = require('fs');

const puzzleFifteenInput = fs
    .readFileSync(path.join(__dirname,'puzzleFifteenInput.txt'), 'utf-8')
    .toString()
    .split(',')
    .map(ele => parseInt(ele));

// console.log(puzzleFifteenInput);
module.exports = puzzleFifteenInput;