function miniMaxSum(arr) { 
    let sortedArr = arr.sort((a,b) => {
        return a - b;
    });
    console.log(sortedArr);
    let minSum = 0;
    let maxSum = 0;

    for(let i = 1; i < sortedArr.length; i++){
        maxSum += sortedArr[i];
    }
    console.log(maxSum);
    for(let i = 0; i < sortedArr.length - 1; i++){
        minSum += sortedArr[i];
    }
    console.log(minSum);
}

miniMaxSum([5,2,3,6,1])