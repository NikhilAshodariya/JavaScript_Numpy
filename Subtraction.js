var oper = require('./Execute.js');

var subtractor = (
  function() {
    function subtract(a, b, replace) {
      function inner_subtract(a, b) {
        /**
         * inner_subtract.shuffle is set by the execute function of operation
         */
        if (inner_subtract.shuffle) {
          return (b - a);
        }
        return (a - b);
      }
      return oper.execute(a, b, replace, inner_subtract);
    }
    return {
      subtract: subtract
    }
  }
);
module.exports = subtractor();
