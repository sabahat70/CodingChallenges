var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>  a - b)

    while (stones.length > 1){
    	let i = stones.length - 1;
    	let difference = stones[i] - stones[i-1];
    	stones.pop()
    	stones.pop()
    
        if (difference > 0){
    		stones.push(difference);
    		stones.sort((a,b) => a - b);
    	}

    	
    }
    
   return stones.length === 1 ? stones[0]: 0;

};

/*var insertInSortedArray = function(arr,val){
    let index = 0;
	for(let i = 0; i < arr.length - 1; i++){
		if (val <= arr[i]){

			index = i;
			break;
		}
		else index = i + 1;
	}

	if(index === 0 &&  val < arr[0]) { 
		arr.unshift(val); 
		return arr;
	}
	else if (index === 0 && val > arr[0]){
		arr.push(val);
		return arr;
	}
	else{
		let newarr= arr.splice(index+1)
	 	newarr.unshift(val);
	 	return arr.concat(newarr);
	}
	
	
	
};*/

//let arr = insertInSortedArray([2],4);
//console.log(arr)
console.log(lastStoneWeight([434,667,378,919,212,902,240,257,208,996,411,222,557,634,425,949,755,833,785,886,40,159,932,157,764,916,85,300,130,278]))
console.log(lastStoneWeight([2,7,4,1,8,1]))