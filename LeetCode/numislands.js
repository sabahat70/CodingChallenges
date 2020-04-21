var numIslands = function(grid) {
    
    let islandCount = 0;

    for(let i = 0; i < grid.length; i++)
    {
    	for(let j = 0; j<grid[i].length; j++)
    	{
    		if(grid[i][j] === '1')
    		{
    			islandCount++;
    			breadthFirstSearch(grid, i, j);
    		}
    	}
    }
    return islandCount;
};

var breadthFirstSearch = function(grid, i ,j){

	if ( i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0')
		return;

	grid[i][j] = '0';

	breadthFirstSearch(grid,i-1,j);
	breadthFirstSearch(grid,i+1,j);
	breadthFirstSearch(grid,i,j+1);
	breadthFirstSearch(grid,i,j-1);
}


console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));