// () ( () => 1
// )()( => 2
// ()()() => 0

const matching = (str) => {
    let left = 0
    let right = 0

    for(let char in str){
        if(str[char] === ')'){
            if(left > 0){
                left --
            }else{
                right ++
            }
        }else{
            left ++
        }
    }

    return right + left
}
console.log(matching(')()('))