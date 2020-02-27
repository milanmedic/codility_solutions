"use strict";

const solution = (arr, k) => {

    if(k == 0){
        return arr
    }

    if(arr.length == 0 || arr.length == 1){
        return arr;
    }

    while(k > 0){
        let item = arr.pop()
        arr.unshift(item)
        k--
    }
    return arr
}


console.log(solution([1], 3))

/*
    100 % solution

    [3, 8, 9, 7, 6]
    Rotations = 3

    1. rotation
    [6, 3, 8, 7, 9]
    Rotations = 2

    2. rotation
    [9, 6, 3, 8, 7]
    Rotations = 1

    3. rotation
    [7, 9, 6, 3, 8]
    Rotations = 0

    End.
*/

/*

 */