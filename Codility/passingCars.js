"use strict"

const solution = (arr) => {

    let cntZero = 0
    let passing = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            cntZero++
        } else {
            passing += cntZero
            if(passing > 1000000000){
                return -1;
            }
        }
    }
    return passing
}

console.log(solution([0, 1, 0, 1, 1]))
console.log(solution([1, 0, 0, 0, 0]))
console.log(solution([0, 1, 0, 0, 0]))

/*
 [1, 0, 0, 1, 1] => 5 => 3 ones go to the left, 2 zeroes go to the right
 [1, 0, 0, 0, 0] => 0
 [0, 1, 0 ,0, 0] => 1

 0 => right
 1 => left




*/