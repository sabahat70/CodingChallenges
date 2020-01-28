function truthCheck(collection, pre) {
  // Is everyone being true?
  for(let i = 0; i < collection.length; i++){

  	console.log(collection[i].pre) // gives undefined because pre is a string and translates into collection[i]."sex". If it is collection[i].sex then it will work
    if (!collection[i][pre])
     return false;
   
  }
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));