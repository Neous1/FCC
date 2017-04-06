
function getIndexToIns(arr, num) {
  
  console.log(arr);
  console.log(num);
  
  arr.push(num);

    arr.sort(function(a, b) {
  return a - b;
});  
    console.log(arr);
      console.log (arr.indexOf(num));
//     return (arr);

     return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35);