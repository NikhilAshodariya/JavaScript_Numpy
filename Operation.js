var basicFunc = require('./basicFunction.js');
var deepClone = require('./clone.js');
var Operator =
  function() {
    function operation_two_array(data_array, to_operation, operation) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'number') {
          data_array[i] = operation(data_array[i], to_operation[i]);
        } else if (typeof(data_array[i] == 'object')) {
          operation_two_array(data_array[i], to_operation[i], operation);
        }
      }
      return data_array;
    }

    function operation_number_and_array(data_array, to_operation, operation) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'object') {
          data_array[i] = operation_number_and_array(data_array[i], to_operation, operation);
        } else {
          data_array[i] = operation(data_array[i], to_operation[0]);
        }
      }
      return data_array;
    }

    function operation_nonEqual_array(data_array, to_operation, operation) {
      var data_dimension = basicFunc.get_Dimensions(data_array);
      var to_operation_dimension = basicFunc.get_Dimensions(to_operation);
      var subset_data_dimension = data_dimension.slice(data_dimension.length - to_operation_dimension.length);

      function isInnerDimensionSame() {
        for (var i in to_operation_dimension) {
          if (to_operation_dimension[i] != subset_data_dimension[i]) {
            return false;
          }
        }
        return true;
      }

      if (isInnerDimensionSame()) {
        res = new_operation(data_array, to_operation, data_array.slice(), 0, operation);
      } else {
        if (data_dimension[data_dimension.length - 2] == to_operation_dimension[0]) {
          operation_to_column(data_array, to_operation, 0, operation);
        } else if (data_dimension[data_dimension.length - 1] == to_operation_dimension[1]) {
          operation_to_row(data_array, to_operation, 0, operation);
        } else {
          throw new Error("Cannot compute the request Sorry");
        }
      }
      return data_array;
    }

    function operation_to_column(data_array, to_operation, i = 0, operation) {
      if (typeof(data_array[0]) == 'number') {
        // for (k in data_array) {
        //   data_array[k] = operation(data_array[k], to_operation[i][0]);
        // }
        data_array = operation_number_and_array(data_array,to_operation[i],operation);
      } else if (typeof(data_array[i] == 'object')) {
        for (y in data_array) {
          operation_to_column(data_array[y], to_operation, y, operation);
        }
      }
    }

    function operation_to_row(data_array, to_operation, i = 0, operation) {
      // if (basicFunc.get_Dimensions(data_array).length == 2 && basicFunc.get_Dimensions(data_array)[0] == 1) {
      if (basicFunc.isSingleArray(data_array)) {
        /**
          * Here we cannot use operation_number_and_array since
          * we want to add a number to a element and not
          * a number to and array
        */
        for (j in data_array) {
          data_array[j] = operation(data_array[j], to_operation[j]);
        }
      } else {
        for (k in data_array) {
          operation_to_row(data_array[k], to_operation, k, operation);
        }
      }
    }

    function new_operation(data_array, to_operation, to_store = data_array.slice(), i = 0, operation) {
      /*
       * Here to_store is required because it operation with it self and creates a loop
       * so to avoid circular we need a separate array
       */
      if (i < data_array.length) {
        if (basicFunc.are_dimensions_same(data_array, to_operation)) {
          to_store[i] = operation_two_array(data_array, to_operation, operation);
        } else {
          for (j in data_array) {
            new_operation(data_array[j], to_operation, data_array[j].slice(), j, operation);
          }
        }
      }
      return to_store;
    }

    function inner_operation(data_array, to_operation, operation) {
      if (basicFunc.hasSingleItem(to_operation)) {
        return operation_number_and_array(data_array, to_operation, operation);
      } else if (typeof(to_operation) == 'object') {
        if (basicFunc.are_dimensions_same(data_array, to_operation)) {
          return operation_two_array(data_array, to_operation, operation);
        } else {
          return operation_nonEqual_array(data_array, to_operation, operation);
        }
      }
      return data_array;
    }

    function operation(data_array, to_operation, replace, operation) {
      if (typeof(data_array) == 'number') {
        var temp = data_array;
        data_array = [];
        data_array[0] = temp;
      }
      if (typeof(to_operation) == 'number') {
        var temp = to_operation;
        to_operation = [];
        to_operation[0] = temp;
      }
      var res = [];
      var safety = [];

      function get_toStore_object(data, replace) {
        var safety = []
        if (replace == true) {
          safety = data;
        } else {
          safety = deepClone.deepCloneObject(data);
        }
        return safety;
      }

      if (basicFunc.is_first_greater(data_array, to_operation)) {
        safety = get_toStore_object(data_array, replace);
        res = inner_operation(safety, to_operation, operation);
      } else {
        safety = get_toStore_object(to_operation, replace);
        res = inner_operation(safety, data_array, operation);
      }
      return res;
    }

    return {
      operation: operation
    }
  }


module.exports = Operator();
