"use strict"

const breakingRecords = (scores) => {
    let maxScore = scores[0];
    let records = [0, 0];
    let minScore = scores[0];

    for(let i = 0; i <= scores.length; i++){
        if(scores[i] > maxScore){
            maxScore = scores[i];
            records[0] += 1;
        } else if(scores[i] < minScore){
            minScore = scores[i];
            records[1] += 1;
        }
    }

    return records;
}

console.log(breakingRecords([10, 5, 20, 20, 4,5,2,25,1]))