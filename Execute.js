var basicFunc = require('./basicFunction.js');
var miscellaneousOperations = require('./Miscellaneous.js');
var deepClone = require('matrix_deep_clone');
var Operator =
  function() {
    function executeOnTwoArray(data_array, to_operation, task_to_perform) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'number') {
          data_array[i] = task_to_perform(data_array[i], to_operation[i]);
        } else if (typeof(data_array[i] == 'object')) {
          executeOnTwoArray(data_array[i], to_operation[i], task_to_perform);
        }
      }
      return data_array;
    }

    function executeOnNumberAndArray(data_array, to_operation, task_to_perform) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'object') {
          data_array[i] = executeOnNumberAndArray(data_array[i], to_operation, task_to_perform);
        } else {
          data_array[i] = task_to_perform(data_array[i], to_operation[0]);
        }
      }
      return data_array;
    }

    function executeOnNonEqualArray(data_array, to_operation, task_to_perform) {
      var data_dimension = miscellaneousOperations.get_Dimensions(data_array);
      var to_operation_dimension = miscellaneousOperations.get_Dimensions(to_operation);
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
        res = executeOnInnerDimensions(data_array, to_operation, data_array.slice(), 0, task_to_perform);
      } else {
        if (data_dimension[data_dimension.length - 2] == to_operation_dimension[0]) {
          executeOnColumns(data_array, to_operation, 0, task_to_perform);
        } else if (data_dimension[data_dimension.length - 1] == to_operation_dimension[1]) {
          executeOnRow(data_array, to_operation, 0, task_to_perform);
        } else {
          throw new Error("Cannot compute the request Sorry");
        }
      }
      return data_array;
    }

    function executeOnColumns(data_array, to_operation, i = 0, task_to_perform) {
      if (typeof(data_array[0]) == 'number') {
        data_array = executeOnNumberAndArray(data_array,to_operation[i],task_to_perform);
      } else if (typeof(data_array[i] == 'object')) {
        for (y in data_array) {
          executeOnColumns(data_array[y], to_operation, y, task_to_perform);
        }
      }
    }

    function executeOnRow(data_array, to_operation, i = 0, task_to_perform) {
      // if (miscellaneousOperations.get_Dimensions(data_array).length == 2 && miscellaneousOperations.get_Dimensions(data_array)[0] == 1) {
      if (basicFunc.isSingleArray(data_array)) {
        /**
          * Here we cannot use executeOnNumberAndArray since
          * we want to add a number to a element and not
          * a number to and array
        */
        for (j in data_array) {
          data_array[j] = task_to_perform(data_array[j], to_operation[j]);
        }
      } else {
        for (k in data_array) {
          executeOnRow(data_array[k], to_operation, k, task_to_perform);
        }
      }
    }

    function executeOnInnerDimensions(data_array, to_operation, to_store = data_array.slice(), i = 0, task_to_perform) {
      /*
       * Here to_store is required because it task_to_perform with it self and creates a loop
       * so to avoid circular we need a separate array
       */
      if (i < data_array.length) {
        if (basicFunc.are_dimensions_same(data_array, to_operation)) {
          to_store[i] = executeOnTwoArray(data_array, to_operation, task_to_perform);
        } else {
          for (j in data_array) {
            executeOnInnerDimensions(data_array[j], to_operation, data_array[j].slice(), j, task_to_perform);
          }
        }
      }
      return to_store;
    }

    function innerExecute(data_array, to_operation, task_to_perform) {
      if (basicFunc.hasSingleItem(to_operation)) {
        return executeOnNumberAndArray(data_array, to_operation, task_to_perform);
      } else if (typeof(to_operation) == 'object') {
        if (basicFunc.are_dimensions_same(data_array, to_operation)) {
          return executeOnTwoArray(data_array, to_operation, task_to_perform);
        } else {
          return executeOnNonEqualArray(data_array, to_operation, task_to_perform);
        }
      }
      return data_array;
    }

    function mainExecute(data_array, to_operation, replace, task_to_perform) {
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
          safety = deepClone.deepCloneMatrix(data);
        }
        return safety;
      }

      if (basicFunc.is_first_greater(data_array, to_operation)) {
        task_to_perform.shuffle = false;
        safety = get_toStore_object(data_array, replace);
        res = innerExecute(safety, to_operation, task_to_perform);
      } else {
        task_to_perform.shuffle = true;
        safety = get_toStore_object(to_operation, replace);
        res = innerExecute(safety, data_array, task_to_perform);
      }
      return res;
    }

    return {
      execute: mainExecute
    }
  }


module.exports = Operator();
