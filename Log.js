var oper = require('./Execute.js');

var Logarithm = (
  function() {

    function getBaseLog(x, y) {
      /**
       * x is base
       * y is the value of which log is required
       */
      return Math.log(y) / Math.log(x);
    }

    function log10(a, replace) {
      function inner_log(a, b) {
        return Number(getBaseLog(b, a).toFixed(8));
      }
      return oper.execute(a, 10, replace, inner_log);
    }

    function logE(a, replace) {
      function inner_log(a, b) {
        return Number(getBaseLog(b, a).toFixed(8));
      }
      return oper.execute(a, 2.7182818284590452353602874713527, replace, inner_log);
    }

    function log(a, b, replace) {
      function inner_log(a, b) {
        if (inner_log.shuffle) {
          return Number(getBaseLog(a, b).toFixed(8));
        } else {
          return Number(getBaseLog(b, a).toFixed(8));
        }
      }
      return oper.execute(a, b, replace, inner_log);
    }


    return {
      log10: log10,
      logE: logE,
      log: log
    }
  }
);
module.exports = Logarithm();
