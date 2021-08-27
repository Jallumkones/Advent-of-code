const path = require('path');
const fs = require('fs');

const busSchedule = fs
    .readFileSync(path.join(__dirname,'puzzleThirteenInput.txt'), 'utf-8')
    .toString()
    .split('\n')

// console.log(busSchedule);

module.exports = busSchedule;