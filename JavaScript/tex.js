function replaceQuotation(str){
	
	let newstr = "";
    let length = str.length;
    const replace = ["``","''"];
    let count = 0;
   

    for(let i = 0; i < length; i++){

    	if(str[i] === '"'){
    		newstr = newstr.concat(replace[count%2]);
    		count++;
    	}else{
    		newstr = newstr.concat(str[i]);
    	}
    }

    console.log(newstr);
}

replaceQuotation("\"To be or not to be,\" quoth the Bard, \"that  is the question\".The programming contestant replied: \"I must disagree. To `C' or not to `C', that is The Question!\"");