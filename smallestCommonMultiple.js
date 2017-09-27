
function smallestCommons(arr) {
    
    var min = Math.min(arr[0], arr[1]),
    max = Math.max(arr[0],arr[1]);
    
    var range = [];
    
    for(var i = min; i <= max; i++){
      range.unshift(i);
    }
   
  
    
    return range.reduce(function(a,b){
      return lcm(a,b);
    });
    
  }
  
  
  function gcd(a, b){
    return !b ? a : gcd(b, a%b);
  }
  
  function lcm(a,b){
    return a *b / gcd(a, b)
  }
  
  
  smallestCommons([1,5]);
  