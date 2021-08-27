const puzzleNineInput = require('./puzzleNineInput.js');

const testInput = [35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576];

// console.log(puzzleNineInput);

const isValid = (array) => {
    const targetNumber = array[array.length - 1];
    for(let number of array){
        if(array.slice(0,array.length - 1).includes(targetNumber - number)){
            return true;
        } 
    }
      
}

const checkAll = (array, preambleLength = 25) =>{
    let startIndex = 0;
    let endIndex = startIndex + preambleLength;

    // console.log(startIndex,endIndex);
    while(isValid(array.slice(startIndex,endIndex + 1))) {
        startIndex++;
        endIndex++;
    }

    return {invalidNumber: array[endIndex], index: endIndex};
}


const encryptionWeakness = (array,preambleLength = 25) => {
    const invalidNumber = checkAll(array, preambleLength);
    const number = invalidNumber.invalidNumber;
    const numberIndex = invalidNumber.index;

    for(let i = 0; i <= numberIndex; i++){
        let sum = array[i];
        for(let j = i+1; j <= numberIndex; j++){
            sum = sum + array[j];
            if(sum === number){
                // return array[i] + array[j];
                const contiguousRange = array.slice(i, j+1);
                return Math.min(...contiguousRange) + Math.max(...contiguousRange);
            } else if (sum > number){
                break;
            }
        }
    }
}

// console.log(checkAll(testInput,5));
console.log(encryptionWeakness(puzzleNineInput,25));