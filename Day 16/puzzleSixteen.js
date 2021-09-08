const {logRules, yourTicket, nearbyTickets} = require('./puzzleSixteenInput.js');

// console.log(logRules);
// console.log(yourTicket);
// console.log(nearbyTickets);



const validNumbers = (lowEnd, highEnd) => {
    const numArray = [];
    for(let i = lowEnd; i <= highEnd; i++){
        numArray.push(i);
    }
    return numArray;
}

const pullNumbers = (string) => {
    const re = /[0-9]/g;
    const numberArray = string.split(' ').filter(ele => ele.match(re))
                              .map(range => range.split('-'));
    return numberArray;
}

const allValidNumbers = (rules) => {
    let numbers = [];
    for(let rule of rules){
        let ranges = pullNumbers(rule);
        for(let range of ranges){
            let currentNumbers = validNumbers(parseInt(range[0]),parseInt(range[1]));

            for(let i = 0; i < currentNumbers.length; i++){
                if(!numbers.includes(currentNumbers[i])){
                    numbers.push(currentNumbers[i])
                }
            }
        }
    }
    return numbers;
}

const invalidTickets = (rules, tickets) => {
    const validNums = allValidNumbers(rules);
    const invalidNumbers = [];

    for(let ticket of tickets){
        for(let number of ticket) {
            if(!validNums.includes(parseInt(number))){
                invalidNumbers.push(parseInt(number));
            }
        }
    }
    return invalidNumbers;

}

const invalidNumbersFinal = invalidTickets(logRules, nearbyTickets);
// console.log(invalidNumbersFinal);
// console.log(invalidNumbersFinal.reduce((agg, cur) => agg + cur));

//part 2 calculate what order the fields are from the rules 

//discard tickets with incorrect numbers
const validNearbyTickets = [];
const invalidNearbyTickets = [];

for(let ticket of nearbyTickets){
    let booleanTicket = [];
    for(let number of ticket){
        if(invalidNumbersFinal.includes(number)){
            booleanTicket.push(true);
        }
    }
    if(booleanTicket.every(ele => ele === false)){
        validNearbyTickets.push(ticket);
    } else {
        invalidNearbyTickets.push(ticket);
    }
}
// console.log(validNearbyTickets);

//go through each rule check if it works for all of a certain index, if it does rule fits, if it doesnt rule broke

const ruleCheck = (rule, tickets) => {
    const numbers = [];
    const ranges = pullNumbers(rule);
    const ticketLength = tickets[0].length;
    let possibleIndex = [];

    for(let range of ranges){
        let currentNumbers = validNumbers(parseInt(range[0]),parseInt(range[1]));

        for(let i = 0; i < currentNumbers.length; i++){
            if(!numbers.includes(currentNumbers[i])){
                numbers.push(currentNumbers[i])
            }
        }
    }
    for(let i = 0; i < ticketLength; i++){
        let indexNumbers = [];
        for(let j = 0; j < tickets.length; j++){
            indexNumbers.push(tickets[j][i]);
        }
        let currentRuleChecksAgainstIndex = [];
        for(let ind = 0; ind < indexNumbers.length; ind++){
            currentRuleChecksAgainstIndex.push(numbers.includes(indexNumbers[ind]));
        }
        // console.log(currentRuleChecksAgainstIndex);
        if(currentRuleChecksAgainstIndex.every(ele => ele === true)){
            possibleIndex.push(i);
            
        }
    }

    return possibleIndex;
}

// console.log(validNearbyTickets);
// console.log(validNearbyTickets.length);
// console.log(invalidNearbyTickets.length);
// console.log(logRules[1]);
// console.log(ruleCheck(logRules[0],validNearbyTickets));

const rulesPossibleIndexes = [];

for(let i = 0; i < logRules.length; i++){
    rulesPossibleIndexes[i] = [logRules[i], ruleCheck(logRules[i],validNearbyTickets)];
    // rulesPossibleIndexes[logRules[i]] = ruleCheck(logRules[i],validNearbyTickets)
}

const selectIndex = (rules) => {
    let exclusionIndex = [];
    let finalIndex = [];
    let ruleLength = rules.length;

    while(exclusionIndex.length !== ruleLength){
        for(let i = 0; i < ruleLength; i++){
            let targetArray = rules[i][1].filter(ele => !exclusionIndex.includes(ele));
            
            if(targetArray.length === 1){
                finalIndex.push([rules[i][0],targetArray]);
                exclusionIndex.push(targetArray[0]);
            }
            
        }
    }
    return finalIndex;

}

const finalRulesWithIndex =  selectIndex(rulesPossibleIndexes);

const departureRules = finalRulesWithIndex.filter(ele => ele[0].match('departure'));

console.log(departureRules);
console.log(yourTicket);

const yourTicketDeparture = (yourTicket, rules) =>{
    let ticketNumbers = [];

    for(let i = 0; i < rules.length; i++){
        ticketNumbers.push(rules[i][1][0]);
    }

    const yourTicketValues = yourTicket.filter((value, index) => ticketNumbers.includes(index));
    
    return yourTicketValues.reduce((agg, cur) => agg*cur);
}

console.log(yourTicketDeparture(yourTicket,departureRules));