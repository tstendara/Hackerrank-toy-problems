// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 

const longestSubstr = (str) => {
    let combos = []
    let letters = ''
    let greatest = ''

    if(str.length === 1){
        return str[0].length
    }else if(str.length === 0){
        return 0
    }

    for(let i=0; i<str.length; i++){
        
        if(!letters.includes(str[i])){
            letters += str[i]
        }else{
            combos.push(letters)
            letters = ''
            letters += str[i]
        }
    }

    if(letters !== ''){
        combos.push(letters)
    }

    if(combos.length === 1){
        return combos[0].length
    }else if(combos.length === 0){
        return 'error, found no substring'
    }

    for(let cur in combos){
        if(combos[cur].length > greatest.length){
            greatest = combos[cur]
        }
    }
    
    return greatest
    
}
const res = longestSubstr('aab')
const res1 = longestSubstr('pwwke')
const res2 = longestSubstr('bbbbb')
const res3 = longestSubstr('abcabcbb')
console.log(res, res1, res2, res3)
