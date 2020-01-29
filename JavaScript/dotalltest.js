var str1 = 'bar\nexample foo example'; 

var regex1 = new RegExp('bar.example','s');

console.log(str1.replace(regex1,'')); // Output:

var str2 = 'bar\nexample foo example';

var regex2 = new RegExp('bar.example');

console.log(str2.replace(regex2,''));