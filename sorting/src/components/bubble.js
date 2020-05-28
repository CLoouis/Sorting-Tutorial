export var steps = [];

function createSteps(first, second, arr) {
  var copies = [];
  for (var i = 0; i < arr.length; ++i) {
    copies.push(arr[i]);
  }
  var tuple = Object.freeze({ left: first, right: second, stats: copies });
  steps.push(tuple);
}

export function sort(arr) {
  steps = [];
  var size = arr.length;
  for (var i = 0; i < size; ++i) {
    for (var j = 0; j < size - i - 1; ++j) {
      createSteps(j, j + 1, arr);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        createSteps(j, j + 1, arr);
      }
    }
  }
  createSteps(11, 11, arr);
}

export function update(this_step, array_btn) {
  for (var i = 0; i < this_step.stats.length; ++i) {
    if (i == this_step.left || i == this_step.right) {
      array_btn[i].style.color = "white";
      array_btn[i].style.backgroundColor = "lightcoral";
      array_btn[i].style.borderColor = "lightcoral";
    } else if (this_step.left == 11 && this_step.right == 11) {
      array_btn[i].style.color = "white";
      array_btn[i].style.backgroundColor = "mediumaquamarine";
      array_btn[i].style.borderColor = "mediumaquamarine";
    } else {
      array_btn[i].style.color = "black";
      array_btn[i].style.backgroundColor = "white";
      array_btn[i].style.borderColor = "black";
    }
    array_btn[i].innerHTML = this_step.stats[i];
  }
}
