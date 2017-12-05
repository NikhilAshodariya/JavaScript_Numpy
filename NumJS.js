function inner_add(data_array, to_add, to_store) {
  // var to_store = ;
  if (typeof(to_add) == 'number') {
    for (i in data_array) {
      if (typeof(data_array[i]) == 'object') {
        var newdata = [];
        to_store[i] = inner_add(data_array[i], to_add, newdata);
      } else {
        to_store[i] = data_array[i] + to_add;
      }
    }
    return to_store;
  } else if (typeof(to_add) == 'object') {
    if (to_add.length != data_array.length) {
      if (to_add.length != data_array[0].length) {
        throw new Error("Length of both the data is different");
      }
    } else {
      for (i in data_array) {
        to_store[i] = data_array[i] + to_add[i];
      }
      return to_store;
    }
  }
}

function add(data_array, to_add, can_replace) {

  var newdata;
  if (can_replace == false) {
    newdata = data_array.slice();
  } else if (can_replace == true) {
    newdata = data_array;
  } else {
    newdata = data_array.slice();
  }
  return inner_add(data_array, to_add, newdata);
}

// var a = [1, 2, 3, 4, 5];
// var re = add(a, [1, 2, 3, 4, 5], true);
var b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

var c = [
  [1],
  [2],
  [3]
];

/*
var d = [
  [
    //first dimension
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    //second dimension
    [0, 0, 0],
    [0, 0, 0],
    // [0, 0, 0]
  ],
  [
    //third dimension
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
]
*/

var res = add(b, c);
console.log(res);
// console.log(b);
// console.log(a);
