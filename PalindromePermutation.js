// Example 1:
// Input: "code"
// Output: false

// Example 2:
// Input: "aab"
// Output: true

// Example 3:
// Input: "carerac"
// Output: true

const possiblePalindrome = (str) => {
    let storage = {}
    let total = 0
    
    function isOdd(num){
        if(num % 2 !== 0){
            return true
        }
    }

    for(let char in str){
        if(storage[str[char]] !== undefined){
            storage[str[char]] ++
            total ++
        } else {
            total ++
            storage[str[char]] = 1
        }
    }

    if(isOdd(total)){
        // can only have 1 number that is odd
        let numberOfOdd = 0

        for(let char in storage){
            if(isOdd(storage[char])){
                numberOfOdd ++
            }

            if(numberOfOdd > 1){
                return false
            }
        }

        return true
        
    }else{
        for(let char in storage){
            if(isOdd(storage[char])){
                return false
            }
        }
        
        return true
    }
}
const res = possiblePalindrome('carerac')
console.log(res)