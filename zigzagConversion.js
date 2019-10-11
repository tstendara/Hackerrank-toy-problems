// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
const createMatrix = (r) => {
    let x = []

    for(let i=0; i<r; i++){
        x[i] = []
    }
    return x
}

const conversion = (str, rows) => {
    let count = 0;
    let master = []

    let matrix = createMatrix(rows)


    for(let i=0; i<str.length; i++){
        
    }

    console.log(str)
}
// const res = conversion('helloworld', 4)
// console.log(res)

const fizz = () => {

    for(let i=0; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }else if(i % 3 === 0){
            console.log('fizz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
// fizz()