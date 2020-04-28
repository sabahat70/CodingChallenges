var maximalSquare = function(matrix) {
    
    if (matrix.length === 0) return 0;
    let max = 0;
    let Array2d = (m,n) => [...Array(m)].map( e=> Array(n).fill(0));
    let DP = Array2d(matrix.length + 1, matrix[0].length + 1);

    for(let i = 1; i <= matrix.length; i++)
    {
    	for (let j = 1; j <= matrix[0].length; j++)
    	{	
    		if(matrix[i-1][j-1] === '1')
    		{
    			DP[i][j] = 1 + Math.min(DP[i-1][j],DP[i-1][j-1],DP[i][j-1]);
    			
    			if (DP[i][j]> max) max = DP[i][j]
    		}
    	} 
    	 
    }
    return max*max;
};


console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))


