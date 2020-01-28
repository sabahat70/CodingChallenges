function convertHTML(str) {
  // &colon;&rpar;
  let newString = [];

  str.split("").forEach(ch => {
    switch(ch){
      case '&': newString.push("&amp;");
      break;
      case '"': newString.push("&quot;");
        break;
      case '<': newString.push("&lt;");
      break;
      case '>':  newString.push("&gt;");
      break;
      case '\'' : newString.push("&apos;");
      break;
      default: newString.push(ch);
      break;
    }
  });
  console.log(newString.join(""));
  
}

function convertHTML2(str){

  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  };

  
 
  return str.replace(/[&<>\"']/g, match => htmlEntities[match]);
  

  // the g means Global and causes the replace call to replace all matches, not just the first one
  // () is a capturing group which capture the text matched into a numbered group that can be reused with a numbered backreference
  //     match in this case
  //[] character set which tells the regex to match only one characters in the set
}

convertHTML('Stuff in "quotation marks"');

console.log(convertHTML2('Stuff in "quotation marks" & commas'));





'abc12345#$*%'.replace(/(?<nondigits>[^\d]*)(?<digits>\d*)(?<nonalphanumerics>[^\w]*)/,(match, p1, p2, p3, offset, string) => {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics

    console.log(match,p1,p2,p3);
  });

'2015-01-02'.replace(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/, (match, year, month, day, index, originalString) => {
  console.log(match, year, month, day, index, originalString)});



