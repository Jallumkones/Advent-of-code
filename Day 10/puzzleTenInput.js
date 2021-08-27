const path = require('path');
const fs = require('fs');

const puzzleTenInput = fs
    .readFileSync(path.join(__dirname, 'puzzleTenInput.txt'), 'utf-8')
    .toString()
    .split('\n')
    .map(ele => Number(ele));

module.exports = puzzleTenInput;