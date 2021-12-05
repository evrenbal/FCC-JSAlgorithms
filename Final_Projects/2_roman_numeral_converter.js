function convertToRoman(num) {
  return num.toRoman();
} 

Number.prototype.toRoman = function () {

  const CONVERSION = {
    'M'  : 1000,
    'CM' : 900,
    'D'  : 500,
    'CD' : 400,
    'C'  : 100,
    'XC' : 90,
    'L'  : 50,
    'XL' : 40,
    'X'  : 10,
    'IX' : 9,
    'V'  : 5,
    'IV' : 4,
    'I'  : 1,
  }
  
  let roman = '';
  let number = this;
  for (let x in CONVERSION) {
    roman += x.repeat(Math.floor( number/parseInt( CONVERSION[x] ) ) )
    number %= parseInt(CONVERSION[x]);
    if (number == 0) break;
  }
  return roman;
 }

 convertToRoman(36);