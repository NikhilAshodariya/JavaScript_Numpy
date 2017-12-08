var basicFunc = require('./basicFunction');

var deepClone =
  function() {
    function deepCloneObject(data) {

      function isPrimitive(test) {
        return (test !== Object(test));
      };

      function inner_deepCloneObject(data, to_store) {
        if (isPrimitive(data[0])) {
          to_store = data.slice();
          return to_store;
        } else {
          for (i in data) {
            // console.log('in loop fo for');
            console.log(`i = ${i}`);
            to_store[i] = []
            to_store[i] = inner_deepCloneObject(data[i], to_store[i]);
          }
          return to_store;
        }
      }
      var newdata = []
      return inner_deepCloneObject(data, newdata);
    }


    return {
      deepCloneObject: deepCloneObject
    }
  }
module.exports = deepClone();
