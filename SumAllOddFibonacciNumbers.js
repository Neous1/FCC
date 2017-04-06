
function sumFibs(num) {
  var sum = 0, curFib = 1, priorFib = 0;
  
  while(curFib <= num){
    if (curFib % 2 !== 0){
      sum += curFib;
      console.log("sum", sum, "curFib" ,curFib);
    }
    var temp = priorFib; // 3 cups 
    console.log("temp", temp);
    priorFib = curFib;
    console.log("priorFib", priorFib);
    curFib += temp;
    console.log("curFib ", curFib);
    console.log("---");
  }
  

  return sum;
}

sumFibs(4);
