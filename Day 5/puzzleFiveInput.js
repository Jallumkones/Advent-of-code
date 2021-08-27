const path = require('path');
const fs = require('fs');

const puzzleFiveInput = fs
    .readFileSync(path.join(__dirname, 'puzzleFiveInput.txt'), 'utf8')
    .toString()
    .split('\n');

module.exports = puzzleFiveInput;