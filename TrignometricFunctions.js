var clone = require('matrix_deep_clone');

var trigoFunctions = function() {

  function commonTrigoFunctions(to_change, type, trigoFunction) {
    if (typeof(to_change) == 'number') {
      if (type.toLowerCase() == "radian") {
        var value = Number(parseFloat(trigoFunction(to_change)).toFixed(3));
        if (value == -0) {
          /**
           * This is require since during rounding the value using
           * toFixed function sometimes zero becomes minus zero;
           * this happens because -0.0000005 is rounded to zero but the sign
           * is retained;
           */
          return 0;
        } else {
          return value;
        }
      } else {
        var value = Number(parseFloat(trigoFunction(0.0174533 * to_change)).toFixed(3));
        if (value == -0) {
          /**
           * This is require since during rounding the value using
           * toFixed function sometimes zero becomes minus zero;
           * this happens because -0.0000005 is rounded to zero but the sign
           * is retained;
           */
          return 0;
        } else {
          return value;
        }
      }
    } else {
      for (i in to_change) {
        to_change[i] = commonTrigoFunctions(to_change[i], type, trigoFunction);
      }
      return to_change;
    }
  }

  function inverseAndHyperbolicTrigoFunctionCommon(to_change, trigoFunction) {
    if (typeof(to_change) == 'number') {
      return trigoFunction(to_change);
    } else {
      for (i in to_change) {
        to_change[i] = inverseAndHyperbolicTrigoFunctionCommon(to_change[i], trigoFunction);
      }
      return to_change;
    }
  }

  function sin(data, type = 'degree') {
    /**
     * sin function requires radian as input
     * 0.0174533 is a converter from degree to radian
     */

    safety = clone.deepCloneMatrix(data);
    return commonTrigoFunctions(safety, type, (a) => {
      return Math.sin(a);
    });
  }

  function cos(data, type = 'degree') {
    /**
     * cos function requires radian as input
     * 0.0174533 is a converter from degree to radian
     */

    safety = clone.deepCloneMatrix(data);
    return commonTrigoFunctions(safety, type, (a) => {
      return Math.cos(a);
    });
  }

  function tan(data, type = 'degree') {
    /**
     * tan function requires radian as input
     * 0.0174533 is a converter from degree to radian
     */

    safety = clone.deepCloneMatrix(data);
    return commonTrigoFunctions(safety, type, (a) => {
      var inDegree = Number(parseFloat(a * 57.2958).toFixed(2));
      if (inDegree % 90 == 0 && inDegree != 0) {
        return Infinity;
      } else {
        return Math.tan(a);
      }
    });
  }

  function sinInverse(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.round(Number((Math.asin(a) * 57.2958).toFixed(2)));
    });
  }

  function cosInverse(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.round(Number((Math.acos(a) * 57.2958).toFixed(2)));
    });
  }

  function tanInverse(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.round(Number((Math.atan(a) * 57.2958).toFixed(2)));
    });
  }

  function hyperbolicSine(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.sinh(a);
    });
  }

  function hyperbolicCosine(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.cosh(a);
    });
  }

  function hyperbolicTangent(data) {
    safety = clone.deepCloneMatrix(data);
    return inverseAndHyperbolicTrigoFunctionCommon(safety, (a) => {
      return Math.tanh(a);
    });
  }


  return {
    sin: sin,
    cos: cos,
    tan: tan,
    sinInverse: sinInverse,
    cosInverse: cosInverse,
    tanInverse: tanInverse,
    hyperbolicSine: hyperbolicSine,
    hyperbolicCosine: hyperbolicCosine,
    hyperbolicTangent: hyperbolicTangent
  }
}

module.exports = trigoFunctions();
