"use strict";

const numJewelsInStones = function(jewels, stones) {
    let stoneMap = new Map();
    
    stones.split('').forEach(stone => {
        if(!stoneMap.has(stone)){
            stoneMap.set(stone, 1);
        } else {
            stoneMap.set(stone, stoneMap.get(stone)+1);
        }
    });

    let count = 0;

    jewels.split('').forEach(jewel => {
        count += stoneMap.get(jewel) || 0;
    });

    console.log(count);

    console.log(stoneMap);
};

numJewelsInStones("ba", "aaAAbbbb");