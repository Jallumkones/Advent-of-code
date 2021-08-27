const puzzleSevenInput = require('./puzzleSevenInput.js');
// console.log(puzzleSevenInput);

//How many different colour bags can carry a shiny gold bag
const containsColour = (string, colour) => {
    const splitString = string.split(' ');
    const bagColour = splitString.slice(0,2).join(' ');
    const contianedBags = splitString.slice(3).join(' ');
    if(contianedBags.includes(colour) === true){
        return bagColour;
    } else {
        return false;
    }
}

const allRules = (array, startColour) =>{
    const finalColours = [];
    for(let i = 0; i < array.length; i++){
        if(containsColour(array[i], startColour) !== false){
            finalColours.push(containsColour(array[i], startColour));
        }
    }
    for(let colour of finalColours) {
        for(let i = 0; i < array.length; i++){
            if(containsColour(array[i], colour) !== false && finalColours.includes(containsColour(array[i], colour)) === false){
                finalColours.push(containsColour(array[i], colour));
            }
        }
    }
    return finalColours;
}

const bags = allRules(puzzleSevenInput, 'shiny gold');
console.log(bags.length);


// console.log(containsColour(puzzleSevenInput[0], 'shiny gold'));
// console.log(containsColour(puzzleSevenInput[0], 'dark chartreuse'));
// console.log(allRules(puzzleSevenInput, 'shiny gold'));
// puzzleSevenInput.forEach(ele => console.log(shinyGold(ele)));

//how many bags can a shiny bag hold

const bagObj = (string) => {
    const bagContainsArray = string.split(' ').slice(4).join(' ').split(', ');
    const bagContainsObj = [];

    for(let i = 0; i < bagContainsArray.length; i++){
        if(bagContainsArray[i].split(' ').slice(1,3).join(' ') !== 'other bags.') {
            
            const bag = {
                colour: bagContainsArray[i].split(' ').slice(1,3).join(' '),
                count: Number(bagContainsArray[i].split(' ').slice(0,1))
            }
            bagContainsObj.push(bag);
        }
    }
    return bagContainsObj;
}
//change array into obj of colour: contains

puzzleSevenInputObj = {};
for(let rule of puzzleSevenInput){
    puzzleSevenInputObj[rule.split(' ').slice(0,2).join(' ')] = bagObj(rule);
}

// console.log(puzzleSevenInputObj);

console.log(puzzleSevenInputObj);

const howManyBags = (bagCollection, colour) => {
    let bagCount = 0;
    let currentBag = bagCollection[colour]

    if(Object.keys(currentBag).length === 0) {
        return bagCount;
    } else {
        for(let bag of currentBag){
            let currentBagCount = bag.count;
            bagCount += currentBagCount;
            console.log(bag.colour);
            bagCount += currentBagCount * howManyBags(bagCollection, bag.colour);
        }
    }
    return bagCount;
}

// console.log(bagObj(puzzleSevenInput[0],'dark chartreuse'));
// console.log(puzzleSevenInputObj);
console.log(howManyBags(puzzleSevenInputObj,'shiny gold'));
