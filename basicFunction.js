var basicOperations =
  function() {
    function get_Dimensions(data) {
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

    function check_all_dimensions_same(firstArray, secondArray) {
      var firstSize = get_Dimensions(firstArray);
      var secondSize = get_Dimensions(secondArray);
      if (firstSize.length != secondSize.length) {
        return false;
      } else {
        for (var i = 0; i < firstArray.length; i++) {
          if (firstSize[i] != secondSize[i]) {
            return false;
          }
        }
        return true;
      }
    }
    return {
      get_Dimensions: get_Dimensions,
      are_dimensions_same: check_all_dimensions_same
    }
  }


module.exports = basicOperations();
