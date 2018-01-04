var divider =
  function() {
    function divide(a, b, replace) {
      var oper = require('./Execute.js');
      function inner_divide(a, b) {
        /**
         * inner_subtract.shuffle is set by the execute function of operation
         */
        if (inner_divide.shuffle) {
          return (b / a);
        } else {
          return (a / b);
        }
      }
      return oper.execute(a, b, replace, inner_divide);
    }
    return {
      divide: divide
    }
  };
module.exports = divider();
