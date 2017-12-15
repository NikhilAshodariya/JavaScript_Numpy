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
As of now the Library supports add, subtract and Elementwise multiply.

## Authors

* **Nikhil Ashodariya** -(https://github.com/NikhilAshodariya)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
