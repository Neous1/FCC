
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(Boolean);
  

  return newArr;
}

bouncer([7, "ate", "", false, 9]);
