// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

const coinChange = (arr, total) => { 
    let coins = 0

    for(let i=arr.length-1; i>=0; i--){
        x = Math.trunc(total / arr[i]);

        coins += x
        total -= x * arr[i]

        if(coins === 0 && i === 0 && arr[i] > total){
            return 0
        }
    }
    if(total !== 0) { 
        return -1 
    }

    return coins 

}
const res = coinChange([2], 1)
console.log(res)