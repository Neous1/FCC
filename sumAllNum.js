function sumPrimes(num) {
  
    function isPrime(x){     
      var d = Math.floor(Math.sqrt(x)); // Math floor is necessary.
      while (d > 1){
        if ((x % d) === 0){
          return false;
                  }
        d--;
      }
      return true;
    }
// console.log("is it prime: ", isPrime(2));
  
  var arr = [];
  for (var i = 2; i <= num; i++){
    // console.log(i);
    if (isPrime(i)){
      arr.push(i);
      // console.log("anything ", i);
      }
    }

  return arr.reduce(function(acc, val) {
    return acc + val;
  },0);
    
}

sumPrimes(10);

