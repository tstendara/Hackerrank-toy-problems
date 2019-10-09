// Example 1:

// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

const dups = (nums) => {
    let cur;
    let count = 0

    for(let i=0; i<nums.length - 1; i++){
        cur = nums[i]
       for(let j=i+1; j<=nums.length; j++){ 
            if(cur === nums[j]){
                count ++
            }else if(count > 0){
                nums.splice(i + 1, count)
                count = 0
            }
       }
    }
    return nums // or return nums.length
}
const res = dups([0,0,1,1,1,2,2,3,3,4])
console.log(res)


