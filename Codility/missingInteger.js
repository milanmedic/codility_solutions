"use strict";

const solution = (arr) =>{
    let filtered = arr.filter(item => {
        if(item >  0){
            return item;
        }
    })
    filtered.sort((a,b) => a - b);
    let minelem = filtered[0];
    let maxelem = filtered[filtered.length];

    if(filtered.length === 0){
        return 1;
    }

    if(minelem > 1){
        return 1;
    } else {
        for(let i = 0; i < filtered.length; i++){
            if((filtered[i+1] - filtered[i]) > 1){
                return filtered[i]+1;
            }
        }
        return filtered[filtered.length-1] + 1;
    }
}

let b = solution([-1, -3]);
console.log(b);

/*
[1, 3, 6, 4, 1, 2]
[1, 2, 3]
[−1, −3]
[2]
[-1]
 */