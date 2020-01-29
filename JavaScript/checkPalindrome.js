var string = "appe"

function isPalindrome(string){
	var charCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for (var i = 0; i < string.length; i++){
		var index = string.charCodeAt(i) - 97;
		charCounts[index] = charCounts[index] + 1
	}
	
	var odd = 0;
	
	for (var i = 0; i < charCounts.length; i++){
		if (charCounts[i] & 1 === 1)
			odd++;
		
		if (odd > 1)
			return false;

	}

	return true;

}


console.log(isPalindrome(string));
