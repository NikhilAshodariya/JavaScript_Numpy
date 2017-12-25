var oper = require('./Execute.js');
var power = require('./Power.js');
var exponent = (
  function() {

    function exp(a) {
      return power.power(2.71828,a);
    }

    return {
      exp: exp
    }
  }
);
module.exports = exponent();
