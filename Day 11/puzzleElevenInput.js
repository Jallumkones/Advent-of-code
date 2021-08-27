const path = require('path');
const fs = require('fs');

const seatingPlan = fs
    .readFileSync(path.join(__dirname,'puzzleElevenInput.txt'), 'utf-8')
    .toString()
    .split('\n')
    .map(string => string.split(''))

// console.log(seatingPlan);

module.exports = seatingPlan;
