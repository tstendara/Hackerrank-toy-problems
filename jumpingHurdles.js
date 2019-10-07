// Sample Input 0
// 4
// 1 6 3 5 2

// Sample Output 0
// 2

const hurdleJump = (hurdles, jumper) => {
    let drinks = 0;

    for(let i=0; i<hurdles.length; i++){
        if(jumper < hurdles[i]){
            drinks += hurdles[i] - jumper
            jumper += hurdles[i]
        }
    }
    return drinks
}
const res = hurdleJump([1, 6, 3, 5, 2], 4)
console.log(res)
