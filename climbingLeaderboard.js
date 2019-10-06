// Sample input 
// [100, 100, 50, 40, 40, 20, 10]
// scores: [5, 25, 50, 120] 

// sample output 
// [6, 4, 2, 1]

const findRanks = (allScores) => {
    let curHighestScore = Infinity;
    let ranks = [];
    let rank = 0;

    for(let i = 0; i<allScores.length; i++){
        curNumber = allScores[i]
        if(curNumber !== curHighestScore){
            rank ++
            ranks.push(curNumber)
            curHighestScore = allScores[i]  
        }
    }
    return ranks
}

const leaderBoard = async(allScores, player) => {
    let curNumber;
    let ranks = [];
    let scores =  await findRanks(allScores)
    
    for(let j=0; j<player.length; j++){
       
        for(let i=0; i<scores.length; i++){
            curNumber = scores[i]

           if(player[j] > curNumber || player[j] === curNumber){ //handles when players score is greater than another score or if the score is the same in the leaderboard
                ranks.push(i + 1)
                break;
           }else if(i === scores.length - 1){ //only if its last place
                ranks.push(i + 2) 
                break;
           }
        }
    }
    return ranks
}   
const res = leaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
res.then(result => { console.log(result) })









