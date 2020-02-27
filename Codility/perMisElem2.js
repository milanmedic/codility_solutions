"use strict"

const solution = (arr) => {

    if(arr[0] === 0){
        return 1
    }

    let arrSum = arr.reduce((acc, cur) => acc+cur, 0)
    const arrLen = arr.length + 1
    console.log(arrLen)
    let fullSum = arrLen * (arrLen + 1) / 2
    console.log(fullSum)
    console.log(arrSum)
    return fullSum - arrSum
}

console.log(solution([0]))