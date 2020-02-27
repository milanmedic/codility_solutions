"use strict";

const solution = (startDst, endDst, jumpRng) => {
    if(startDst >= endDst || jumpRng <= 0){
        return 0;
    }
    if(startDst < 1 && startDst > 1000000000){
        return 0;
    }
    if(endDst < 1 && endDst > 1000000000){
        return 0;
    }
    if(jumpRng < 1 && jumpRng > 1000000000){
        return 0;
    }
    return Math.ceil((endDst - startDst)/jumpRng);
}

console.log(solution(1, 5, 5));
