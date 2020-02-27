"use strict";

function twoSum(nums, target) {
    let indices = [];
    for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                if((nums[i] + nums[j]) === target){
                    indices.push(i);
                    indices.push(j);
                    return indices;
                }
            }
    }
}

let result = twoSum([0,3,1,0], 0);
console.log(result);
