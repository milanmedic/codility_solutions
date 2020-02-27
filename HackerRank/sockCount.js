function sockMerchant(n, ar) {
    let pairs = 0;
    let sockMarks = [];
    if(n >= 1 && n <= 100){
        for(let i = 0; i < n; i++){
            if(!sockMarks.includes(ar[i])){
                sockMarks.push(ar[i]);
            }
        }
        for(let i = 0; i < sockMarks.length; i++){
            let count = 0;
            for(let j = 0; j < n; j++){
                if(sockMarks[i] == ar[j]){
                    count++;
                    if(count%2 === 0){
                        pairs++;
                    }
                }
            }
        }
    }
}

sockMerchant(5, [1,3,2,1,4]);