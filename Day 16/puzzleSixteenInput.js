const path = require('path');
const fs = require('fs')

const puzzleSixteenInput = fs
    .readFileSync(path.join(__dirname,'puzzleSixteenInput.txt'),'utf-8')
    .toString()
    .split('\n\n');


const logRules = puzzleSixteenInput[0]
    .split('\n');

const yourTicket = puzzleSixteenInput[1]
    .split('\n')[1]
    .split(',')
    .map(ele => parseInt(ele));

const nearbyTickets = puzzleSixteenInput[2]
    .split('\n')
    .slice(1)
    .map(ele => ele.split(',').map(num => parseInt(num)));

module.exports = {
    logRules,
    yourTicket,
    nearbyTickets
}