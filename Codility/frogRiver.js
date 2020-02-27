"use strict";

// 100% correctness
//suma je potrebna jer se trazi prvo vreme kad dodje x, jer mozemo da imamo vise x vrednosti u nizu
const solution = (x, arr) => {
    let occurances = [];
    let expectedSum = x*(x+1)/2;
    let sum = 0;

    for(let i = 0; i <= arr.length; i++){
        if(!occurances[arr[i]]){
            occurances[arr[i]] = true;
            sum += arr[i];
            if(sum === expectedSum){
                return i;
            }
        }
    }
    return -1;
}

let b = solution(3, [1,3,1,1,3,2,3]);
console.log(b);

// _ _ _ _ 5
// 1 _ _ _ 5
// 1 _ 3 _ 5
// 1 2 3 _ 5
// 1 2 3 4 5


/*

  1 3 1 4 2 3 5 4
  expsum = 15
  1. iteration

  true _ _ _ _ _
  sum = 1

  2. iteration

  true _ true _ _
  sum = 4

  3. iteration

  true _ true _ _
  sum = 4

  4. iteration

  true _ true true _
  sum = 8

  5. iteration

  true true true true _
  sum = 10

  6. iteration

  true true true true true
  sum = 15

*/