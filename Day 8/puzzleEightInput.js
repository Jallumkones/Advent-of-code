const path = require('path');
const fs = require('fs');

const bootCode = fs
    .readFileSync(path.join(__dirname, 'puzzleEightInput.txt'), 'utf-8')
    .toString()
    .split('\n')


module.exports = bootCode;