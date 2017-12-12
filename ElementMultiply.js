var oper = require('./Operation.js');

var multiplier = (
  function() {
    function multiplyFunction(a, b, replace) {
      function inner_multiplyFunction(a, b) {
        return a * b;
      }
      return oper.operation(a, b, replace, inner_multiplyFunction);
    }
    return{
      ElementMultiply:multiplyFunction
    }
  }
);
module.exports = multiplier();
