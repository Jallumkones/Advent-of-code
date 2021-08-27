const puzzleOneInput = require('./puzzleOneInput.js');

//Part one needs 2 elements sum to 202
const sum2020 = (array) => {

    const firstNum = array.find(num1 => array.includes(2020 - num1))
    return firstNum * (2020 - firstNum);

    // let secondNum = 0;
    // const firstNum = array.find(num1 => {
    //     secondNum = array.find(num2 => num1 + num2 === 2020);
    //     return num1 + secondNum === 2020;
    // })
    // return firstNum * secondNum;

    // for(let i = 0; i < array.length; i++ ){
    //     for(let j = i+1; j < array.length; j++) {
    //         if( array[i] + array[j] === 2020){
    //             return array[i] * array[j];
    //         }
    //     }
    // }
}

console.log(sum2020(puzzleOneInput));

// Part 2 needs 3 elements to sum to 2020

const sum32020 = (array) => {

    for(first of array) {
        for(second of array){
            for(third of array){
                if(first + second + third === 2020) {
                    return first * second * third;
                };
            }
        }
    }

    // for(let i = 0; i < array.length; i++) {
    //     for(let j  = i+1; j< array.length; j++) {
    //         for(let k = j+1; k < array.length; k++){
    //             if(array[i] + array[j] + array[k] === 2020 ){
    //                 return array[i] * array[j] * array[k];
    //             }
    //         }
    //     }
    // }

}

console.log(sum32020(puzzleOneInput));