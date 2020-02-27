"use strict";

const maxProfit = (prices) => {
    // BRUTE FORCE
    /*if(prices.length != 0){
        let maxProfit = 0;
        for(let i = 0; i < prices.length - 1; i++){
            for(let j = i + 1; j < prices.length; j++){
                let profit = prices[j] - prices[i];
                if(profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;

    }*/

    //OPTIMIZED SOLUTION
    if(prices.length == 0){
        return 0;
    }

    let minValue = Number.MAX_VALUE;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minValue){
            minValue = prices[i];
        }
        if(prices[i] - minValue > maxProfit){
            maxProfit = prices[i] - minValue;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))