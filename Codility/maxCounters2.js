"use strict"

//88% performance bottleneck
const solution = (n, arr) => {
    let currMax = 0
    let counters = new Array(n).fill(0)

    for(let element of arr){
        if(element >= 1 && element <= n){
            counters[element-1] += 1
            if(counters[element-1] > currMax)
                currMax = counters[element-1]
        }
        if(element == n + 1){
            for(let i = 0; i < counters.length; i++){
                counters[i] = currMax
            }
        }
    }
    return counters
}

console.log(solution(5, [3,4,4,6,1,4,4]))