const flipImage = (arr) => {
    if(arr.length >= 1 && arr.length <= 20){
        arr.forEach(element => {
            element.reverse();
            for(let i = 0; i < element.length; i++){
                if(element[i] === 0){
                    element[i] = 1;
                } else {
                    element[i] = 0;
                }
            }
        });
        return arr;
    }
    return 0;
}

console.log(flipImage([[1,1,0],[1,0,1],[0,0,0]]))
//        [[1,0,0],[0,1,0],[1,1,1]]