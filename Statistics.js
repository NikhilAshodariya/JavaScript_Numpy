var clone = require('matrix_deep_clone');
var nj = require('./Subtraction');
var stats =
  function() {
    function isPrimitive(test) {
      return (test !== Object(test));
    };

    function findHighestElement(data) {
      function findHighest(data) {
        var max = data[0];
        for (v of data) {
          if (v > max) {
            max = v;
          }
        }
        return max;
      }
      if (isPrimitive(data[0])) {
        return findHighest(data);
      } else {
        var max = [];
        for (i in data) {
          max[i] = findHighestElement(data[i]);
        }
        return findHighest(max);
      }
    }

    function findLowestElement(data) {
      function findLowest(data) {
        var min = data[0];
        for (v of data) {
          if (v < min) {
            min = v;
          }
        }
        return min;
      }
      if (isPrimitive(data[0])) {
        return findLowest(data);
      } else {
        var max = [];
        for (i in data) {
          max[i] = findLowestElement(data[i]);
        }
        return findLowest(max);
      }
    }

    function findSquare(data) {
      function inner_findSquare(inner_data) {
        if (typeof(inner_data) == 'number') {
          return inner_data * inner_data;
        } else if (typeof(inner_data) == 'object') {
          for (var i in inner_data) {
            inner_data[i] = inner_findSquare(inner_data[i]);
          }
        }
        return inner_data;
      }
      var saf = clone.deepCloneMatrix(data);
      return inner_findSquare(saf);
    }

    function findRange(data) {
      return findHighestElement(data) - findLowestElement(data);
    }

    function findTotalElements(data) {
      if (typeof(data[0]) == 'number') {
        return data.length;
      } else if (typeof(data) == 'object') {
        var sum = 0;
        for (var i in data) {
          sum = sum + findTotalElements(data[i]);
        }
        return sum;
      }
    }

    function findMean(data) {
      var sum = findSum(data);
      var totalElements = findTotalElements(data);
      return sum / totalElements;
    }

    function findSum(data) {
      if (typeof(data) == 'number') {
        return data;
      } else if (typeof(data) == 'object') {
        var sum = 0;
        for (var i in data) {
          sum = sum + findSum(data[i]);
        }
        return sum;
      }
    }

    function findMedian(data) {
      var newdata = data.slice();
      newdata = newdata.sort();
      if (newdata.length % 2 == 0) {
        // even number
        var num = Number(data.length / 2);
        return (newdata[num] + newdata[num - 1]) / 2;
      } else {
        // odd number
        return newdata[Math.floor(Number(data.length / 2))];
      }
    }

    function findFrequency(data, tofind) {
      if (typeof(data) == 'number') {
        if (data == tofind) {
          return 1;
        } else {
          return 0;
        }
      } else if (typeof(data) == 'object') {
        var sum = 0;
        for (var i in data) {
          sum = sum + findFrequency(data[i], tofind);
        }
        return sum;
      }
    }

    function findPopulationStandardDeviation(data) {
      var mean = findMean(data);
      var newdata = [];
      var temp = nj.subtract(data, mean);
      return Math.sqrt(findMean(findSquare(temp)));
    }

    function findPopulationVariance(data) {
      var temp = findPopulationStandardDeviation(data);
      return temp * temp;
    }

    function findSampleStandardDeviation(data) {
      var mean = findMean(data);
      var newdata = [];

      var temp = nj.subtract(data, mean);
      var total = findTotalElements(temp);
      return Math.sqrt((findMean(temp) * total) / (total - 1));
    }

    function findSampleVariance(data) {
      var temp = findSampleStandardDeviation(data);
      return temp * temp;
    }

    function findAllFrequency(data) {
      function inner_findAllFrequency(wholeData, data, ans = {}) {
        // var ans = {};
        for (var i in data) {
          if (typeof(data[i]) == 'number') {
            ans[data[i]] = findFrequency(wholeData, data[i]);
          } else {
            inner_findAllFrequency(wholeData, data[i], ans);
          }
        }
      }
      var ans = {};
      inner_findAllFrequency(data, data, ans);
      return ans;
    }

    function findMode(data) {
      function check_if_all_same_frequency(data) {
        var check = data[Object.keys(data)[0]];
        for (var v of Object.keys(data)) {
          if (data[v] != check) {
            return false;
          }
        }
        return true;
      }

      var res = findAllFrequency(data);
      if (check_if_all_same_frequency(res)) {
        return undefined;
      } else {
        var max = res[Object.keys(res)[0]];
        for (var v of Object.keys(res)) {
          if (res[v] > max) {
            max = res[v];
          }
        }
        var ans = [];
        var counter = -1;
        for (var v of Object.keys(res)) {
          if (res[v] == max) {
            ans[++counter] = Number(v);
          }
        }
        return ans;
      }
    }

    return {
      mean: findMean,
      square: findSquare,
      sum: findSum,
      totalElements: findTotalElements,
      findHighestElement: findHighestElement,
      findLowestElement: findLowestElement,
      findRange: findRange,
      findMedian: findMedian,
      findFrequency: findFrequency,
      findPopulationStandardDeviation: findPopulationStandardDeviation,
      findPopulationVariance: findPopulationVariance,
      findSampleStandardDeviation: findSampleStandardDeviation,
      findSampleVariance: findSampleVariance,
      findAllFrequency: findAllFrequency,
      findMode: findMode
    }
  }

module.exports = stats();
