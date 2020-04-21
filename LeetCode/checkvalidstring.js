var checkValidString = function(s) {

	let bracketStack = [];
	let starStack =[];


	for(let i=0; i<s.length;i++)
	{
	
		if(s[i]==='(')
		{
			bracketStack.unshift([s[i]);
		}
		else if (s[i]==='*')
		{
			starStack.unshift(s[i]);
		}
		else if(s[i] === ')' && bracketStack.length > 0)
		{
			
			bracketStack.shift();
		}
		else if(s[i] ===')' && bracketStack.length === 0 && starStack.length === 0)
		{
			bracketStack.unshift(s[i]);


		}
		else if(s[i] === ')' && starStack.length > 0){
			starStack.pop();
		}

		//console.log(bracketStack)
		//console.log(starStack);
		
	}

	//if (bracketStack.length === starStack.length )
	//	return true
	//else 
	if(bracketStack.length === 0)
		return true
	else 
		return false
    
};
console.log(checkValidString('(*))')) //true
console.log(checkValidString('(*()))(*')) //true
console.log(checkValidString("(((******))")) //true
console.log(checkValidString('(*)')) //true
console.log(checkValidString("**(((*"))//false