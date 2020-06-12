// BubbleSort.js
// Contain Bubble Sort algorithm written in JavaScript

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

  // Sort charArray with Bubble Sort
  bubbleSort (charArray) {
    var i, j
    var arr = []

    // Check whether the charArray contain NaN or not
    var validity = true
    for (i = 0; i < charArray.length; i++) {
      const elmt = parseInt(charArray[i])
      if (isNaN(elmt)) {
        validity = false
        break
      } else {
        arr.push(elmt)
      }
    }
    var steps = []
    var count = 0

    // If the charArray contain NaN, return steps with empty array
    if (!validity) {
      return steps
    }

    // If the charArray is valid, execute Bubble Sort array
    steps.push({ Step: count, Penjelasan: 'Inisialisasi Array', Status: 'Initialization', Array: this.convertToString(arr.slice(0)) })
    const n = arr.length
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i - 1; j++) {
        // Initialize the sorting step information
        var message = 'Bandingkan antara ' + arr[j] + ' dan ' + arr[j + 1]
        var comparison = 'Apakah ' + arr[j] + ' > ' + arr[j + 1] + ' ?'
        var action
        var IsSwap

        // Swap two elements if the first element is greater than next element
        if (arr[j] > arr[j + 1]) {
          action = 'Ya, tukar posisi ' + arr[j] + ' dengan ' + arr[j + 1]
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          IsSwap = 'Swapped'
        } else {
          action = 'Tidak, maka ' + arr[j] + ' dan ' + arr[j + 1] + ' sudah terurut'
          IsSwap = 'No Swap'
        }

        // Add the sorting steps information into array of steps
        count++
        message = message + '\n' + comparison + '\n' + action
        const temp = arr.slice(0)
        steps.push({ Step: count, Penjelasan: message, Status: IsSwap, Array: this.convertToString(temp) })
      }
    }
    return steps
  }
}
