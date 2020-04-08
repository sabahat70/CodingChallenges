var groupAnagrams = function(strs) {
    let set = {};
    let arr = [];

    for(let i = 0; i < strs.length; i++){
    	let sortedWord = strs[i].split('').sort().join('');
  		if(!set[sortedWord]){
    		set[sortedWord] = [];
    		set[sortedWord].push(strs[i])
  		}
    	else
    		set[sortedWord].push(strs[i]); 	
    }

    for (let key in set){
    	arr.push(set[key]);
    }
    return arr;
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));