function wordCount(string){
	
	let arrString = string.split(",");
	let words = {};

	for (let i =0; i <arrString.length; i++){
		if(words[arrString[i]]){
			words[arrString[i]] = words[arrString[i]] + 1;
		}
		else
			words[arrString[i]] = 1;
	}
	let index = Math.floor(Math.random() * arrString.length);

	return words;
}


console.log(wordCount("hi,sam,hi,bye"));