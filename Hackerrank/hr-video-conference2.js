
var names = ["alvin","alice","alvin"];


var map = {};
var userNames = [];

for (var i = 0; i < names.length; i++){

	var name = names[i];
	var n = names[i].length;
	var isPushedInArray = false;

	for(var j = 0; j < n; j++){
		var prefix = name.substr(0,j+1);
	
		if (!(prefix in map) && !isPushedInArray) {
			console.log(prefix); //push in userNames array instead
			map[prefix] = 0;
			isPushedInArray = true;
			
		}

		if(!(prefix in map))
			map[prefix] = 0;
		

		
	}

	map[name] += 1;

	if (!isPushedInArray && map[name] === 1)
		console.log(name);
	else if (!isPushedInArray)
		console.log(name + " "+ map[name]);

}

console.log(map);