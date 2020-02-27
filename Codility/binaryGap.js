function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    /*let zeroCount = 0;
    let zeroCountMax = 0;
    let binaryNum = (N>>>0).toString(2);
    console.log(binaryNum);
    for(let i = 0; i < binaryNum.length - 1; i++){
        if(binaryNum[i] == 1){
            for(let j = 1; j < binaryNum.length; j++){
                if(binaryNum[j] == 1){
                    zeroCount = j - i - 1;
                    if(zeroCount > zeroCountMax){
                        zeroCountMax = zeroCount;
                        i = j;
                    }
                }
            }
        }
    }
    return zeroCountMax;*/
    /*let zeroCount = 0;
    let zeroCountMax = 0;
    let binaryNum = (N>>>0).toString(2);
    console.log(binaryNum);
    for(let i = 0; i < binaryNum.length - 1; i++){
        if(binaryNum[i] == 1){
            for(let j = 1; j < binaryNum.length; j++){
                if(binaryNum[j] == 1){
                    for(let k = i; k < j && k <= binaryNum.length - j; k++){
                        if(binaryNum[k] == 0){
                            zeroCount++;
                        }
                    }
                    if(zeroCount > zeroCountMax){
                        zeroCountMax = zeroCount;
                        i = j;
                        zeroCount = 0;
                    }
                }
            }
        }
    }
    return zeroCountMax;*/

}

console.log(solution(64)); //10000010001