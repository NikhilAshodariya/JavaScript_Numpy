var oper = require('./Operation.js');

var subtractor = (
  function() {
    function subtract(a, b, replace) {
      function inner_subtract(a, b) {
        return a - b;
      }
      return oper.operation(a, b, replace, inner_subtract);
    }
    return{
      subtract:subtract
    }
  }
);
module.exports = subtractor();
