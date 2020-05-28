export var steps = [];

export function createSteps(first, second, arr) {
  var copies = [];
  for (var i = 0; i < arr.length; ++i) {
    copies.push(arr[i]);
  }
  var tuple = Object.freeze({ left: first, right: second, stats: copies });
  steps.push(tuple);
}

export function bubblesort(arr) {
  steps = [];
  var size = arr.length;
  for (var i = 0; i < size; ++i) {
    for (var j = 0; j < size - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        createSteps(j, j + 1, arr);
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  createSteps(11, 11, arr);
}
