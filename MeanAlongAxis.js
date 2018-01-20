var Miscellaneous;
var matrixOperations;

function loadRequire(){
  Miscellaneous = require("./Miscellaneous.js");
  matrixOperations = require('./ComplexMatrixOperation.js');
}

function editData(data) {
  var temp = [];
  var counter = -1;
  for (var i = 0; i < data.length; i++) {
    temp[++counter] = Miscellaneous.flatten(data[i]);
  }
  counter = -1;
  var newData = [];
  for (var j = 0; j < temp[0].length; j++) {
    var sum = 0;
    for (var k = 0; k < temp.length; k++) {
      sum += temp[k][j];
    }
    newData[++counter] = sum / temp.length;
  }
  return newData;
}

function getProperDim(newDim) {
  if (newDim.length == 1) {
    newDim = [1, newDim[0]];
  }
  return newDim;
}

function meanAlongAxis(data, axis) {
  loadRequire();
  var dim = Miscellaneous.get_Dimensions(data);
  if ((dim.length - 1) < axis) {
    throw new Error(`value ${axis} of axis is out of bond`);
  }
  if ((dim.length - 1) == axis) {
    var temp = Miscellaneous.flatten(data);
    temp = addStepWise(temp, dim[axis]);
    var newDim = dim.slice(0, dim.length - 1);
    if (newDim.length == 1) {
      newDim = [1, newDim[0]];
    }
    var toReturn = Miscellaneous.reshape(temp, newDim);
    if (toReturn.length == 1) {
      return toReturn[0];
    }
    return toReturn;
  } else if (axis == 0) {
    var newData = Miscellaneous.reshape(editData(data), getProperDim(dim.slice(1)));
    if (newData.length == 1) {
      return newData[0];
    } else {
      return newData;
    }
  } else {
    var requiredDimension = leaveAElement(dim, axis);
    var toMakeDimension = dim.slice(axis)
    var ansFinal = tempGetRequiredData(data, toMakeDimension, dim[axis], requiredDimension);
    return Miscellaneous.reshape(Miscellaneous.flatten(ansFinal), requiredDimension);
    return ansFinal;
  }
}

function dimensionCheck(dim1, dim2) {
  for (var i = 0; i < dim1.length; i++) {
    if (dim1[i] != dim2[i]) {
      return false;
    }
  }
  return true;
}

function tempGetRequiredData(data, requiredDimension, step, toMakeDimension) {
  var newData = [];
  var counter = -1;

  function getRequiredData(data, requiredDimension, step) {
    if (dimensionCheck(Miscellaneous.get_Dimensions(data), requiredDimension)) {
      var temp = getProperDim(requiredDimension.slice(1));
      var transposedData = matrixOperations.transpose(data);
      var flattenedData = Miscellaneous.flatten(transposedData);
      var dataAddedStepWise = addStepWise(flattenedData, step);
      var reshapedData = Miscellaneous.reshape(dataAddedStepWise, temp);
      var asdf = Miscellaneous.flatten(matrixOperations.transpose(reshapedData));
      return asdf;
      // var asdf = Miscellaneous.flatten(matrixOperations.transpose(Miscellaneous.reshape(addStepWise(Miscellaneous.flatten(matrixOperations.transpose(data)), step),getProperDim(requiredDimension.slice(1)))));
    } else {
      for (var i = 0; i < data.length; i++) {
        newData[++counter] = getRequiredData(data[i], requiredDimension, step, requiredDimension);
      }
    }
  }
  getRequiredData(data, requiredDimension, step);
  return newData
}

function addStepWise(finalData, steps) {
  var k = [];
  var counter = -1;
  for (var i = 0; i < finalData.length; i = i + steps) {
    var sum = 0;
    for (var j = 0; j < steps; j++) {
      sum += finalData[i + j];
    }
    k[++counter] = sum / steps;
  }
  return k;
}

function leaveAElement(data, left) {
  var k = [];
  var counter = -1;
  for (var i = 0; i < data.length; i++) {
    if (i != left) {
      k[++counter] = data[i];
    }
  }
  return k;
}

var obj = function(){
  return{
    meanAlongAxis:meanAlongAxis
  }
}
module .exports = obj();
