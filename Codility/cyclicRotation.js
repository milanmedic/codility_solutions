"use strict";

const solution = (arr, counts) => {
    while(counts !== 0){
        let item = arr.pop();
        arr.unshift(item);
        counts--;
    }
    return arr;
}

console.log(solution([1,2,3,4], 4))