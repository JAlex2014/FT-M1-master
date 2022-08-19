'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  for (var i = 0; i<num.length; i++){
   suma = suma + (parseInt(num[i]) * Math.pow(2,(num.length-1-i))) ;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var string = "";
  var cociente = num;
  for (var i = 0; cociente > 0; i++){
    string= string + String(cociente%2);
    cociente = Math.floor(cociente/2);
  }
  return string.split('').reverse().join('');
}
  console.log(DecimalABinario(10));


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}