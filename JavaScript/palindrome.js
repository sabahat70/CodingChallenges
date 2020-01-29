function isPalindrome(word){

	var i = 0;
	var j = word.length - 1;
	var isPalindrome = true;

	while ( i <= j){

		if (word[i]!==word[j]){
			isPalindrome = false;
			break;
		}
		i++;
		j--;
	}
	return isPalindrome;
}


console.log(isPalindrome("abcdba"));