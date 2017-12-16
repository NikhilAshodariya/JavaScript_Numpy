var oper = require('./Execute.js');

var adder = (
  function() {
    function add(a, b, replace) {
      function inner_add(a, b) {
        return a + b;
      }
      return oper.execute(a, b, replace, inner_add);
    }
    return{
      add:add
    }
  }
);
module.exports = adder();
