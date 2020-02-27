"use strict";

const solution = (arr) => {

    if(arr.length >= 2 && arr.length <= 100000){
        let leftSum = arr[0];
        let rightSum = arr.reduce((acc, cur) => acc + cur) - leftSum;
        let minDiff = Math.abs(rightSum - leftSum);

        for(let i = 1; i < arr.length; i++){
            if(Math.abs(rightSum - leftSum) < minDiff){
                    minDiff = Math.abs(rightSum - leftSum);
                }
                leftSum += arr[i];
                rightSum -= arr[i];
        }   
        return minDiff;
    }
    return 0;
};

console.log(solution([3,1,2,4,3]));