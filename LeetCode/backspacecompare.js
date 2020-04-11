var backspaceCompare = function(S, T) {
	let stack = [];
	let Sarray = S.split("");
	let Tarray = T.split("");

	for (let i = 0; i < Sarray.length; i++)
	{
		if (Sarray[i] != '#')
			stack.unshift(Sarray[i]);
		else
			stack.shift();
	}

	let newS = stack.join("");
	stack = [];

	for (let i = 0; i < Tarray.length; i++)
	{
		if (Tarray[i] != '#')
			stack.unshift(Tarray[i]);
		else
			stack.shift();
	}
	
	let newT = stack.join("");

	return newS === newT;
    
};


console.log(backspaceCompare('ab#c','ad#c'));
console.log(backspaceCompare('ab##','c#d#'));
console.log(backspaceCompare('a#c','b'));
console.log(backspaceCompare('a##c','#a#c'));
