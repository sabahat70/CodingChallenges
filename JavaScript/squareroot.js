
var isPerfectSquare = function(num) {
    
    let start = 1;
    let end = num;
    let answer;
    
    while(true)
    {
        let midpoint = parseInt((start+end)/2);
        let product = midpoint * midpoint;
        
        if (product === num)
        {
            answer = midpoint;
            return answer;
        }
        
        else if( product > num )
        {
            end = midpoint - 1;
        }
        else start = midpoint + 1;
        
        if (start > end)
        {
            answer = -1;
            return answer;
        }
    }
    
};

console.log(isPerfectSquare(25));