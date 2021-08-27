const adaptersList = require('./puzzleTenInput.js');

const testInput = [28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3]
// part one full change of adapters

const nextWorkingAdaptor = (adaptors, voltage) => {
    const workingAdaptors = [];
    for(let i = voltage + 1; i <= voltage + 3; i++){
        if(adaptors.includes(i)){
            workingAdaptors.push(i);
        }
    }

    if(Math.min(...workingAdaptors) !== Infinity){
        return Math.min(...workingAdaptors);
    } else {
        return false;
    }

}

const voltageDifferences = (adaptors, voltage) => {
    const diffObject = {
        '1': 0,
        '2': 0,
        '3': 1
    }

    let currentVoltage = voltage;
    
    while(nextWorkingAdaptor(adaptors, currentVoltage)) {
        
        let nextVoltage = nextWorkingAdaptor(adaptors, currentVoltage);
        let difference = nextVoltage - currentVoltage;

        diffObject[difference] = diffObject[difference] + 1;

        currentVoltage = nextVoltage;
 
    }

    return diffObject;
}

const diff = voltageDifferences(adaptersList,0);

console.log(diff['1'] * diff['3']);

// console.log(voltageDifferences(adaptersList,0));
// console.log(nextWorkingAdaptor(adaptersList,155));
// console.log(Math.max(...adaptersList));

//Part 2 all combinations

//first function returns an object with the possible adaptors that would work and the length (probs can just return array?)
const possibleAdaptors = (adapters, voltage) => {
    const workingAdaptors = [];
    for(let i = voltage + 1; i <= voltage + 3; i++){
        if(adapters.includes(i)) {
            workingAdaptors.push(i)
        }
    }
    return {nextAdaptor: workingAdaptors,
            length: workingAdaptors.length};
}

//Next function calculates recussively how many paths exist by counting end points.

const combinations = (adaptors, currentVoltage) => {
    let comboCount = 0;
    const next = possibleAdaptors(adaptors, currentVoltage);

    if(next.length === 0){
        comboCount++;
    } else {
        for(let x of next.nextAdaptor){
            comboCount = comboCount + combinations(adaptors, x);
        }
    }

    return comboCount;
}


// console.log(possibleAdaptors(testInput, 0));
// console.log(combinations(adaptersList, 0));

//takes a very long time to run.
//saw a slightly different approach of splitting up list of adaptors by splitting into smaller maps due to only one path through a 3 change

const splitAdaptors = (adapters) => {
    const adaptorsSections = [];
    const sortedAdapters = adapters.map(ele => parseInt(ele)).sort((a,b) => a-b);
    let currentIndex = 0;
    for(let i = 0; i < sortedAdapters.length - 1; i++){
        if(sortedAdapters[i+1] - sortedAdapters[i] === 3){
            adaptorsSections.push(sortedAdapters.slice(currentIndex, i+1));
            currentIndex = i + 1;
        }
    }
    adaptorsSections.push(sortedAdapters.slice(currentIndex));

    return adaptorsSections;
}

const newCombo = (adaptors, voltage) => {
    const splitAdapt = splitAdaptors(adaptors);

    splitAdapt[0].unshift(voltage);
    const mappedAdapter = splitAdapt.map(ele => combinations(ele, ele[0]));
    return mappedAdapter.reduce((agg, cur) => agg*cur);
}

console.log(newCombo(adaptersList,0));