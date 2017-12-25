var oper = require('./Execute.js');

var power = (
  function() {
    function power(a, b, replace) {
      function inner_power(a, b) {
        /**
         * inner_power.shuffle is set by the execute function of operation
         */

        if (inner_power.shuffle) {
          return Math.pow(b, a);
        }
        return Math.pow(a, b);
      }
      return oper.execute(a, b, replace, inner_power);
    }
    return {
      power: power
    }
  }
);
module.exports = power();
