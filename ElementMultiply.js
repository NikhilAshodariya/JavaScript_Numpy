var oper = require('./Execute.js');

var multiplier = (
  function() {
    function multiplyFunction(a, b, replace) {
      function inner_multiplyFunction(a, b) {
        return a * b;
      }
      return oper.execute(a, b, replace, inner_multiplyFunction);
    }
    return{
      ElementMultiply:multiplyFunction
    }
  }
);
module.exports = multiplier();
