var steps = [];

function mergeSort(arr, i, j) {
    if(i < j) {
        var k = Math.floor((i+j)/2);
        mergeSort(arr, i, k);
        mergeSort(arr, k + 1, j);
        merge(arr, i, k, j);
    }
}

function merge(arr, left, mid, right) {

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

var arr = [100,2,33,14,1];
mergeSort(arr,0,4);
console.log(arr);