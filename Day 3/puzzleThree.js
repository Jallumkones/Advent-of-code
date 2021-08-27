const puzzleThreeInput = require('./puzzleThreeInput');

// console.log(puzzleThreeInput);

//Part 1, 3 across 1 down

const howManyTrees = (treeMap) => {
    let rowIndex = 0;
    let columnIndex = 0;
    let treeCount = 0;
    const columns = treeMap[0].length;
    while (rowIndex < treeMap.length) {
        if(treeMap[rowIndex][columnIndex] === '#'){
            treeCount++;
        }
        rowIndex += 1;
        columnIndex = (columnIndex + 3) % columns;
    }
    return treeCount;
}

console.log(howManyTrees(puzzleThreeInput));

//part 2, different slopes

const howManyTreesDifferentSlope = (treeMap,rowJump, columnJump) => {
    let rowIndex = 0;
    let columnIndex = 0;
    let treeCount = 0;
    const columns = treeMap[0].length;
    while (rowIndex < treeMap.length) {
        if(treeMap[rowIndex][columnIndex] === '#'){
            treeCount++;
        }
        rowIndex += rowJump;
        columnIndex = (columnIndex + columnJump) % columns;
    }
    return treeCount;
}

/* Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2. */

const totalTrees = howManyTreesDifferentSlope(puzzleThreeInput,1,1) *
howManyTreesDifferentSlope(puzzleThreeInput,1,3) *
howManyTreesDifferentSlope(puzzleThreeInput,1,5) *
howManyTreesDifferentSlope(puzzleThreeInput,1,7) *
howManyTreesDifferentSlope(puzzleThreeInput,2,1);
 
console.log(howManyTreesDifferentSlope(puzzleThreeInput,1,1),
howManyTreesDifferentSlope(puzzleThreeInput,1,3),
howManyTreesDifferentSlope(puzzleThreeInput,1,5),
howManyTreesDifferentSlope(puzzleThreeInput,1,7),
howManyTreesDifferentSlope(puzzleThreeInput,2,1))

console.log(totalTrees);