var clone = require('matrix_deep_clone');

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

  function fillWithNumber(dim, number = 0) {
    var rowsNumber = dim[dim.length - 2];
    var colNumber = dim[dim.length - 1];

    function create2DMatrix(rows, columns, to_fill = 0) {
      var res = [];

      function createArray(number, to_fill = 0) {
        var temp = [];
        for (var i = 0; i < number; i++) {
          temp[i] = to_fill;
        }
        return temp;
      }

      for (var j = 0; j < rows; j++) {
        res[j] = createArray(columns, to_fill);
      }
      return res;
    }

    if (dim.length == 2) {
      return create2DMatrix(rowsNumber, colNumber, number);
    } else {
      // it is a higher dimension matrix
      var res = [];
      var subset = dim.slice(0, dim.length - 2);
      for (var i = 0; i < subset.length; i++) {
        var temp = [];
        for (var j = 0; j < subset[subset.length - 1 - i]; j++) {
          if (i == 0) {
            temp[j] = create2DMatrix(rowsNumber, colNumber)
          }
        }
        if (i == 0) {
          res[i] = temp;
        } else {
          res[i] = clone.deepCloneMatrix(res[i - 1]);
        }
      }
      if (res.length == 1) {
        return res[0];
      } else {
        return res;
      }
    }
  }

  function flatten(data) {
    function inner_flatten(data) {
      if (typeof(data) == 'number') {
        counter++;
        newdata[counter] = data;
        return;
      } else {
        for (var i in data) {
          inner_flatten(data[i]);
        }
        return newdata;
      }
    }
    var newdata = [];
    var counter = -1;
    inner_flatten(data);
    return newdata;
  }

  return {
    generateRandomNumbers: generateRandomNumbers,
    get_Dimensions: get_Dimensions,
    fillWithNumber: fillWithNumber,
    flatten: flatten
  }
}
module.exports = otherFunctions();
