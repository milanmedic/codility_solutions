"use strict";

const solution = (number) => {
    let start = 0;
    let finish = 0;
    let maxCounter = 0;
    if(number == 0){
        return 0;
    }
    const seq = (number >>> 0).toString(2);

    for(let i = 0; i < seq.length; i++){
        if(seq[i] == 1){
            start = i;
        }
        for(let j = i; j < seq.length; j++){
            if(seq[j] == 1){
                finish = j;
                break;
            }
        }
        let counter = countZeros(start, finish, seq);
        if(counter > maxCounter){
            maxCounter = counter;
        }

    }
    return maxCounter;
}

function countZeros(start, finish, seq){
    let count = 0;
    for(let i = start; i <= finish; i++){
        if(seq[i] == 0){
            count++;
        }
    }
    return count;
}

console.log(solution(529));
console.log(solution(32)); //100000
console.log(solution(15));
console.log(solution(20));
console.log(solution(0));
console.log(solution(1));
