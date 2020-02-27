"use strict"

// CORRECT BUT INEFFICIENT
/*const solution = (seq, p, q) => {
    let impFactArr = calculateImpactFactors(seq)
    let result = []
    
    for(let i = 0; i < p.length; i++){
        let seqSlice = impFactArr.slice(p[i], q[i]+1)
        seqSlice.sort()
        result.push(seqSlice[0])
    }
    return result
}
function calculateImpactFactors(seq){
    let retVal = []
    for(let i = 0; i < seq.length; i++){
        switch(seq[i]){
            case 'A':
                retVal.push(1)
                break
            case 'C':
                retVal.push(2)
                break
            case 'G':
                retVal.push(3)
                break
            case 'T':
                retVal.push(4)
                break
            default:
                break
        }
    }
    return retVal
}*/

// EFFICIENT SOLUTION
const solution = (seq, p, q) => {
    let result = []

    for(let i = 0; i < p.length; i++){
        let seqSlice = seq.slice(p[i], q[i]+1)
        if(seqSlice.indexOf('A') != -1){
            result.push(1)
        }
        else if(seqSlice.indexOf('C') != -1){
            result.push(2)
        }
        else if(seqSlice.indexOf('G') != -1){
            result.push(3)
        }
        else if(seqSlice.indexOf('T') != -1){
            result.push(4)
        }
    }
    return result
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]))