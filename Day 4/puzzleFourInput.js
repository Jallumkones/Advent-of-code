const path = require('path');
const fs = require('fs');

const puzzleFourInput = fs
    .readFileSync(path.join(__dirname, 'puzzleFourInput.txt'), 'utf8')
    // .readFileSync('/Users/kallum.jones/Documents/Training/Learn JavaScript Course/AdventOfCode/Day 4/puzzleFourInput.txt', 'utf8');
    .toString()
    .split('\n\n')
    .map(passport => passport.split(/[\n, ]/g))


// console.log(puzzleFourInput);

module.exports = puzzleFourInput;
    