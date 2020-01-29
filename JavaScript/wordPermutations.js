var word = "at";



function getPermutations(string){

	var results = [];

	if(string.length === 1){

		results.push(string);
		return results;
	}

	for (var i = 0; i < string.length ; i++){

		var fchar = string[i];//console.log("fchar:" +fchar);
		var charsLeft = string.substr(0,i) + string.substr(i+1);//console.log("charsLeft:" +charsLeft);
		var innerPermutations = getPermutations(charsLeft); //console.log("inner:" +innerPermutations);
		for(var j = 0; j < innerPermutations.length ; j++){
			results.push(fchar + innerPermutations[j]); //console.log(results);
		}
	}
	return results;
}

getPermutations(word);