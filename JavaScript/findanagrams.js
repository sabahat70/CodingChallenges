var findAnagrams = function(s, p) {

	var indexList = [];
    

	for(let i = 0; i < s.length; i++)
	{
		let temp = p;
		if (temp.indexOf(s[i])>-1)
		{
			if (isAnagram(s,temp.split(''),i)===0)
			{
				indexList.push(i);
	
			}
		}

	}
    return indexList;
};


var isAnagram = function(s,p,i)
{
	
	if ( i < 0 || i > s.length || p.indexOf(s[i]) === -1) 
	
		return p.length;


	let j = p.findIndex( el => el === s[i])
	if (j > -1) p.splice(j,1);
	
		
	return isAnagram(s,p,i+1);

}

console.log(findAnagrams("",""));
