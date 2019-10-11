


const convertToInteger = (num) => {
    const roman = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I': 1,
    
    }
    let result = ''

    for(let key in roman){
        if(num >= roman[key]){
            let divisor = Math.trunc(num / roman[key])
            result += key.repeat(divisor)
            num -= roman[key] * divisor
        }
    }
    return result
}
const res = convertToInteger(3)
console.log(res)