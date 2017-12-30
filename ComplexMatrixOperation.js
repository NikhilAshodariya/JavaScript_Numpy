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

  return{
    transpose:transpose
  }
}

module.exports = complexMatrixOperations();
