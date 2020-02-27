"use strict"

//slices can have only 2 or 3 elements, every other slice is made up of those slices
const solution = (arr) => {
    let position = 0
    let currentSum = arr[0] + arr[1]
    let minAvgSlice = currentSum / 2

    for(let i = 2; i < arr.length; i++){
        currentSum += arr[i]
        let newAvg = currentSum / 3
        if(newAvg > minAvgSlice){
            minAvgSlice = newAvg
            position = i - 2
        }

        currentSum -= arr[i - 2]
        newAvg = currentSum / 2
        if(newAvg > minAvgSlice){
            minAvgSlice = newAvg
            position = i - 1
        }
    }
    return position
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]))

// 60% => 100% correct 20% performance
/*const solution = (arr) => {

    let currMinAvg = 0
    let minAvg = arr[0] + arr[1] / 2
    let position = 0

    for(let i = 1; i < arr.length; i++){
        currMinAvg = arr[i] + arr[i+1] + arr[i+2] / 3
        if(currMinAvg < minAvg){
            minAvg = currMinAvg
            position = i
        } else {
            currMinAvg = arr[i] + arr[i + 1] / 2
            minAvg = currMinAvg
            position = i
        }
    }

    return position
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]))*/

/**
 * slice contains at least two elements. Slice = 0 <= P < Q < N
 * // 60% correctness, 80% performance == 70%
const solution = (arr) => {

    let currMinAvg = 0
    let minAvg = arr[0] + arr[1] / 2
    let position = 0

    for(let i = 1; i < arr.length; i++){
        currMinAvg = arr[i] + arr[i+1] /2
        if(currMinAvg < minAvg){
            minAvg = currMinAvg
            position = i
        }
    }

    return position
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]))
 */