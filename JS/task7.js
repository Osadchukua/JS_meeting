const nums = [-90, 45, 0, 16, -18, 24, -67, 43];

function calculatePositiveNegative(param) {
    return param.reduce((acc, item) => {
        if (item > 0) {
            return {
                ...acc,
                pos: acc.pos + item
            }
                    }  
                    return {
                ...acc,
                neg: acc.neg + item
            }

    },{pos:0, neg:0})
}


console.log(calculatePositiveNegative(nums));