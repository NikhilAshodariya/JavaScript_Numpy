var miscellaneous = require('./Miscellaneous.js');

var matrixMultiply = function() {

  function matrixMultiply(firstMatrix, secondMatrix) {
    function innerMatrixMultiply(firstMatrix, secondMatrix) {
      if (innerMatrixMultiply.shuffle == false) {
        if (miscellaneous.get_Dimensions(firstMatrix).length == 2) {
          res[++counter] = findMatrixMultiply(firstMatrix, secondMatrix);
        } else {
          for (var j in firstMatrix) {
            innerMatrixMultiply(firstMatrix[j], secondMatrix);
          }
        }
      } else if (innerMatrixMultiply.shuffle == true) {
        if (miscellaneous.get_Dimensions(secondMatrix).length == 2) {
          res[++counter] = findMatrixMultiply(firstMatrix, secondMatrix);
        } else {
          for (var j in secondMatrix) {
            innerMatrixMultiply(firstMatrix, secondMatrix[j]);
          }
        }
      } else if (innerMatrixMultiply.shuffle == "allSame") {
        if (miscellaneous.get_Dimensions(secondMatrix).length == 2) {
          res[++counter] = findMatrixMultiply(firstMatrix, secondMatrix);
        } else {
          for (var j in secondMatrix) {
            innerMatrixMultiply(firstMatrix[j], secondMatrix[j]);
          }
        }
      } else {
        throw new Error(`The input ndArray has improper shapes`);
      }
    }

    function findMatrixMultiply(firstMatrix, secondMatrix) {
      var dimFirstMatrix = miscellaneous.get_Dimensions(firstMatrix);
      var dimSecondMatrix = miscellaneous.get_Dimensions(secondMatrix);

      var rowsFirstMatrix = dimFirstMatrix[dimFirstMatrix.length - 2];
      var rowsSecondMatrix = dimSecondMatrix[dimSecondMatrix.length - 2];

      var columnsFirstMatrix = dimFirstMatrix[dimFirstMatrix.length - 1];
      var columnsSecondMatrix = dimSecondMatrix[dimSecondMatrix.length - 1];

      if (columnsFirstMatrix != rowsSecondMatrix) {
        throw new Error(`shapes (${rowsFirstMatrix},${columnsFirstMatrix}) and (${rowsSecondMatrix},${columnsSecondMatrix}) not aligned: ${columnsFirstMatrix} (Matrix 1) != ${rowsSecondMatrix} (Matrix 2)`);
      }
      //code for Multiplication
      var res = [];
      var count = -1;
      for (var i = 0; i < rowsFirstMatrix; i++) {
        var temp = [];
        var counter = -1;
        for (var k = 0; k < columnsSecondMatrix; k++) {
          var sum = 0;
          for (var j = 0; j < rowsSecondMatrix; j++) {
            sum = sum + firstMatrix[i][j] * secondMatrix[j][k];
          }
          temp[++counter] = sum;
        }
        res[++count] = temp;
      }
      return res;
    }

    function isAllSameDimensions(firstMatrix, secondMatrix) {
      if (dimFirstMatrix.length != dimSecondMatrix.length) {
        return false;
      } else {
        var temp1 = dimFirstMatrix.slice(0, dimFirstMatrix.length - 2);
        var temp2 = dimSecondMatrix.slice(0, dimSecondMatrix.length - 2);
        if (temp1.length >= 1 && temp2.length >= 1) {
          for (var i = 0; i < temp1.length; i++) {
            if (temp1[i] != temp2[i]) {
              return false;
            }
          }
          return true;
        } else {
          return true;
        }
      }
    }

    var dimFirstMatrix = miscellaneous.get_Dimensions(firstMatrix);
    var dimSecondMatrix = miscellaneous.get_Dimensions(secondMatrix);

    if (dimFirstMatrix.length > dimSecondMatrix.length) {
      innerMatrixMultiply.shuffle = false;
    } else if (dimFirstMatrix.length < dimSecondMatrix.length) {
      innerMatrixMultiply.shuffle = true;
    } else if (isAllSameDimensions(firstMatrix, secondMatrix)) {
      innerMatrixMultiply.shuffle = "allSame";
    }

    var res = [];
    var counter = -1;

    innerMatrixMultiply(firstMatrix, secondMatrix);
    if (res.length == 1) {
      return res[0];
    }
    return res;
  }

  return {
    matrixMultiply: matrixMultiply
  }
}

module.exports = matrixMultiply();
