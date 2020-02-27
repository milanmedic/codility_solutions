function diagonalDifference(arr) {
    // Write your code here
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let i = 0;
    let j = 0;

    for(i = 0; i < arr.length; i++){
        let subArr = arr[i];
        for(j = 0; j < subArr.length; j++){
            if(i == j) {
                sumFirstDiagonal += subArr[j];
            }

            if(j === subArr.length - 1 - i){
                sumSecondDiagonal += subArr[j];
            }
        }
    }
    return Math.abs(sumFirstDiagonal - sumSecondDiagonal);
}

let result = diagonalDifference([[1,2,3],[4,5,6],[7,8,9]]);
console.log(result);