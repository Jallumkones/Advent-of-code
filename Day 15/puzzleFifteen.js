//part 1 Following certain rules what is the 2020th number array method

const puzzleInput = require('./puzzleFifteenInput.js');
// console.log(puzzleInput);

const memoryGame = (array, turns) => {
    const saidNumbers = [...array];

    let currentTurn = array.length + 1;
    let lastSpokenNumber;

    // for(let index in array){
    //     saidNumbers[array[index]] = parseInt(index) + 1;
    // }

    while(currentTurn <= turns){
        lastSpokenNumber = saidNumbers[saidNumbers.length - 1];
        let slicedArray = saidNumbers.slice(0,saidNumbers.length - 1);

        if(slicedArray.includes(lastSpokenNumber)) {
            let lastSaid = slicedArray.lastIndexOf(lastSpokenNumber);
            saidNumbers.push((currentTurn - 1) - (lastSaid + 1));
        } else {
            saidNumbers.push(0);
        }

        currentTurn++;

    }
    let result = turns - 1;
    return saidNumbers[result];
}

console.log(memoryGame(puzzleInput,2020));

//part 2 Following certain rules what is the 30000000th number array method too slow, so changed to have an map.

const memoryMap = (input, finalTurn) => {
    //create empty map
    const spokenNumbers = new Map();

    //add input map apart from last number said
    for(let i = 0; i < input.length - 1; i++){
        spokenNumbers.set(input[i], parseInt(i) + 1);
    }

    //set last number in inout to currently spoken
    let currentSpoken = input[input.length -1];

    for(let turn = input.length; turn < finalTurn; turn++){
        // console.log(spokenNumbers.get(currentSpoken))

        
        //on the turn tha ta number is spoken has it been siad before
        //No cause its not currently in map, set in map with turn that it has been said, set next turn number to 0
        if(typeof spokenNumbers.get(currentSpoken) === 'undefined'){
            spokenNumbers.set(currentSpoken, turn);

            currentSpoken = 0;
        } 
        //has the number been said (in map already) then get the last turn it was said
        //update map to new turn it was said
        //calculate difference for next turns number
        else {
            let lastSpoken = spokenNumbers.get(currentSpoken);
            spokenNumbers.set(currentSpoken, turn);

            currentSpoken =  turn - lastSpoken;
        }
    }
    // spokenNumbers.set(0,200);
    return currentSpoken;
}

console.log( memoryMap(puzzleInput,30000000));