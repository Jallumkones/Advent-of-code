const path = require('path');
const fs = require('fs');

const instructions = fs
    .readFileSync(path.join(__dirname, 'puzzleTwelveInput.txt'), 'utf-8')
    .toString()
    .split('\n')
    .map(ele => [ele.slice(0,1), ele.slice(1)]);

module.exports = instructions;