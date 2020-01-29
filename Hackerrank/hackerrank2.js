

var names = ["ready","stedy","zebra"];
var maxChar ='a';
names.forEach(function(name){
	name.split("").forEach(function(char){
		if(char > maxChar)
			maxChar = char;
	});
	
});

var lexCharCode = maxChar.charCodeAt(0);
var lexChar = "";
if (lexCharCode === 122){
	
	lexChar = String.fromCharCode(lexCharCode);
}
else{
	var code = lexCharCode + 1;
	 lexChar = String.fromCharCode(code)
}



var newName = [lexChar,lexChar,lexChar,lexChar,lexChar];


for(var i = 0; i < names.length; i++ ){
	
	var name = names[i];
	for(var j = 0; j < name.length;j++ ){
			
		if (newName[j].charCodeAt(0) === name.charCodeAt(j)){
		
			var value = newName[j].charCodeAt(0);
			if (value > 96 && value < 122)
				newName[j] = String.fromCharCode(value + 1);
			else if(value ===122)
				newName[j]= String.fromCharCode(value - 1);

		}

	}
}

console.log(newName.toString().replace(/,/g, ''));

