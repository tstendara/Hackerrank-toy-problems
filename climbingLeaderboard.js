// Sample input 
// [100, 100, 50, 40, 40, 20, 10]
// scores: [5, 25, 50, 120] 

// sample output 
// [6, 4, 2, 1]

const leaderBoard = (allScores, player) => {
    let curHighestScore = Infinity;
    let curNumber;
    let ranks = [];
    let rank;

    for(let j=0; j<player.length; j++){
        rank = 0
        curHighestScore = Infinity;

        for(let i=0; i<allScores.length; i++){
            curNumber = allScores[i]
            
            if(curNumber !== curHighestScore){
                rank ++
                curHighestScore = allScores[i] //rank: 1, curhighest = 100
            }

           if(player[j] > curNumber || player[j] === curNumber){ //handles when players score is greater than another score or if the score is the same in the leaderboard
                ranks.push(rank)
                break;
           }else if(i === allScores.length - 1){ //only if its last place
                ranks.push(rank + 1) 
                break;
           }
        }
    }
    return ranks
}   
const res = leaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 125])
console.log(res)



