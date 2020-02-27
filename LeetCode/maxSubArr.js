const maxSubArray = (arr) => {
    
    let maxLocal = 0;
    maxGlobal = arr[0];
    maxLocal = maxGlobal;

    for(let i = 1; i < arr.length; i++){
        maxLocal = Math.max(arr[i], maxLocal + arr[i]);
        
        if(maxLocal > maxGlobal) {
        maxGlobal = maxLocal;
        }
    }

    return maxGlobal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))