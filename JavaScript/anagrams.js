var wordList = ["bread","spear","dearb","beard","hello", "saber","debar","count"];

var hashMap = {};

function sortStringCharacters(string){

	var charArr = string.split("");
	charArr.sort();
	
	return charArr.join("");
}


wordList.forEach((word) => {

	var key = sortStringCharacters(word); //the key is sorted characters
	var anagramList = hashMap[key]; //get the list of anagrams from the key

	if (anagramList === undefined) // if there is no list, make an empty list
		anagramList = [];
	anagramList.push(word); // add the word in the list 
	hashMap[key] = anagramList; // then add the key value pair in the hashMap
});


console.log(hashMap);