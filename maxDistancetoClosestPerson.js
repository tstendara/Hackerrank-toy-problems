// Input: [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.


// Input: [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat, the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.

//find the dist to the left =  3
//find the dist to the right = 5

// find greatest distance from one 1 to another 1 and store it 


const maximizeDist = (seats) => {
    let storage = new Map() 
    let start = 0
    let count = 0
    
    if(seats.length === 0){
        return 'invalid'
    }

    for(let i=0; i<seats.length; i++){
        if(seats[i - 1] === 1 && seats[i] === 0){ // starts count and holds on to start ind
            
            if(!storage.has(i)){
                start = i
                count = i
            }

        }else if(seats[i] === 0){ // keeping track of sequential order of indices   
            if(count + 1 === i){
                count ++
            }

        } else { 
            if(i > start ){ // once i > start, then store with the key, end index - start index => [ start index, end index ] 
                storage.set(i - start,[start, i] )
                start = 0
            }
        }
    }
   
    if(start > 0){  // accounting for if there is no i before the end of the arr
        storage.set(seats.length - start, 'end')
    }

    if(storage.size === 0){  // if no seats are not found
        return 'invalid'
    }
    
    let max = 0
    for(let k of storage.keys()){ // getting max dist in map
        if(k > max){
            max = k
        }
    }

    let key = storage.get(max)

    if(key === 'end'){
        return seats.length - 1
    }

    if(key[0] === 0){ // accounting for when seats are: 0 0 0 1 
        return 0
    }
    console.log(storage, max)
    return key[0] + Math.round(max/2) - 1
}

// console.log(maximizeDist([1, 0, 0, 0])) => 3
// console.log(maximizeDist([1, 0, 0, 0, 1, 0, 1])) 
// console.log(maximizeDist([0, 1])) => 0
// console.log(maximizeDist([1, 0, 0, 0, 0, 0, 1])) => 3
// console.log(maximizeDist([0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1])) => 0
// console.log(maximizeDist([1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1])) 