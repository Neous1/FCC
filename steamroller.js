
function steamrollArray(arr) {
  
  var newArr = [];
  // console.log(newArr);
  check(arr);
  
  function check (arr){
    arr.forEach(function(item){
      if(!Array.isArray(item)){
        console.log(item);
        newArr.push(item);
        console.log(newArr);
      }
      else{
        check(item);
      }
    });
  }
  // I'm a steamroller, baby
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);











