var adder = require('./Adder');
var subtractor = require('./Subtraction');
var multiply = require('./ElementMultiply');
var miscellaneousFunction = require('./Miscellaneous');
var stats = require('./Statistics.js');

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
      findMode: stats.findMode
    }
  }
);

module.exports = NumpyJS();
