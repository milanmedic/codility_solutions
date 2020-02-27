function staircase(n) {
    let string = "";
    for(let i = 1; i <= n; i++){
        for(let j = n; j <= n; j--){
            if(j > 0){
                if(j > i){
                    string += " ";
                } else if(j <= i){
                    string += "#";
                }
            } else {
                break;
            }
        }
        string += "\n";
    }
    console.log(string);
}

staircase(6);