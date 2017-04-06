
function largestOfFour(arr) {
//   debugger;
  // You can do this!
    var max = []; 

for(var i=0; arr.length>i; i++ ){
   var newArr = arr[i];
   var largest = Math.max.apply(Math, newArr);
   max.push(largest);

   }
return max;
  
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
