const puzzleFiveInput = require('./puzzleFiveInput.js');

// console.log(puzzleFiveInput);
//part one calculate mas seat ID from a binary partition sequence
const whichRow = (array) => {
    let startRowIndex = 0;
    let endRowIndex = 127
    for(let x of array){
        let diffRowIndex = Math.ceil((endRowIndex - startRowIndex)/2);
        
        if(x === 'F') {
            endRowIndex = endRowIndex - diffRowIndex;
        } else if (x === 'B') {
            startRowIndex = startRowIndex + diffRowIndex;
        }
    }
    return startRowIndex;
}

const whichCol = (array) => {
    let startColIndex = 0;
    let endColIndex = 7;
    for(let x of array) {
        let diffColIndex = Math.ceil((endColIndex - startColIndex)/2);
        if(x === 'L') {
            endColIndex = endColIndex - diffColIndex;
        } else if (x === 'R') {
            startColIndex = startColIndex + diffColIndex;
        }
    }
    return startColIndex;
}

const seatID = (array) =>{
    const row = whichRow(array.slice(0,7));
    const col = whichCol(array.slice(7));
    return row * 8 + col;
}

//create array of seat IDs
const seatIDs = [];

for(let i = 0; i < puzzleFiveInput.length; i++){
    seatIDs.push(seatID(puzzleFiveInput[i]));
}
// console.log(seatIDs);
// console.log(Math.max(...seatIDs));

//part 2 find your missing seat - Rules missing number with +1 and -1 seatId exists

let seat = 2;
let missingSeat;
while(!missingSeat) {
    if(seatIDs.includes(seat) === false 
        && seatIDs.includes(seat + 1) === true 
        && seatIDs.includes(seat - 1) === true) {
            missingSeat = seat;
        }

    seat++
}

console.log(missingSeat);