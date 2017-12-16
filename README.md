# JavaScript Numpy

This project aims at providing equivalent of Numpy in JavaScript.


### Prerequisites
Node.js, matrix_deep_clone


### Installing

First, head over to nodejs.org and install Node.js.

```
$ npm install jsnumpy
```

## Running the tests

First install the module matrix_deep_clone then type
```
$ cd node_modules/jsnumpy/
```
After going inside the library type
```
$ npm test
```
The above command will run check.js.
The test file creates and 2D array and subtracts it

### Breaking down into end to end tests

```
var nj = require('jsnumpy');
```
```
var a = [[1,2,3],[4,5,6],[7,8,9]]
```
```
var b = [1,2,3]
```
```
var res = nj.add(a,b);
```

```
As of now the Library supports
1.	add:- It performs addition on matrix.
2.	subtract:- It performs subtraction on matrix.
3.	Elementwise multiply:- It peforms Elementwise multiply on matrix.
4.	generateRandomNumbers:- generates an N set of random number from max and min
5.	get_Dimensions:- return the dimension of the given Array(Matrix).
6.	mean: returns the mean of a Matrix/Array.
7.	square:returns the square of all the elements of the Matrix.
8.	sum: takes the sum of all the elements of the matrix/array.
9.	totalElements: counts the total number of elements in matrix/array.
10.	findHighestElement: returns the highest element in the matrix/array.
11.	findLowestElement: returns the lowest element in the matrix/array.
12.	findRange: returns the range of the matrix/array
13.	findMedian: returns the median of the array.
14.	findFrequency: finds the frequency of the given element.
15.	findPopulationStandardDeviation: returns the population standard deviation.
16.	findPopulationVariance:- returns the population variance deviation.
17.	findSampleStandardDeviation:- returns the sample standard deviation.
18.	findSampleVariance:- returns the population sample variance deviation.
19.	findAllFrequency:- returns the frequency of all the elements in array/matrix
20.	findMode:- returns the elements with highest frequency.
```

## Authors

* **Nikhil Ashodariya** -(https://github.com/NikhilAshodariya)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
