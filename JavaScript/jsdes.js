const scoreTracker = {
    score:0,
    incrementScore(){
      return this.score+=1;
    },
    resetScore(){
      return this.score = 0;
    }
}


const {score} = scoreTracker;

console.log(score);
//console.log(incrementScore);
//console.log(incrementScore());