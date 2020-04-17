var stringShift = function(s, shift) 
{
	let leftshifts = 0;
	let rightshifts = 0;
	let length = s.length;

	for(let i = 0; i < shift.length; i++)
	{
		if (shift[i][0] === 0) leftshifts+= shift[i][1];

		else if(shift[i][0] === 1) rightshifts+= shift[i][1];
	}
	
	if (leftshifts === rightshifts) return s;

	else if (rightshifts > leftshifts)
	{
		let difference = rightshifts - leftshifts;
		
		while(difference>0)
		{
			s = s.slice(length-1)+s.slice(0,length-1);
			difference--;
		}

		return s;

	}
	else if (leftshifts > rightshifts)
	{
		let difference = leftshifts - rightshifts;

		while(difference>0)
		{
			s = s.slice(1,length)+s.slice(0,1);
			difference--;
		}

		return s
	}
    
};

console.log(stringShift("abcdefg",[[1,1],[1,1],[0,2],[1,3]]))
console.log(stringShift("abc",[[0,1],[1,2]]));
console.log(stringShift("wpdhhcj",[[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]))


