var adder = require('./Adder');
var subtractor = require('./Subtraction');
var divider = require('./Divide.js')
var multiply = require('./ElementMultiply');
var matrixMultiply = require('./MatrixMultiply.js');
var power = require('./Power.js');
var miscellaneousFunction = require('./Miscellaneous');
var stats = require('./Statistics.js');
var exp = require('./exp.js');
var trigoFunctions = require('./TrignometricFunctions.js');
var complexMatrixOperations = require('./ComplexMatrixOperation.js');
var logarithm = require('./Log.js');
var root = require('./root.js');
var NumericalRange = require("./NumericalRange.js");

var NumpyJS = (
  function() {
    return {
      add: adder.add,
      subtract: subtractor.subtract,
      divide: divider.divide,
      multiply: multiply.ElementMultiply,
      matrixMultiply: matrixMultiply.matrixMultiply,
      generateRandomNumbers: miscellaneousFunction.generateRandomNumbers,
      get_Dimensions: miscellaneousFunction.get_Dimensions,
      fillWithNumber: miscellaneousFunction.fillWithNumber,
      flatten: miscellaneousFunction.flatten,
      reshape: miscellaneousFunction.reshape,
      negative: miscellaneousFunction.negative,
      abs: miscellaneousFunction.abs,
      copy: miscellaneousFunction.copy,
      mean: stats.mean,
      square: stats.square,
      sum: stats.sum,
      totalElements: stats.totalElements,
      highestElement: stats.findHighestElement,
      lowestElement: stats.findLowestElement,
      range: stats.findRange,
      median: stats.findMedian,
      frequency: stats.findFrequency,
      populationStandardDeviation: stats.findPopulationStandardDeviation,
      populationVariance: stats.findPopulationVariance,
      sampleStandardDeviation: stats.findSampleStandardDeviation,
      sampleVariance: stats.findSampleVariance,
      allFrequency: stats.findAllFrequency,
      mode: stats.findMode,
      power: power.power,
      exp: exp.exp,
      sin: trigoFunctions.sin,
      cos: trigoFunctions.cos,
      tan: trigoFunctions.tan,
      sinInverse: trigoFunctions.sinInverse,
      cosInverse: trigoFunctions.cosInverse,
      tanInverse: trigoFunctions.tanInverse,
      hyperbolicSine: trigoFunctions.hyperbolicSine,
      hyperbolicCosine: trigoFunctions.hyperbolicCosine,
      hyperbolicTangent: trigoFunctions.hyperbolicTangent,
      transpose: complexMatrixOperations.transpose,
      determinant: complexMatrixOperations.findDeterminant,
      generateIdentityMatrix: complexMatrixOperations.generateIdentityMatrix,
      matrixInverse: complexMatrixOperations.matrixInverse,
      log10: logarithm.log10,
      logE: logarithm.logE,
      log: logarithm.log,
      squareRoot: root.squareRoot,
      nThRoot: root.nThRoot,
      cubeRoot: root.cubeRoot,
      arange: NumericalRange.arange,
      linspace: NumericalRange.linspace
    }
  }
);

module.exports = NumpyJS();
