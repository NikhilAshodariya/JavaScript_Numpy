var miscellaneous = require('./Miscellaneous');

var complexMatrixOperations = function() {
  function transpose(data) {
    function stackColumns(data) {
      var dim = miscellaneous.get_Dimensions(data);
      var columns = dim[dim.length - 1];
      var accessPattern = formPattern(data);
      var newData = [];
      for (var i = 0; i < columns; i++) {
        var yak = [];
        var counter = -1;
        var temp = getColumns(data, i);
        for (var v of accessPattern) {
          yak[++counter] = temp[v];
        }
        newData = newData.concat(yak);
      }
      return newData;
    }

    function getColumns(data, index = 0) {
      function innerGetColumns(inner_data, i) {
        if (typeof(inner_data) == 'number' && i == index) {
          newData[++counter] = inner_data;
        } else {
          for (var j in inner_data) {
            innerGetColumns(inner_data[j], j);
          }
        }
      }

      var newData = [];
      var counter = -1;
      innerGetColumns(data, index);
      return newData;
    }

    function formPattern(data) {
      var lastAccessed = 0;
      var counter = -1;
      var temp = getColumns(data, 0);
      var traverse = 0;
      var yak = [];
      var dim = miscellaneous.get_Dimensions(data);
      var rows = dim[dim.length - 2];
      var columns = dim[dim.length - 1];


      for (var k = 0; k < temp.length; k++) {

        yak[++counter] = traverse;
        traverse = traverse + rows;
        if (traverse >= temp.length) {
          traverse = lastAccessed + 1;
          lastAccessed++;
        }
      }
      return yak;
    }

    var finalData = stackColumns(data);
    var dim = miscellaneous.get_Dimensions(data).reverse();
    return miscellaneous.reshape(finalData, dim);
  }

  function findDeterminant(data) {
    function isSquare(data) {
      var dim = miscellaneous.get_Dimensions(data);
      var rows = dim[dim.length - 2];
      var columns = dim[dim.length - 1];
      if (rows == columns && dim.length == 2) {
        return true;
      } else {
        return false;
      }
    }


    function nCrossNDeterminant(data) {

      function twoCrossTwoDeterminant(data) {
        return (data[0][0] * data[1][1]) - (data[0][1] * data[1][0]);
      }


      var dim = miscellaneous.get_Dimensions(data);
      var rows = dim[dim.length - 2];
      var column = dim[dim.length - 1];
      if (rows == 2 && column == 2) {
        return twoCrossTwoDeterminant(data)
      } else {
        var toOperate = data[0];
        var yui = -1;
        var timepass = [];
        var ans = 0;
        var sign = 1;
        for (i in toOperate) {
          // starting j from one since at zero toOperate data is there
          var newData = [];
          var tig = -1;
          for (j = 1; j < data.length; j++) {
            var temp = [];
            var counter = -1;
            var yak = data[j];
            for (v in yak) {
              if (v != i) {
                temp[++counter] = yak[v];
                // console.log(`data inserted is ${yak[v]}`);
              } else {
                // console.log(`data avoided = ${yak[v]}`);
              }
            }
            // newData = newData.concat(yak);
            // console.log(`temp is ${temp}`);
            newData[++tig] = temp;
          }
          ans = ans + sign * toOperate[i] * nCrossNDeterminant(newData);
          sign = sign * -1;
          timepass[i] = newData;
        }
        return ans;
      }
    }


    var dim = miscellaneous.get_Dimensions(data);
    var rows = dim[dim.length - 2];
    var columns = dim[dim.length - 1];

    if (rows != columns) {
      throw new Error("To calculate Determinant the matrix should be square");
    } else {
      var res = [];
      var counter = -1;

      function innerDeterminant(innerData) {
        if (isSquare(innerData)) {
          res[++counter] = nCrossNDeterminant(innerData);
        } else {
          for (i in innerData) {
            innerDeterminant(innerData[i]);
          }
        }
      }

      innerDeterminant(data);
      if (res.length == 1) {
        return res[0];
      } else {
        console.log(dim.slice(0, dim.length - 2));
        var te = dim.slice(0, dim.length - 2);
        if (te.length >= 2) {
          return miscellaneous.reshape(res, te);
        } else {
          return res;
        }
      }
    }

  }


  return {
    transpose: transpose,
    findDeterminant: findDeterminant
  }
}

module.exports = complexMatrixOperations();
