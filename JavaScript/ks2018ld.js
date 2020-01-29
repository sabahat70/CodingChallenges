//Lucky Dip

var names = ["zzzzz","yyyyy","xxxxx","wwwww"];

var newName = ['z','z','z','z','z'];

for(var i = 0; i < names.length; i++ ){

	var name = names[i];
	for(var j = 0; j < name.length;j++ ){

		if (newName[j].charCodeAt(0) === name.charCodeAt(j)){
		
			var value = newName[j].charCodeAt(0) - 1;
			if (value !== 96)
				newName[j] = String.fromCharCode(value);
			
		}

	}
}

console.log(newName.toString().replace(/,/g, ''));