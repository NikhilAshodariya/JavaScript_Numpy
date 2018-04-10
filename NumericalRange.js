var NumericalRange = function() {

  function linspace(start, stop, parts = 10) {
    if (typeof(start) == "undefined" || typeof(stop) == "undefined") {
      /**
       * case like start is undefined and stop has some value is not possible in JavaScript
       * such case is possible since during calling a function you can calling using following method
       * linspace(stop=5). Such case is not possible in JS. JS will take the first parameter as
       * start value only. Case such as both are both are undefined can occur so it is handle.
       *
       */
      if ((typeof(start) != "undefined") && (typeof(stop) == "undefined")) {
        throw new Error(`linspace() missing 1 required positional argument: 'stop'`);
      } else if ((typeof(start) == "undefined") && (typeof(stop) == "undefined")) {
        throw new Error(`linspace() missing 2 required positional arguments: 'start' and 'stop'`);
      } else {
        throw new Error(`Some unknown Exception occured in linspace`);
      }
    }
    if (start == stop) {
      var toReturnData = [];
      for (let i = 0; i < parts; i++) {
        toReturnData[i] = start;
      }
      return toReturnData;
    }
    if (parts < 0) {
      throw new Error(`Number of samples, ${parts}, must be non-negative.`);
    } else if (parts == 0) {
      return [];
    } else if (parts == 1) {
      return [start];
    } else if (parts == 2) {
      return [start, stop];
    } else {
      var increment = (stop * 1.0 - start * 1.0) / (parts - 1) * 1.0;
      var toReturn = [];
      var temp = start;
      for (let i = 0; i < parts; i++) {
        toReturn[i] = temp;
        temp = temp + increment;
      }
      return toReturn;
    }
  }

  function arange(start, stop, step = 1) {
    if (typeof(stop) == "undefined") {
      stop = start;
      start = 0;
    }
    if (step <= 0) {
      throw new Error(`Step cannot be negative or zero. Current step is ${step}`);
    }

    var toReturn = [];
    var counter = -1;
    for (let temp = start; temp <= stop; temp = temp + step) {
      toReturn[++counter] = temp;
    }
    return toReturn;
  }

  return {
    linspace: linspace,
    arange: arange
  }
}
module.exports = NumericalRange();
