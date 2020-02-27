const toLowerCase = function(str) {
    let retArr = [];
    if(str.length == 0){
        return "";
    }
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            let character = String.fromCharCode(str.charCodeAt(i) + 32);
            retArr.push(character);
        } else {
            retArr.push(str[i]);
        }
    }
    return retArr.join('');
};

console.log(toLowerCase('*0  A2!bC*/\.'));