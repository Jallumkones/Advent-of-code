const puzzleTwoInput = require('./puzzleTwoInput.js');

const testArray = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

//Part 1 uses old sled rules min-max is the amount of times the letter can appear in the password

const isPasswordOkSled = (string) => {
    const splitString = string.split(' ');
    const min = Number(splitString[0].split('-')[0]);
    const max = Number(splitString[0].split('-')[1]);
    const count = splitString[2].split('').reduce((agg, curr) => {
        if(curr === splitString[1][0]){
            agg += 1
        }
        return agg
    },0)
    if(count >= min && count <= Number(max)){
        return true;
    } else {
        return false
    }
}

// console.log(isPasswordOkSled('1-3 b: cdefg'));


//Part 2 uses new tobongan rules index-index must contain the letter

const isPasswordOkTobogon = (passwordRules) => {
    const splitPassword = passwordRules.split(' ');
    const password = splitPassword[2];
    const letter = splitPassword[1][0];
    const firstIndex = splitPassword[0].split('-')[0] - 1;
    const secondIndex = splitPassword[0].split('-')[1] - 1;
    if(letter === password[firstIndex] && !(letter === password[secondIndex])
    || !(letter === password[firstIndex]) && letter === password[secondIndex]) {
        return true;
    } else {
        return false;
    }
}

const howManyFitTheBill = (array, type = 'sled') => {
    
    let counter = 0;
    if(type === 'sled'){
        for(let password of array){
            if(isPasswordOkSled(password)) {
                counter++;
            }
        }
    } else if (type === 'tobogon') {
        for(let password of array){
            if(isPasswordOkTobogon(password)) {
                counter++;
            }
        }
    } else {
        return 'Please enter sled or tobogon';
    }
    return counter;
}

// console.log(isPasswordOkTobogon('16-20 j: vjkjjcjjrjjmtnbjjjnj'));
console.log(howManyFitTheBill(puzzleTwoInput,'tobogon'));
