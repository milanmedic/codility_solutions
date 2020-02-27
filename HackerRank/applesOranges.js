"use strict";

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    function calculate(houseStart, houseEnd, treePosition, fruitArr){
        let count = 0
        for(let i = 0; i < fruitArr.length; i++){
            if((treePosition+fruitArr[i]) >= houseStart && (treePosition+fruitArr[i]) <= houseEnd){
                count++;
            }
        }
        return count;
    }

    let appleCount = calculate(s, t, a, apples);
    let orangeCount = calculate(s, t, b, oranges);
    console.log(appleCount + ' ' + orangeCount);
}

countApplesAndOranges(7,10, 4, 12, [2,3,-4], [3,-2,-4]);
