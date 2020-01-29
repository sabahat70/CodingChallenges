var pile = [4000, 10000 , 9999,2];


const answer = (pile) =>{

if (pile.length !==0){
 	pile = pile.sort(function(a, b){return a-b}); // for big numbers this sort is better
 	console.log(pile);

 	var alpha = pile.pop();

    while (pile[pile.length-1] === alpha)
         pile.pop();
    
    if(pile.length === 0)
        return 0;
    else
        return pile.pop();
}
return 0;
}


console.log(answer(pile));