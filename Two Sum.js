// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const TwoSum = (arr, target) => {
    const solutions = []
    const hashTable = {}

    for(let i = 0; i<arr.length; i++){
        
        let sumMinusElement = target - arr[i]

        if(hashTable[sumMinusElement.toString()] !== undefined){
            solutions.push([hashTable[sumMinusElement.toString()], i])
        }

        hashTable[arr[i].toString()] = i

    }
    return solutions
}
const res = TwoSum([2, 7, 11, 15], 9)
console.log(res)

