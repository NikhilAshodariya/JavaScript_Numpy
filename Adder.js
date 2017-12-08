var basicFunc = require('./basicFunction.js');
var deepClone = require('./clone.js');
var addOperator =
  function() {
    function add_two_array(data_array, to_add) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'number') {
          data_array[i] = data_array[i] + to_add[i];
        } else if (typeof(data_array[i] == 'object')) {
          add_two_array(data_array[i], to_add[i]);
        }
      }
      return data_array;
    }

    function add_number_and_array(data_array, to_add) {
      for (i in data_array) {
        if (typeof(data_array[i]) == 'object') {
          data_array[i] = add_number_and_array(data_array[i], to_add);
        } else {
          data_array[i] = data_array[i] + to_add;
        }
      }
      return data_array;
    }

    function add_nonEqual_array(data_array, to_add, ) {
      var data_dimension = basicFunc.get_Dimensions(data_array);
      var to_add_dimension = basicFunc.get_Dimensions(to_add);
      var subset_data_dimension = data_dimension.slice(data_dimension.length - to_add_dimension.length);

      function isInnerDimensionSame() {
        for (var i in to_add_dimension) {
          if (to_add_dimension[i] != subset_data_dimension[i]) {
            return false;
          }
        }
        return true;
      }

      if (isInnerDimensionSame()) {
        res = new_add(data_array, to_add);
      } else {
        if (data_dimension[data_dimension.length - 2] == to_add_dimension[0]) {
          add_to_column(data_array, to_add);
        } else if (data_dimension[data_dimension.length - 1] == to_add_dimension[1]) {
          add_to_row(data_array, to_add);
        } else {
          throw new Error("Cannot compute the request Sorry");
        }
      }
      return data_array;
    }

    function add_to_column(data_array, to_add, i = 0) {
      if (typeof(data_array[0]) == 'number') {
        for (k in data_array) {
          data_array[k] = data_array[k] + to_add[i][0];
        }
      } else if (typeof(data_array[i] == 'object')) {
        for (y in data_array) {
          add_to_column(data_array[y], to_add, y);
        }
      }
    }

    function add_to_row(data_array, to_add, i = 0) {
      if (basicFunc.get_Dimensions(data_array).length == 1) {
        for (j in data_array) {
          data_array[j] = data_array[j] + to_add[0];
        }
      } else {
        for (k in data_array) {
          add_to_row(data_array[k], to_add, k);
        }
      }
    }

    function new_add(data_array, to_add, to_store = data_array.slice(), i = 0) {
      /*
       * Here to_store is required because it add with it self and creates a loop
       * so to avoid circular we need a separate array
       */
      if (i < data_array.length) {
        if (basicFunc.are_dimensions_same(data_array, to_add)) {
          to_store[i] = add_two_array(data_array, to_add);
        } else {
          for (j in data_array) {
            new_add(data_array[j], to_add, j);
          }
        }
      }
      return to_store;
    }

    function inner_add(data_array, to_add) {
      if (typeof(to_add) == 'number') {
        return add_number_and_array(data_array, to_add);
      } else if (typeof(to_add) == 'object') {
        if (basicFunc.are_dimensions_same(data_array, to_add)) {
          return add_two_array(data_array, to_add);
        } else {
          return add_nonEqual_array(data_array, to_add);
        }
      }
      return data_array;
    }

    function add(data_array, to_add, replace) {
      var ans = []
      safety = deepClone.deepCloneObject(data_array);
      res = inner_add(data_array, to_add);
      if (replace == true) {
        return res;
      } else {
        ans[0] = safety;
        ans[1] = res;
        return ans;
      }
    }

    return {
      add: add
    }
  }


module.exports = addOperator();
