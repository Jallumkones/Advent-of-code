const path = require('path');
const fs = require('fs');

const puzzleSevenInput = fs
    .readFileSync(path.join(__dirname,'puzzleSevenInput.txt'), 'utf-8')
    .toString()
    .split('\n');

module.exports = puzzleSevenInput;