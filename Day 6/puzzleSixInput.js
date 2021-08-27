const path = require('path');
const fs = require('fs');

const puzzleSixInput = fs
    .readFileSync(path.join(__dirname, 'puzzleSixInput.txt'), 'utf-8')
    .toString()
    .split('\n\n')
    .map(decForm => decForm.split('\n'));

module.exports = puzzleSixInput;