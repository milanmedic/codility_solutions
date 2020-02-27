"use struct";

let solution = (arr) => {
    if(arr.length >= 1 && arr.length <= 100000){
        let sequence = [];
        for(let i = 1; i < arr.length+1; i++){
            sequence.push(i);
        }
        sequence = sequence.toString();
        arr = arr.sort((a,b) => a -b).toString();
        if(arr === sequence){
            return 1;
        } else {
            return 0;
        }
    }
    return 0;
}

console.log(solution([1,2,3,4]));