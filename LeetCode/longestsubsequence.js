var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    let Array2d = (m,n) => [...Array(m)].map( e=> Array(n).fill(0));
    let DP = Array2d(m+1, n+1);


    for(let i = 1; i <= m; i++){

    	for(let j = 1; j <= n ;j ++) {

    		if (text1[i-1] === text2[j-1]){
    
    			DP[i][j] = 1 + DP[i-1][j-1];
    			
    		}
    		else
    			DP[i][j] = Math.max(DP[i-1][j],DP[i][j-1]);
    		
    	}
    }

    return DP[m][n];
};

console.log(longestCommonSubsequence('abcde','ace'));
console.log(longestCommonSubsequence('abc','abc'));
console.log(longestCommonSubsequence('abc','def'));

