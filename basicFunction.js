var miscellaneousOperations = require('./Miscellaneous.js');

var basicOperations =
  function() {
    function isSingleArray(data) {
      if (miscellaneousOperations.get_Dimensions(data).length == 2 && miscellaneousOperations.get_Dimensions(data)[0] == 1) {
        return true;
      }
      return false;
    }

    function hasSingleItem(data) {
      if (data.length == 1) {
        return true;
      } else {
        return false;
      }
    }

    function check_all_dimensions_same(firstArray, secondArray) {
      var firstSize = miscellaneousOperations.get_Dimensions(firstArray);
      var secondSize = miscellaneousOperations.get_Dimensions(secondArray);
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

    function is_first_greater(first_array, second_array) {
      first_array_dimension = miscellaneousOperations.get_Dimensions(first_array);
      second_array_dimension = miscellaneousOperations.get_Dimensions(second_array);
      if (first_array_dimension.length > second_array_dimension.length) {
        return true;
      } else if (first_array_dimension.length == second_array_dimension.length) {
        for (j in first_array_dimension) {
          if (second_array_dimension[j] < first_array_dimension[j]) {
            return true;
          } else if (second_array_dimension[j] > first_array_dimension[j]) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }

    return {
      are_dimensions_same: check_all_dimensions_same,
      is_first_greater: is_first_greater,
      isSingleArray: isSingleArray,
      hasSingleItem: hasSingleItem
    }
  }


module.exports = basicOperations();
