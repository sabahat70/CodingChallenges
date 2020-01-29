var count = 0;

function cc(card) {
// Only change code below this line
switch(card){
case 2:
count++;
break;
case 3:
count++;
break;
case 7:
count;
break;
case 'K':
count--;
break;
case 'A':
count--;
break;
}
// Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));
console.log(count);