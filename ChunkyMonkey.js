
function chunkArrayInGroups(arr, size) {
  // Break it up.
//   debugger;
  var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
  console.log(newArr);
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);