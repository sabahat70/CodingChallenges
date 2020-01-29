var string = " Hello  World  ";


var charArr = string.split("");
console.log(charArr);
var j = 0;

for(var i = 0; i < string.length; i++){

	if (charArr[i] === " "){
		string = string.substr(0,j) + "%20" + string.substr(j+1);
		j = j+2;
	}
	j++;
}
console.log(string);