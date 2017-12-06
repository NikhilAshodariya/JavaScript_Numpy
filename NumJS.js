function get_Dimensions(data) {
  function get_Dim(data, dim, i = 0) {
    if (typeof(data) == "object") {
      dim[i] = data.length;
      get_Dim(data[0], dim, ++i);
    } else if (typeof(data) == "number") {
      return 1;
    } else {
      return undefined;
    }
  }
  var dimen = [];
  get_Dim(data, dimen);
  return dimen;
}

function check_all_dimensions_same(firstArray, secondArray) {
  var firstSize = get_Dimensions(firstArray);
  var secondSize = get_Dimensions(secondArray);
  // console.log(firstSize);
  // console.log(secondSize);
  if (firstSize.length != secondSize.length) {
    // console.log("in if loop");
    return false;
  } else {
    for (var i = 0; i < firstArray.length; i++) {
      if (firstSize[i] != secondSize[i]) {
        return false;
      }
    }
    return true;
  }
}

function add_two_array(data_array, to_add, to_store) {
  for (i in data_array) {
    if (typeof(data_array[i]) == 'number') {
      to_store[i] = data_array[i] + to_add[i];
    } else if (typeof(data_array[i] == 'object')) {
      add_two_array(data_array[i], to_add[i], to_store[i]);
    }
  }
}

function add_number_and_array(data_array, to_add, to_store) {
  for (i in data_array) {
    if (typeof(data_array[i]) == 'object') {
      var newdata = [];
      to_store[i] = add_number_and_array(data_array[i], to_add, newdata);
    } else {
      to_store[i] = data_array[i] + to_add;
    }
  }
  return to_store;
}

function add_nonEqual_array(data_array, to_add, to_store) {
  if (data_array.length == to_add.length) {
    //column wise addition dude you need

  }
}

function inner_add(data_array, to_add, to_store) {
  if (typeof(to_add) == 'number') {
    return add_number_and_array(data_array, to_add, to_store);
  } else if (typeof(to_add) == 'object') {
    if (check_all_dimensions_same(data_array, to_add)) {
      add_two_array(data_array, to_add, to_store);
      return to_store;
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

var e = [
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
var res = b.slice();
console.log(b);
console.log(add_two_array(b, e, res));
console.log(res);
/*
var d = [
  // (3,4,4)
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
]
*/

// var res = add([1], 2);
// var res = get_Dimensions(c);
// console.log(res);
// var e = [
//   [1],
//   [2],
//   [3]
// ];

// console.log(b);
// console.log(a);
