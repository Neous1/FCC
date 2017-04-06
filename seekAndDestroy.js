
function destroyer(arr) {
  // Remove all the values
  
  var arr2 = []; //To be removed

  var args = Array.prototype.slice.call(arguments);

for(var i = 1; i < arguments.length; i++) {
  
  arr2.push(arguments[i]);
}

  function removeNum(value) {
    
    for(var i = 0; i <= arr2.length; i++)
    {
    
    if(value === arr2[i]) {
      
      return false;
    } 
    
  }
  
  return true;
  }
  
    console.log(args);
    console.log('Target array: ', arr);
    console.log('To be removed: ', arr2);
    return arr.filter(removeNum);

}

destroyer([1, 2, 3, 1, 2, 7], 7, 2, 1);
