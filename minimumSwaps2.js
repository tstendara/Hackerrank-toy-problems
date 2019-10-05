// Minimum Swaps 2 
// Sample Input
// 4 3 1 2

// Sample Output 
// 3

const swaps = (arr) => {
    let count = 0;
    let modified = true;
    let correctLocation;
    let curNumber;
    let temp;
    
    while(modified){
        modified = false
        for(let i=0; i<arr.length; i++){
            curNumber = arr[i]
            correctLocation = arr[arr[i] - 1]

            if(curNumber !== correctLocation){
                
                temp = arr[arr[i] - 1]
                arr[arr[i] - 1] = arr[i]
                arr[i] = temp
                count ++
                modified = true
            }
        }
    }
    
    return count;
}
const res = swaps([4, 3, 1, 2])
console.log(res)







