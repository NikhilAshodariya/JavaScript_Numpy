var otherFunctions = function() {

  function generateRandomNumbers(totalNumbers, min = 0, max = totalNumbers + min) {
    /**
     * Both the min and max values are included.
     */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var arr = [];
    var counter = -1;
    while (arr.length < totalNumbers) {
      var randomnumber = getRandomInt(min, max);
      if (arr.indexOf(randomnumber) > -1) {
        continue;
      }
      counter++;
      arr[counter] = randomnumber;
    }
    return arr;
  }

  function get_Dimensions(data) {
    /*checking for single error since it causes problem*/
    if (typeof(data[0]) == 'number' && typeof(data) == 'object') {
      var res = []
      res[0] = 1;
      res[1] = data.length;
      return res;
    }

    function get_Dim(data, dim, i = 0) {
      if (typeof(data) == "object") {
        dim[i] = data.length;
        get_Dim(data[0], dim, ++i);
      } else if (typeof(data) == "number") {
        return 1;
      } else {
        return undefined;
      }
    }
    var dimen = [];
    get_Dim(data, dimen);
    return dimen;
  }


  return {
    generateRandomNumbers: generateRandomNumbers,
    get_Dimensions: get_Dimensions
  }
}
module.exports = otherFunctions();
