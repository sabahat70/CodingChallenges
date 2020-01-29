function titleCase(str) {
  var arr = str.split(' ');
  for (var i in arr){
  
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    //or arr[i][0] = arr[i][0].toUpperCase();
  }
   let neww = arr.join(' ')
  console.log(neww);
}

titleCase("I'm a little tea pot");