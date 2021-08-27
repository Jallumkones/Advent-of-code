const puzzleSixInput = require('./puzzleSixInput');

// console.log(puzzleSixInput);
//Part 1 anyone in group answers yes - each input array is a group, and then each element in group is a person
const groupAnswers = (groupArray) => {
    let answeredYes = [];
    for(let person = 0; person < groupArray.length; person++){
        for(let question = 0; question < groupArray[person].length; question++){
            if(answeredYes.includes(groupArray[person][question]) === false){
                answeredYes.push(groupArray[person][question]);
            }
        }
    }
    return answeredYes.length;
}

const totalScore = (array) => {
    const scores = [];
    for(let group in array) {
        scores.push(groupAnswers(array[group]));
    }
    return scores.reduce((agg, cur) => agg + cur,0);
}
console.log(puzzleSixInput[0]);
console.log(groupAnswers(puzzleSixInput[0]));
console.log(totalScore(puzzleSixInput));

//Part 2 everyone has to answer yes in group



//every person in group includes a letter cycle through letters?

const everyoneYes = (array) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'];
    let allAnsweredYes = [];
    for(let letter of alphabet) {
        const didEveryoneAnswer = [];
        for(let person of array) {
            didEveryoneAnswer.push(person.includes(letter));
        }
        if(didEveryoneAnswer.every(answer => answer === true)){
            allAnsweredYes.push(letter);
        }
    }
    return allAnsweredYes.length;
    // console.log(allAnsweredYes);
}

const totalScoreAll = (array) => {
    const scores = [];
    for(let group in array) {
        scores.push(everyoneYes(array[group]));
    }
    return scores.reduce((agg, cur) => agg + cur,0);
}

console.log(everyoneYes(puzzleSixInput[0]));
console.log(totalScoreAll(puzzleSixInput));