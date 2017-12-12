var adder = require('./Adder');
var subtractor = require('./Subtraction');
var multiply = require('./ElementMultiply');
var NumpyJS = (
  function(){
    return{
      add:adder.add,
      subtract:subtractor.subtract,
      ElementMultiply:multiply.ElementMultiply
    }
  }
);

module.exports = NumpyJS();
