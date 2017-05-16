
function smallestCommons(arr) {

  var product;
  var arrayRange = [];
  
  
  //logic to deter largest
  var small;
  var largest;
  var large ;
  
  if (arr[0]<arr[1]){
  large = arr[1];  
  largest = arr[1];
  small = arr[0];
  }
  else {
      large = arr[1];
  largest = arr[0];
  small = arr[1];
  
  }
  var mastArr = [];
  var factorial ;

  if (large === 0){
    return 1;
  }
  for (var i = large -1; i >=1; i--){
      console.log(i);
       factorial = large *= i;
  }     
  
    for(small; small < large+1; small++){
       arrayRange.push(small);
       }
      

  for (var m = 0; m<largest; m++){
    // console.log("initial large", largest)
    var range = factorial / arrayRange[m];  
    for (var j = 1; j <= range; j++){
          for(var k = 1; k<=j; k++){
             product = j * arrayRange[m];
 
      }
        mastArr.push(product);  
        mastArr.sort();  
        
    }

   }
   var DupArr = [];
  console.log(mastArr.length);
  // for(var z = 0; z < mastArr.length; z++){
  //   if(mastArr[z] === mastArr[z+1]){
  //     DupArr.push(mastArr[z]);
      
  //   }

  // }
return mastArr;

}

 smallestCommons([1,5]);
