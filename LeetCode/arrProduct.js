"use strict";

const productExceptSelf = (nums) => {
    // SLOW AF
    /*let output = [];
    output.length = nums.length;

    for(let i = 0; i < output.length; i++){
        output[i] = 1;
        for(let j = 0; j < output.length; j++){
            if(j !== i){
                output[i] *= nums[j];
            }
        }
    }
    console.log(output);*/

    //FASTER SOLUTION
    let output = [];
    output.length = nums.length;

    output[0] = 1;
    for(let i = 1; i < output.length; i++){
        output[i] = nums[i-1] * output[i - 1];
    }

    let rightValues = 1;
    for(let i = output.length - 1; i >= 0; i--){
        output[i] = output[i] * rightValues;
        rightValues *= nums[i];
    }

    return output;
}

console.log(productExceptSelf([1,2,3,4]));