/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 const firstNonRepeatedCharacter = (str) => {
    let storage = {}
    let arr = str.split('')

    arr.forEach((str) => {
        storage[str] = storage[str] + 1 || 1 // if storage[num] is there than it will + 1, if not, it will just = 1
    })
    
    for(let i=0; i<str.length - 1; i++){
        if(storage[str[i]] !==undefined && storage[str[i]] === 1){
            return str[i]
        }
        
    }
 }
 const res = firstNonRepeatedCharacter('ABA')
 console.log(res)