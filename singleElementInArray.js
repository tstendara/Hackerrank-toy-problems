// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10

// O(n + m) => O(n)

var singleNonDuplicate = function(nums) {
    let storage = {}
    
    for(let i=0; i<nums.length; i++){
        if(storage[nums[i].toString()] !== undefined ){
            storage[nums[i].toString()] += 1
        } else {
            storage[nums[i].toString()] = 1
        }
    }

    for(let cur in storage){
        if(storage[cur] === 1){
            return cur
        }
    }
    return 'invalid'
};
const res = singleNonDuplicate([1,1,2,3,3,4,4,8,8,0,0])
console.log(res)


// const single = (nums) => {

//     if(nums.length === 1){
//         return nums[0]
//     }

//     if(nums.length === 0){
//         return undefined
//     }

//     for(let i=0; i<nums.length - 1; i += 2){
//         if(i === 0 && nums[0] !== nums[1]){
//             return nums[0]
//         }

//         if(nums[i] !== nums[i + 1]){
//             return nums[i]
//         }
//     }
//     return nums[nums.length - 1]
// }
