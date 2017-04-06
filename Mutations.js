function mutation(arr) {
var arr1 = arr[0].toLowerCase();
var arr2 = arr[1].toLowerCase();

  for(var i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) === -1){
      return false;
    }
  }
return true;
}
mutation(["hello", "Hello"]);