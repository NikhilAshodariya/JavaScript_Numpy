var power = require('./Power.js');
var root = function() {

  function squareRoot(data) {
    return power.power(data, 1 / 2);
  }

  function cubeRoot(data) {
    return power.power(data, 1 / 3);
  }

  function nThRoot(data, raiseTo) {

    function innerNThRoot(raiseTo) {
      if (typeof(raiseTo) == 'number') {
        return 1 / raiseTo;
      } else {
        for (j in raiseTo) {
          raiseTo[j] = innerNThRoot(raiseTo[j]);
        }
        return raiseTo;
      }
    }

    var d = innerNThRoot(raiseTo);

    return power.power(data, d);
  }

  return {
    squareRoot: squareRoot,
    nThRoot: nThRoot,
    cubeRoot: cubeRoot
  }
}

module.exports = root();
