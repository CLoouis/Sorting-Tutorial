// MergeSort.js
// Contain Merge Sort algorithm written in JavaScript

export default {
  // Return string contain array value
  convertToString (arr) {
    var i
    var str = '['
    for (i = 0; i < arr.length - 1; i++) {
      str = str + arr[i] + ', '
    }
    str = str + arr[arr.length - 1] + ']'
    return str
  },

  // Combine two sub-array into one sorted array
  combine (T, i, k, j, steps, count) {
    var A = []
    var kiri = i
    var kanan = k + 1
    var loop

    // Push the element from both sub-array one by one into new sorted array
    while ((kiri <= k) && (kanan <= j)) {
      // Compare the value of kth-element and jth-element
      // If the kth element smaller than jth element, push it first into new sorted array
      if (T[kiri - 1] < T[kanan - 1]) {
        A.push(T[kiri - 1])
        kiri = kiri + 1
      } else {
        A.push(T[kanan - 1])
        kanan = kanan + 1
      }
    }

    // Push the rest of the left-side sub-array if the right-side sub-array is already empty.
    while (kiri <= k) {
      A.push(T[kiri - 1])
      kiri = kiri + 1
    }

    // Push the rest of the right-side sub-array if the left-side sub-array is already empty.
    while (kanan <= j) {
      A.push(T[kanan - 1])
      kanan = kanan + 1
    }

    // Change the base array with new sorted array
    var countA = 0
    for (loop = i; loop <= j; loop++) {
      T[loop - 1] = A[countA]
      countA++
    }

    // Add new step into array of steps
    const leftSide = this.convertToString(T.slice(i - 1, k))
    const rightSide = this.convertToString(T.slice(k, j))
    var message = 'Gabungkan dua sub-array menjadi satu' + '\n' + leftSide + ' merge dengan ' + rightSide
    var status = 'Combine'
    const newArray = T.slice(i - 1, j)
    count[0] = count[0] + 1
    steps.push({ Step: count[0], Penjelasan: message, Status: status, Array: this.convertToString(newArray) })
  },

  // Sort int array T with Merge Sort
  MergeSort (T, i, j, steps, count) {
    if (i < j) {
      const k = Math.floor((i + j) / 2)

      // Divide an array into two sub-array
      const message = 'Pecah array ' + this.convertToString(T.slice(i - 1, j)) + ' menjadi dua bagian'
      const status = 'Divide & Conquer'
      const temp1 = T.slice(i - 1, k)
      const temp2 = T.slice(k, j)
      const fulltemp = this.convertToString(temp1) + ' dan ' + this.convertToString(temp2)
      count[0] = count[0] + 1
      steps.push({ Step: count[0], Penjelasan: message, Status: status, Array: fulltemp })

      // Merge Sort the two sub-array
      this.MergeSort(T, i, k, steps, count)
      this.MergeSort(T, k + 1, j, steps, count)

      // Combine two sub-array into one sorted sub-array
      this.combine(T, i, k, j, steps, count)
    }
  },

  // Sort charArray with Merge Sort
  MainMergeSort (charArray) {
    var i
    var arr = []
    var steps = []
    var validity = true

    // Check whether the charArray contain NaN or not
    for (i = 0; i < charArray.length; i++) {
      const elmt = parseInt(charArray[i])
      if (isNaN(elmt)) {
        validity = false
        break
      } else {
        arr.push(elmt)
      }
    }

    // If the charArray contain NaN, return steps with empty array
    if (!validity) {
      return steps
    }
    var count = [0]
    steps.push({ Step: count[0], Penjelasan: 'Inisialisasi Array', Status: 'Initialization', Array: this.convertToString(arr.slice(0)) })
    const n = arr.length

    // Execute Merge Sort algorithm
    this.MergeSort(arr, 1, n, steps, count)
    return steps
  }
}
