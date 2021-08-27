const seatingPlan = require('./puzzleElevenInput')

// console.log(seatingPlan);

const updateSeat = (seatPlan,row,col) => {
    let occSeat = 0;
    let currentSeat = seatPlan[row][col]
    // console.log(currentSeat);
    let rowLength = seatPlan.length;
    let colLength = seatPlan[0].length;

    for(let rowIndex = row - 1; rowIndex <= row + 1; rowIndex++){
        for(let colIndex = col - 1; colIndex <= col + 1; colIndex++){
            if(rowIndex < 0 || colIndex < 0){
                continue;
            } else if (rowIndex >= rowLength || colIndex >= colLength){
                continue;
            } else if(colIndex === col && rowIndex === row){
                continue;
            } else if(seatPlan[rowIndex][colIndex] === '#'){
                occSeat++;
            }
        }
    }

    if(currentSeat === 'L' & occSeat === 0){
        return '#';
    } else if (currentSeat === '#' & occSeat >= 4) {
        return 'L'
    } else {
        return currentSeat
    }

}

// console.log(seatingPlan[0]);

// console.log(seatingPlan[0][0]);

// console.log(updateSeat(seatingPlan,0,1));


const updateSeatingPlan = (seatPlan) => {
    const updatedSeatPlan = JSON.parse(JSON.stringify(seatPlan)); //Creates Deep copy of object so is disconnected
    let seatChanges = 0;

    for(let row = 0; row < seatPlan.length; row++){
        for(let col = 0; col < seatPlan[0].length; col++){

            updatedSeatPlan[row][col] = updateSeat(seatPlan,row,col);

            if(updatedSeatPlan[row][col] !== seatPlan[row][col]){
                seatChanges++;
                
            }

        }
    }
    
    if(seatChanges > 0){
        let finalSeatPlan = updateSeatingPlan(updatedSeatPlan);
        return finalSeatPlan
    } else {
        return updatedSeatPlan
    }
}

const lastSeatPlan = updateSeatingPlan(seatingPlan);

console.log(
    lastSeatPlan.map(ele => ele.reduce((agg, cur) => {
        if(cur === '#'){
            agg = agg + 1;
        }
        return agg
    },0)
    ).reduce((agg, cur) => agg + cur)
);


//Part 2 line of site to first chair

const northWest = (seatPlan,row,col) => {
    let emptySeat = true;
    let rowIndex = row - 1;
    let colIndex = col - 1;
    
    while(emptySeat) {
        if(rowIndex < 0 || colIndex < 0){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex--;
            colIndex--;
        }
    }
}

const north = (seatPlan,row,col) => {
    let emptySeat = true;
    let rowIndex = row - 1;
    let colIndex = col;
    
    while(emptySeat) {
        if(rowIndex < 0){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex--;
        }
    }
}

const northEast = (seatPlan,row,col) => {
    let emptySeat = true;
    let colLength = seatPlan[0].length;
    let rowIndex = row - 1;
    let colIndex = col + 1;
    
    while(emptySeat) {
        if(rowIndex < 0 || colIndex >= colLength){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex--;
            colIndex++;
        }
    }
}

const east = (seatPlan,row,col) => {
    let emptySeat = true;
    let colLength = seatPlan[0].length;
    let rowIndex = row;
    let colIndex = col + 1;
    
    while(emptySeat) {
        if(colIndex >= colLength){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            colIndex++;
        }
    }
}

const southEast = (seatPlan,row,col) => {
    let emptySeat = true;
    let colLength = seatPlan[0].length;
    let rowLength = seatPlan.length;
    let rowIndex = row + 1;
    let colIndex = col + 1;
    
    while(emptySeat) {
        if(rowIndex >= rowLength || colIndex >= colLength){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex++;
            colIndex++;
        }
    }
}

const south = (seatPlan,row,col) => {
    let emptySeat = true;
    let rowLength = seatPlan.length;
    let rowIndex = row + 1;
    let colIndex = col;
    
    while(emptySeat) {
        if(rowIndex >= rowLength){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex++;
        }
    }
}

const southWest = (seatPlan,row,col) => {
    let emptySeat = true;
    let rowLength = seatPlan.length;
    let rowIndex = row + 1;
    let colIndex = col - 1;
    
    while(emptySeat) {
        if(rowIndex >= rowLength || colIndex < 0){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            rowIndex++;
            colIndex--;
        }
    }
}

const west = (seatPlan,row,col) => {
    let emptySeat = true;
    let rowIndex = row;
    let colIndex = col - 1;
    
    while(emptySeat) {
        if(colIndex < 0){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === 'L'){
            return 0;
        } else if(seatPlan[rowIndex][colIndex] === '#'){
            return 1;
        } else {
            colIndex--;
        }
    }
}

const updateSeatLineOfPath = (seatPlan,row,col) => {
    let occSeat = 0;
    let currentSeat = seatPlan[row][col]

    occSeat = occSeat + northWest(seatPlan,row,col);
    occSeat = occSeat + north(seatPlan,row,col);
    occSeat = occSeat + northEast(seatPlan,row,col);
    occSeat = occSeat + east(seatPlan,row,col);
    occSeat = occSeat + southEast(seatPlan,row,col);
    occSeat = occSeat + south(seatPlan,row,col);
    occSeat = occSeat + southWest(seatPlan,row,col);
    occSeat = occSeat + west(seatPlan,row,col);

    if(currentSeat === 'L' & occSeat === 0){
        return '#';
    } else if (currentSeat === '#' & occSeat >= 5) {
        return 'L'
    } else {
        return currentSeat
    }

}

const updateSeatingPlanLineOfSite = (seatPlan) => {
    const updatedSeatPlan = JSON.parse(JSON.stringify(seatPlan)); //Creates Deep copy of object so is disconnected
    let seatChanges = 0;

    for(let row = 0; row < seatPlan.length; row++){
        for(let col = 0; col < seatPlan[0].length; col++){

            updatedSeatPlan[row][col] = updateSeatLineOfPath(seatPlan,row,col);

            if(updatedSeatPlan[row][col] !== seatPlan[row][col]){
                seatChanges++;
                
            }

        }
    }
    
    if(seatChanges > 0){
        let finalSeatPlan = updateSeatingPlanLineOfSite(updatedSeatPlan);
        return finalSeatPlan
    } else {
        return updatedSeatPlan
    }
}

const lastSeatPlanLineOfSite = updateSeatingPlanLineOfSite(seatingPlan);

console.log(
    lastSeatPlanLineOfSite.map(ele => ele.reduce((agg, cur) => {
        if(cur === '#'){
            agg = agg + 1;
        }
        return agg
    },0)
    ).reduce((agg, cur) => agg + cur)
);