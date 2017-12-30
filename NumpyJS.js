var adder = require('./Adder');
var subtractor = require('./Subtraction');
var multiply = require('./ElementMultiply');
var power = require('./Power.js');
var miscellaneousFunction = require('./Miscellaneous');
var stats = require('./Statistics.js');
var exp = require('./exp.js');
var trigoFunctions = require('./TrignometricFunctions.js');
var complexMatrixOperations = require('./ComplexMatrixOperation.js');
var logarithm = require('./Log.js');

var NumpyJS = (
  function() {
    return {
      add: adder.add,
      subtract: subtractor.subtract,
      ElementMultiply: multiply.ElementMultiply,
      generateRandomNumbers: miscellaneousFunction.generateRandomNumbers,
      get_Dimensions: miscellaneousFunction.get_Dimensions,
      fillWithNumber: miscellaneousFunction.fillWithNumber,
      flatten: miscellaneousFunction.flatten,
      reshape: miscellaneousFunction.reshape,
      negative: miscellaneousFunction.negative,
      abs: miscellaneousFunction.abs,
      mean: stats.mean,
      square: stats.square,
      sum: stats.sum,
      totalElements: stats.totalElements,
      findHighestElement: stats.findHighestElement,
      findLowestElement: stats.findLowestElement,
      findRange: stats.findRange,
      findMedian: stats.findMedian,
      findFrequency: stats.findFrequency,
      findPopulationStandardDeviation: stats.findPopulationStandardDeviation,
      findPopulationVariance: stats.findPopulationVariance,
      findSampleStandardDeviation: stats.findSampleStandardDeviation,
      findSampleVariance: stats.findSampleVariance,
      findAllFrequency: stats.findAllFrequency,
      findMode: stats.findMode,
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
      log10: logarithm.log10,
      logE: logarithm.logE,
      log: logarithm.log
    }
  }
);

module.exports = NumpyJS();
