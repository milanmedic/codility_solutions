"use strict";

// 50% solution
const solution = (arr) => {
    /*if(arr.length <= 0){
        return 1;
    } else if(arr.length === 1){
        return arr[0]
    }else if(arr.length > 100000){
        return 0;
    } else {
        arr.sort((a,b) => a - b);
        for(let i = 0; i < arr.length; i++){
            if((arr[i+1] - arr[i]) > 1){
                return arr[i] + 1;
            }
        }
    }*/
    //90% solution
    if(arr.length <= 0){
        return 1;
    } else if(arr.length === 1){
        return arr[0]
    }else if(arr.length > 100000){
        return 0;
    } else {
        let n = arr.length + 1;
        let sumOfAllElements = (n * (1 + n)) / 2;
        let rangeSum = arr.reduce((a,b) => a+b, 0);
        return sumOfAllElements - rangeSum;
    }
}

console.log(solution([1,2,3,5]));