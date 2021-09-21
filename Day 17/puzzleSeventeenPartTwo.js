const puzzleSeventeenInput = require('./puzzleSeventeenInput.js');

//part 2 6 cycles, 4 dimensions

//set up energy map
const energyMap = new Map();

for(let row = 0; row < puzzleSeventeenInput.length; row++){
    for(let col = 0; col < puzzleSeventeenInput.length; col++){
        let location = row + ',' + col + ',0,0';
        energyMap.set(location,puzzleSeventeenInput[row][col]);

    }
}

for(let x = -12; x <= 12; x++){
    for(let y = -12; y <= 12; y++){
        for(let z = -12; z <= 12; z++){
            for(let w = -12; w <= 12; w++){

                let location = x + ',' + y + ',' + z + ',' + w;
                if(typeof energyMap.get(location) === 'undefined'){
                    energyMap.set(location, '.');

                }
            }
        }
    }
}

// console.log(energyMap);

const updateOrb = (energyMap, currentOrbLocation) => {
    let currentOrbLocationArray = currentOrbLocation.split(',').map(ele => parseInt(ele));
    let activeNeighbours = 0;
    let currentState = energyMap.get(currentOrbLocation);
    for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
            for(let z = -1; z <= 1; z++){
                for(let w = -1; w <= 1; w++){
                    
                    let neighbour = [currentOrbLocationArray[0] + x,currentOrbLocationArray[1] + y, currentOrbLocationArray[2] + z, currentOrbLocationArray[3] + w];
    
                    if(energyMap.get(neighbour.join(',')) === '#' && neighbour.join(',') !== currentOrbLocation){
                        activeNeighbours++;
                    }

                }
            }
        }
    }
    // console.log(currentState,activeNeighbours);
    if(currentState === '#' && (activeNeighbours === 2 || activeNeighbours === 3)){
        // console.log('here');
        return '#';
    } else if(currentState === '#') {
        // console.log('hey');
        return '.';
    } else if(currentState === '.' && activeNeighbours === 3){
        // console.log('woop');
        return '#';
    } else {
        // console.log('why');
        return '.';
    }

}

// console.log(energyMap);

const cycle = (energyMap) => {
    const updatedEnergyMap = new Map();
    const iterator = energyMap.keys();

    for(let orb of iterator){   
        // console.log(orb);
        updatedEnergyMap.set(orb, updateOrb(energyMap,orb));

    }
    return updatedEnergyMap;

}

// console.log(cycle(energyMap));

const fullCycle = (energyMap) => {
    let test = energyMap;
    let cycles = 0;
    while(cycles < 6) {
        test = cycle(test);
        cycles++;        
    }
    return test;
}

const finalIteration = fullCycle(energyMap);

let values = finalIteration.values();
let active = 0;

for(let value of values){
    if(value === '#'){
        active++;
    }
}

console.log(active);

// console.log(updateOrb(energyMap, '0,0,0'));