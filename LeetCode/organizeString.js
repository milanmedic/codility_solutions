"use strict";

const solution = (arr) => {
    let retArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(retArr.length === 0){
            retArr.push(arr[i]);
        }
        for(let j = 1; j <= arr.length-1; j++){
            if(retArr[i] !== arr[j]){
                retArr.push(arr[j]);
            }
            if(arr[j] === retArr[i] && j === arr.length){
                return 0;
            }
        }
    }
    return retArr;
}

Console.log(solution(['a','a','b','b','c','c']));