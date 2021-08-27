const puzzleForteenInput = require('./puzzleFourteenInput.js');

// console.log(puzzleForteenInput[1][1]);
//Part 1 add mask to values and return sum of all non 0 results

const convertBinary = (number) => number.toString(2).padStart(36,'0');
const convertNumber = (string) => parseInt(string, 2);

// console.log(convertBinary(11));

const addMask = (mask, number) => {
    const num = parseInt(number);
    const binNumberSplit = convertBinary(num).split('');
    for(let i = mask.length - 1; i >=0; i--){
        if(mask[i] !== 'X') {
            binNumberSplit[i] = mask[i];
        }
    }
    return binNumberSplit.join('')

}

const initiliseProgram = (instructions) => {
    let mask;
    const mem = {};
    
    for(let i in instructions){
        if(instructions[i][0] === 'mask'){
            mask = instructions[i][1];
        } else {
            let index = parseInt(instructions[i][0].match(/[0-9]/g).join(''));
            mem[index] = convertNumber(addMask(mask,instructions[i][1]));
        }
    }
    return mem;
}


const results = initiliseProgram(puzzleForteenInput)
// console.log(Object.values(results));
console.log(Object.values(results).reduce((agg, cur) => agg + cur));

//part 2 decoder on memory and then writes out to all floating memory addresses

const addMaskV2 = (mask, number) => {
    const num = parseInt(number);
    const binNumberSplit = convertBinary(num).split('');
    for(let i = mask.length - 1; i >=0; i--){
        if(mask[i] !== '0') {
            binNumberSplit[i] = mask[i];
        }
    }
    return binNumberSplit.join('')
}

const binaryPerm = (number) => {
    const permitations = [];

    //grabbed logic from stack overflow of how to get all binary combinations of length n
    for(let i = 0; i < 2 ** number; i++){
        let currentCombo = [];
        for(let j = 0;j < number; j++){
            if((i >> j) & 1){
                currentCombo.push(1)
            } else {
                currentCombo.push(0)
            }
        } 
        permitations.push(currentCombo);
    }
    return permitations;
}

const memLocations = (string) => {
    const memLocBinary = [];
    const numX = string.split('').filter(ele => ele === 'X').length;

    const combos = binaryPerm(numX);

    //replace
    for(let i = 0; i < combos.length; i++){
        let newString = string;
        for(let x of combos[i]){
            newString = newString.replace('X',x)
        }
        memLocBinary.push(newString)
    }

    const memLoc = memLocBinary.map(el => convertNumber(el))
    return memLoc;
    }

const initiliseProgramV2 = (instructions) => {
    let mask;
    const mem = {};
        
    for(let i in instructions){
        if(instructions[i][0] === 'mask'){
            mask = instructions[i][1];
        } else {
            const index = parseInt(instructions[i][0].match(/[0-9]/g).join(''));
            const maskIndex = addMaskV2(mask,index);

            const memLoc = memLocations(maskIndex);
            // console.log(index);
            // console.log(maskIndex);
            // console.log(memLoc);

            for(let index of memLoc){
                // console.log(index);
                mem[index] = parseInt(instructions[i][1]);
            }
        }
    }
    return mem;
    // return mem.length;
}

// console.log(initiliseProgramV2(puzzleForteenInput));
const resultsV2 = initiliseProgramV2(puzzleForteenInput)
// console.log(Object.values(resultsV2));
console.log(Object.values(resultsV2).reduce((agg, cur) => agg + cur));
