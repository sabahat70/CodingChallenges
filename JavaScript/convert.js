function convertHTML(str) {
  // &colon;&rpar;
  const convert = {
    "&" : "&​amp;",
    "<" : "&​lt;",
    ">" : "&​gt",
    "'" : "&​apos;"
  }
  var convertedStr ="";
  for (let i = 0 ; i<str.length ; i++) {


   if(convert.hasOwnProperty(str[i])) {
   
   console.log(convert[str[i]]);
   convertedStr = convertedStr + convert[str[i]];
   console.log(convertedStr);

   } else {
    
     convertedStr = convertedStr + str[i];
   }



   

}
  return convertedStr;
}


console.log(convertHTML("Dolce & Gabbana"));