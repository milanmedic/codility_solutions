"use strict";

//77% performance bottleneck
const solution = (n, arr) => {

    const counters = new Array(n).fill(0);
    arr.forEach(element => {
        if(element >= 1 && element <= n){
            //increase operation
            counters[element-1] += 1;
        } else if(element == n + 1){
            // increase to max counter
            let maxCounter = Math.max(...counters);
            for(let i = 0; i < counters.length; i++){
                counters[i] = maxCounter;
            }
        }
    });

    return counters;
}

let b = solution(5, [3,4,4,6,1,4,4])
console.log(b);
/*
counters = [0,0,0,0,0]
 if a(k) >= 1 && a(k)<= N(5)
    counters(a(k))++
 else
    forEach counter in counters
    counter = max(counters)


1.                      1.
    (0,0,1,0,0)
2.                      2.
    (0,0,1,1,0)
3.                      3.
    (0,0,1,2,0)
4.                      4.
    (2,2,2,2,2)
5.                      5.
    (3,2,2,2,2)
6.                      6.
    (3,2,2,3,2)
7.                      7.
    (3,2,2,4,2)
8.
*/