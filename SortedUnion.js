
function uniteUnique(arr) {
  var newArr = [];
  // console.log(arguments);
  for (var i = 0; i < arguments.length; i++){
     newArr = newArr.concat(arguments[i]);
      // console.log(newArr);
  }
  
  var result = newArr.filter(function(item, index, array){
    return array.indexOf(item) == index;  
    
  });
  console.log(newArr);
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);