function addTogether() {
  
  if (typeof arguments[0]==="number"){
    
    if (arguments.length === 1){
      let x = arguments[0];
        return function(y){
          if (typeof y === "number")
            return x + y;
          else return undefined;
        };
    }
    else if (typeof arguments[1] === "number"){
      return arguments[0] + arguments[1];
    }
      else return undefined;
        
   
  } 
 
}
 


console.log(addTogether(1)([3]))