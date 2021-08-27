const instructions = require('./puzzleTwelveInput.js');

const followInstructions = (instructions, face = 'E') => {
    const compass = ['N','E','S','W'];
    let currentFacing = compass.findIndex(direction => direction === face);

    const travelled = {
        'N': 0,
        'W': 0,
        'S': 0,
        'E': 0
    }

    for(let x of instructions){
        if(x[0] === 'R'){
            currentFacing = (currentFacing + (x[1]/90)+ 4)  % 4;
        } else if(x[0] === 'L'){
            currentFacing = (currentFacing - (x[1]/90)+ 4 )  % 4;
        } else if(x[0] === 'F'){
            travelled[compass[currentFacing]] = travelled[compass[currentFacing]] + parseInt(x[1]);
        } else {
            travelled[x[0]] = travelled[x[0]] + parseInt(x[1]);
        }
        console.log(currentFacing,compass[currentFacing],x)
        console.log(travelled)
    }

    // return travelled;
    return Math.abs(travelled['N'] - travelled['S']) + Math.abs(travelled['W'] - travelled['E']);

}

// console.log(followInstructions(instructions));

//part 2 follow the waypoint

const followInstructionsWaypoint = (instructions) => {
    const compass = ['N','E','S','W'];
    const wayPoint = [1,10,0,0];

    const travelled = {
        'N': 0,
        'E': 0,
        'S': 0,
        'W': 0
    }

    for(let x of instructions){
        let command = x[0];
        console.log(x);
        switch (command) {
            case 'R':
                let rightRotations = x[1]/90;
                    for(let i = 1; i <= rightRotations; i++){
                        wayPoint.unshift(wayPoint[3]);
                        wayPoint.pop();
                    }
                break;
            case 'L':
                let leftRotations = x[1]/90;
                    for(let i = 1; i <= leftRotations; i++){
                        wayPoint.push(wayPoint[0]);
                        wayPoint.shift();
                    }
                break;
            case 'N':
                let nNorth = wayPoint[0] + parseInt(x[1]);
                let nSouth = wayPoint[2];
                if(nNorth - nSouth > 0){
                    wayPoint[2] = 0;
                    wayPoint[0] = nNorth - nSouth;
                } else if (nNorth - nSouth < 0) {
                    wayPoint[0] = 0;
                    wayPoint[2] = nSouth - nNorth;
                } else {
                    wayPoint[0] = 0;
                    wayPoint[2] = 0;
                }
                break;
            case 'S':
                let sNorth = wayPoint[0];
                let sSouth = wayPoint[2] + parseInt(x[1]);
                if(sSouth - sNorth > 0){
                    wayPoint[0] = 0;
                    wayPoint[2] = sSouth - sNorth;
                } else if (sSouth - sNorth < 0) {
                    wayPoint[2] = 0;
                    wayPoint[0] = sNorth - sSouth;
                } else {
                    wayPoint[0] = 0;
                    wayPoint[2] = 0;
                }
                break;

            case 'E':
                let eEast = wayPoint[1]+ parseInt(x[1]);
                let eWest = wayPoint[3] ;
                if(eEast - eWest > 0){
                    wayPoint[3] = 0;
                    wayPoint[1] = eEast - eWest;
                } else if (eEast - eWest < 0) {
                    wayPoint[1] = 0;
                    wayPoint[3] = eWest - eEast;
                } else {
                    wayPoint[1] = 0;
                    wayPoint[3] = 0;
                }
                break;
            case 'W':
                let wEast = wayPoint[1];
                let wWest = wayPoint[3] + parseInt(x[1]);
                if(wWest - wEast > 0){
                    wayPoint[1] = 0;
                    wayPoint[3] = wWest - wEast;
                } else if (wWest - wEast < 0) {
                    wayPoint[3] = 0;
                    wayPoint[1] = wEast - wWest;
                } else {
                    wayPoint[1] = 0;
                    wayPoint[3] = 0;
                }
                break;
            case 'F':
                travelled['N'] = travelled['N'] + (parseInt(x[1]) * wayPoint[0]);
                travelled['E'] = travelled['E'] + (parseInt(x[1]) * wayPoint[1]);
                travelled['S'] = travelled['S'] + (parseInt(x[1]) * wayPoint[2]);
                travelled['W'] = travelled['W'] + (parseInt(x[1]) * wayPoint[3]);


        }

        console.log(travelled)
        console.log(wayPoint)
    }

    // return travelled;
    return Math.abs(travelled['N'] - travelled['S']) + Math.abs(travelled['W'] - travelled['E']);

}
console.log(followInstructionsWaypoint(instructions));