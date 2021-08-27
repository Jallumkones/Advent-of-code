const busSchedule = require('./puzzleThirteenInput.js');

//Part 1 caluculate the next bus you can get

const departureTime = busSchedule[0];
const busTimetable = busSchedule[1];
// console.log(busTimetable)
const earliestDepartureTime = (time, schedule) =>{
    const runningBuses = schedule.split(',').filter(bus => bus !== 'x').map(bus => parseInt(bus));
    const timeToNext = runningBuses.map(bus => {
        return bus - (time % bus);
    });

    const busIndex = timeToNext.findIndex(ele => ele === Math.min(...timeToNext));

    return {busId: runningBuses[busIndex], waitTime: timeToNext[busIndex]};
}


const nextBus = earliestDepartureTime(departureTime,busTimetable);

// console.log(nextBus.busId * nextBus.waitTime);

//part 2

const offsetDeparture = (schedule) => {
    const runningbuses = schedule.split(',');
    const buses = {};
    for(let i in runningbuses){
        if(runningbuses[i] !== 'x'){
            buses[runningbuses[i]] = i;
        }
    }

    let time = 100000000000004;
    let numberOfBuses = Object.keys(buses).length;
    // console.log(buses);
    while(true) {
        let metOffest = [];
        for(let busId in buses){
            if(parseInt(buses[busId]) === 0){
                if(time % parseInt(busId) === parseInt(buses[busId])){
                    metOffest.push(true);
                } else {
                    continue;
                }
            } else {
                if((time + parseInt(buses[busId])) % parseInt(busId) === 0) {
                // if(parseInt(busId) - (time % parseInt(busId)) === parseInt(buses[busId])){
                    metOffest.push(true);
                } else {
                    continue;
                }
            }
            // console.log(metOffest)
        }

        if(metOffest.length === numberOfBuses && metOffest.every(ele => ele === true)){
        return time;
        }


        // console.log(time);
        time += 13;
    }

}   

// const tewt = () => {
//     time = 100000000000004;
//     while (true) {
//         if((time + 25) % 19 === 0){
//             return time;
//         }
//         time += 13;
//     }
// } 
// console.log(tewt());

console.log(offsetDeparture(busTimetable));

// console.log(offsetDeparture('1789,37,47,1889'));

//part 2 attempt LCM

// const isPrime = (num) => {
//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const primeFactors = (num) => {
//     let curNum = num;
//     let primeFactors = [];
//     if(isPrime(num)) {
//         primeFactors.push(num);
//         return primeFactors;
//     }
//     let i = 2
//     while (i < num) {
//         if (Number.isInteger(curNum/i) && isPrime(curNum/i)) {
//             primeFactors.push(i);
//             primeFactors.push(curNum/i)
//             break;
//         } else if(Number.isInteger(curNum/i)) {
//             primeFactors.push(i);
//             curNum = curNum / i;
//         } else if (!Number.isInteger(curNum/i)) {
//             do {
//                 i += 1
//             } while (!isPrime(i)) 
//         }
//     }
//     return primeFactors;
// }

// const offsetDeparture = (schedule) => {
//     const runningbuses = schedule.split(',');
//     const buses = {};
//     for(let i in runningbuses){
//         if(runningbuses[i] !== 'x'){
//             buses[runningbuses[i]] = i;
//         }
//     }

//     const LCM = {};
//     for(let i in buses){
//         console.log(parseInt(i)-parseInt(buses[i]));
//         // console.log(i);
//         // console.log(buses[i]);
//     }
//     console.log(buses)
// }

// console.log(offsetDeparture(busTimetable));
// console.log(primeFactors(45));

