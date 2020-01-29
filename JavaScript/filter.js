//filter.js

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6 ); //ES6 syntax

const res = words.filter(word => { return word.length > 6 });

var numbers = [1,2,3,5,31,6,8,9];

var lucky = numbers.filter( function(number) { return number > 7});

var luck = numbers.filter( number =>  number > 7);
//var luck = numbers.filter( number => return number > 7); //This will not work
// var luck = numbers.filter( number => {return number > 7}); This will work;



console.log(result);
console.log(res);

console.log(lucky);
console.log(luck);


//trying to figure out syntax abnormalities!

//including curly braces requires the use of return statement 

