// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

const leftRotation = (arr, rotations) => {
    let placeHolder;

    for(let i=0; i<rotations; i++){
        placeHolder = arr.shift()
        arr.push(placeHolder);
    }

    return arr;
}
const res = leftRotation([1, 2, 3, 4, 5], 4)
console.log(res)