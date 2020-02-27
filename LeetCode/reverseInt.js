const reverse = (x) => {
    if(x < -2147483648 || x > 2147483647){
        return 0;
    }
    
    let flag = false;
    if(x < 0){
        flag = true;
    }
    x = String(Math.abs(x));
    let orgLen = x.length;
    for(let i = x.length - 1; i >= 0; i--){
        x += x[i];
    }   
    x = x.slice(orgLen);
    if(x < -2147483648 || x > 2147483647){
        return 0;
    }
    if(flag){
        return 0 - x;
    }
    return x;
};

console.log(reverse(-2147483648));