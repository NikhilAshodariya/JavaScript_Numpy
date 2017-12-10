console.log(adder);
console.log(subtractor);
var NumpyJS = (
  function(){
    return{
      add:adder.add,
      subtract:subtractor.subtract
    }
  }
);

module.exports = NumpyJS();
