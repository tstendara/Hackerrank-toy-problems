// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14

const perfectNumber = (target) => {
    let total = 0

    for(let i=0; i<=target/2; i++){
        if(target % i === 0){
            total += i
        }
    }

    if(total === target){
        return true
    }else{
        return false
    }
}
const res = perfectNumber(28)
console.log(res)