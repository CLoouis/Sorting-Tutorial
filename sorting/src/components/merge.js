export var steps = [];

function createSteps(first, second, arr) {
  var copies = [];
  for (var i = 0; i < arr.length; ++i) {
    copies.push(arr[i]);
  }
  var tuple = Object.freeze({ left: first, right: second, stats: copies });
  steps.push(tuple);
}

export function sort(arr, i, j) {
  if (i == 0 && j == arr.length - 1) {
    steps = [];
  }

  if (i < j) {
    var k = Math.floor((i + j) / 2);
    createSteps(i, j, arr);
    sort(arr, i, k);
    sort(arr, k + 1, j);
    merge(arr, i, k, j);
    createSteps(i, j, arr);
  } else {
    // Most likely case i == j
    createSteps(i, j, arr);
  }
}

export function merge(arr, left, mid, right) {
  var brr = copyArray(arr);
  var left1 = left;
  var left2 = mid + 1;
  var i = left;

  while (left1 <= mid && left2 <= right) {
    if (arr[left1] <= arr[left2]) {
      brr[i] = arr[left1];
      left1++;
    } else {
      brr[i] = arr[left2];
      left2++;
    }
    i++;
  }

  while (left1 <= mid) {
    brr[i] = arr[left1];
    left1++;
    i++;
  }

  while (left2 <= right) {
    brr[i] = arr[left2];
    left2++;
    i++;
  }

  for (i = left; i <= right; ++i) {
    arr[i] = brr[i];
  }
}

function copyArray(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; ++i) {
    temp.push(arr[i]);
  }
  return temp;
}

export function update(this_step, array_btn, ending) {
  var i = 0;
  if (ending) {
    for (i = 0; i < this_step.stats.length; ++i) {
      array_btn[i].style.color = "white";
      array_btn[i].style.backgroundColor = "mediumaquamarine";
      array_btn[i].style.borderColor = "mediumaquamarine";
      array_btn[i].innerHTML = this_step.stats[i];
    }
  } else {
    for (i = 0; i < this_step.stats.length; ++i) {
      if (i >= this_step.left && i <= this_step.right) {
        array_btn[i].style.color = "white";
        array_btn[i].style.backgroundColor = "lightcoral";
        array_btn[i].style.borderColor = "lightcoral";
      } else {
        array_btn[i].style.color = "black";
        array_btn[i].style.backgroundColor = "white";
        array_btn[i].style.borderColor = "black";
      }
      array_btn[i].innerHTML = this_step.stats[i];
    }
  }
}
// arr = [38,27,43,3,9,82,30];
// sort(arr, 0, arr.length - 1);
// console.log(arr);
// console.log(steps.length);
// console.log(steps);
