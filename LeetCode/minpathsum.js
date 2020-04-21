var minPathSum = function(grid) {
    
    if (grid.length === 0) return 0;

    let Array2d = (m,n) => [...Array(m)].map( e=> Array(n).fill(0));

    let dp = Array2d(grid.length, grid[0].length);

    for(let i = 0; i < grid.length; i++)
    {
    	for(let j = 0; j < grid[i].length;j++)
    	{
    		dp[i][j] += grid[i][j];
    		if( i > 0 && j > 0)
    		{
    			dp[i][j] += Math.min(dp[i-1][j],dp[i][j-1]);

    		}else if ( i > 0)
    		{
    			dp[i][j] += dp[i-1][j];

    		}else if ( j> 0)
    		{
    			dp[i][j] += dp[i][j -1];
    		}
    	}
    }

    return dp[grid.length-1][grid[0].length - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));