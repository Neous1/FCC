function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var x = [];
   x = arr.splice(arr,howMany);
   console.log(x);
      console.log(arr);
  return arr;
}

slasher([1, 2, 3], 1);
