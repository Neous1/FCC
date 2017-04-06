function convertToRoman(num) {
  
  var converted = [];
  
  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimalEquiv = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  for(var i = 0; i < decimalEquiv.length; i++) {
    
    while(num >= decimalEquiv[i]) {
    
      num -= decimalEquiv[i];
      console.log(num);
      converted.push(romanNum[i]);
      
    }
    
  }
    console.log('converted: ', converted.join(''));
    return converted.join('');
  
}

convertToRoman(74);
