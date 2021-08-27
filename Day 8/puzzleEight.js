const { Console } = require('console');
const bootCode = require('./puzzleEightInput.js');

// console.log(bootCode);

const runCode = (array) => {
    let accumulator = 0;
    let index = 0;

    const linesVisited = [];

    while(!linesVisited.includes(index)){
        linesVisited.push(index);
        //If beyond length of code stops
        if(index === array.length) {
            return {acc: accumulator, index: index};
        }

        let operation = array[index].split(' ')[0];
        let amount = array[index].split(' ')[1];
        // console.log(operation, amount);
        switch(operation) {
            case 'acc':
                index++;
                if(amount[0] === '+'){
                    accumulator += Number(amount.slice(1));
                } else {
                    accumulator -= Number(amount.slice(1));
                }
                break;
            case 'nop':
                index++;
                break;
            case 'jmp':
                if(amount[0] === '+'){
                    index += Number(amount.slice(1));
                } else {
                    index -= Number(amount.slice(1));
                }
        }
    }
    return {acc: accumulator, index: index};
}

console.log(runCode(bootCode));

//Part 2 find the broken code line

const updateCode = (string) => {
    let operation = string.split(' ')[0];

    if(operation === 'nop') {
        operation = 'jmp';
    } else if (operation === 'jmp') {
        operation = 'nop';
    } 

    return operation + ' ' + string.split(' ')[1];
}

// console.log(bootCode[1]);
// console.log(updateCode(bootCode[1]));

const runCodeChanged = (code) => {
    for(let i = 0; i < code.length; i++){
        const updatedCode = [...code];
        // console.log(updatedCode);
        updatedCode[i] = updateCode(updatedCode[i]);
        // console.log(updatedCode);
        const results = runCode(updatedCode);
        const acc = results.acc;
        const index = results.index;

        // console.log(i, acc, index, code.length);
        if(index === code.length){
            return acc;
        }
        // updatedCode = null;
        // updatedCode[i] = updateCode(updatedCode[i]); //Can't understand why i need to call this again when i have line 66
    }

}

console.log(runCodeChanged(bootCode));