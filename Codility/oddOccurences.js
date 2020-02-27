"use strict";

const solution = (arr) => {
    const duplicatesMap = new Map();
    let returnVal = [];
    arr.forEach((item) => {
        if(!duplicatesMap.has(item)){
            duplicatesMap.set(item, 1);
        } else {
            let value = duplicatesMap.get(item);
            value += 1;
            duplicatesMap.set(item, value);
        }
    });
    duplicatesMap.forEach( (value, key) => {
        if(value === 1){
            returnVal = Number(key);
        }
      });
      return returnVal || 0;
};

console.log(solution([2,0,1]));
console.log(solution([9, 3, 9, 3, 9, 7, 9]));