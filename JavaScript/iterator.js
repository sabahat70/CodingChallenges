var regex1 = new RegExp('foo', 's');

console.log(regex1.dotAll);
// expected output: true

var regex2 = new RegExp('bar', 'i');

console.log(regex2.global);
// expected output: false
