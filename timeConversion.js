// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

const timeConversion = (time) => {
    let converted;
    let hour = time.slice(0, 2)
    let min = time.slice(3, 5)
    let sec = time.slice(6, 8)
    let timeOfDay = time.slice(8 , 10)   

    if(timeOfDay === 'AM'){
        if(hour === '12'){
            return `00:${min}:${sec}`
        }else{
            return time.slice(0, 8);
        }
    }else if(timeOfDay === 'PM'){
        if(hour === '12'){
            return time.slice(0, 8);
        }else{
            converted = (Number(hour) + 12).toString()
            return `${converted}:${min}:${sec}`
        }
    }
}
const res = timeConversion("06:40:03AM")
console.log(res)

