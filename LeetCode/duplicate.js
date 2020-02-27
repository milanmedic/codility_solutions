"use strict"

const containsDuplicate = (nums) => {
    //SLOWER, USES LESS MEMORY (NOT THAT MUCH)
    /*if(nums.length != 0){
        for(let i = 0; i < nums.length; i++){
            for(let j = 1; j < nums.length; j++){
                if(nums[i] === nums[j]){
                    return true;
                }
            }
        }
    }
    return false;*/

    //FASTER, NEEDS A LITTLE BIT MORE MEMORY
    if(nums.length != 0 || nums.length === 1){
        nums.sort();
        console.log(nums);
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === nums[i+1]){
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate([3,1]))