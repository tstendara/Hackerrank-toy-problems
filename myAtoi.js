// Example 1:

// Input: "42"
// Output: 42

// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
//              Then take as many numerical digits as possible, which gets 42.

const myAtoi = (str) => {
    let newStr = ''
    
    if(Number(str[0]) !== Number(str[0]) && str[0] !== '-'){ //checking to see if the first position is a letter or a - sign
        return 0
    }

    for(let i=0; i<str.length; i++){
        if(str[i] !== ' '){
            newStr += str[i]
        }else{
            break;
        }
        
    }

    return newStr
    
}
const res = myAtoi('915 and words')
console.log(res)