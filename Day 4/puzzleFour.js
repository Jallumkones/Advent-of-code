//Try turn input into an object rather than an array

const puzzleFourInput = require('./puzzleFourInput.js');

// console.log(puzzleFourInput);

// const puzzleFourObj = puzzleFourInput.map(ele => ele.map(prop => prop.split(':')));

// console.log(puzzleFourObj);

const validPassport = (passport) => {
    let presentFields = [];
    const splitPassport = passport.map(credential => credential.split(':'));

    splitPassport.forEach(field => presentFields.push(field[0]));
    if(presentFields.length === 8 || (presentFields.length === 7 && presentFields.includes('cid') === false)) {
        return true;
    } else {
        return false;
    }
}

const batchCheck = (array) =>{
    let validPass = 0;
    for(let i = 0; i < array.length; i++){
        if(validPassport(array[i]) === true){
            validPass++;
        }
    }
    return validPass
}
// console.log(puzzleFourInput[2]);
// console.log(validPassport(puzzleFourInput[1]));
console.log(batchCheck(puzzleFourInput));

//part 2

const validPassportStrict = (passport) => {
    let presentFields = [];
    const splitPassport = passport.map(field => field.split(':'));

    splitPassport.forEach(field => presentFields.push(field[0]));

    const validFields = [];

    if(presentFields.length === 8 || (presentFields.length === 7 && presentFields.includes('cid') === false)) {
        for(let i = 0; i < splitPassport.length; i++){
            switch(splitPassport[i][0]){
                case 'byr':
                    let byrValue = splitPassport[i][1];
                    if(byrValue.length === 4 && byrValue >= 1920 && byrValue <= 2002){
                        validFields.push(true);
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'iyr':
                    let iyrValue = splitPassport[i][1];
                    if(iyrValue.length === 4 && iyrValue >= 2010 && iyrValue <= 2020){
                        validFields.push(true);
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'eyr':
                    let eyrValue = splitPassport[i][1];
                    if(eyrValue.length === 4 && eyrValue >= 2020 && eyrValue <= 2030){
                        validFields.push(true);
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'hgt':
                    let hgtValue = splitPassport[i][1];
                    let measure = hgtValue.slice(hgtValue.length - 2);
                    if(measure === 'cm') {
                        let height = hgtValue.slice(0,3);
                        if(height >= 150 && height <= 193) {
                            validFields.push(true);
                        } else {
                            validFields.push(false);
                        }
                    } else if(measure === 'in') {
                        let height = hgtValue.slice(0,2);
                        if(height >= 59 && height <= 76) {
                            validFields.push(true);
                        } else {
                            validFields.push(false);
                        }
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'ecl':
                    let eclValue = splitPassport[i][1];
                    let validColours = ['amb','blu','brn','gry','grn','hzl','oth'];
                    if(validColours.includes(eclValue)){
                        validFields.push(true);
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'hcl':
                    let hclValue = splitPassport[i][1];
                    let start = hclValue[0];
                    let end = hclValue.slice(1);
                    if(start === '#' && end.match(/[0-9,a-f]/g).length === 6){
                        validFields.push(true);
                    } else {
                        validFields.push(false);
                    }
                    break;
                case 'pid':
                    let pidValue = splitPassport[i][1];
                    let pidMatch = pidValue.match(/[0-9]/g);
                    // console.log(pidValue,pidMatch)
                    if(pidMatch.length === 9){
                        validFields.push(true);
                    } else {
                        // console.log('here')
                        validFields.push(false);
                    }
                    break;
                case 'cid':
                    validFields.push(true);
                    break;
            }
        }
        // console.log(splitPassport);
        // console.log(validFields);
        if(validFields.every(ele => ele === true)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    // console.log(validFields);
}

const batchCheckStrict = (array) =>{
    let validPass = 0;
    for(let i = 0; i < array.length; i++){
        if(validPassportStrict(array[i]) === true){
            validPass++;
        }
    }
    return validPass
}
// console.log(puzzleFourInput.length)
// console.log(validPassportStrict(puzzleFourInput[96]));
console.log(batchCheckStrict(puzzleFourInput));