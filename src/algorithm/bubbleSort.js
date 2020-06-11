export default {
  convertToString (arr) {
    var i
    var str = '['
    for (i = 0; i < arr.length - 1; i++) {
      str = str + arr[i] + ', '
    }
    str = str + arr[arr.length - 1] + ']'
    return str
  },
  bubbleSort (charArray) {
    var i, j
    var arr = []
    for (i = 0; i < charArray.length; i++) {
      arr.push(parseInt(charArray[i]))
    }
    var steps = []
    var count = 0
    steps.push({ Step: count, Penjelasan: 'Inisialisasi Array', Status: 'No Swap', Array: this.convertToString(arr.slice(0)) })
    const n = arr.length
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i - 1; j++) {
        var message = 'Compare ' + arr[j] + ' and ' + arr[j + 1]
        var comparison = 'Is ' + arr[j] + ' > ' + arr[j + 1] + ' ?'
        var action
        var IsSwap
        if (arr[j] > arr[j + 1]) {
          action = 'Yes, swap ' + arr[j] + ' with ' + arr[j + 1]
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          IsSwap = 'Swapped'
        } else {
          action = 'No, it means ' + arr[j] + ' and ' + arr[j + 1] + ' ordered'
          IsSwap = 'No Swap'
        }
        count++
        message = message + '\n' + comparison + '\n' + action
        const temp = arr.slice(0)
        steps.push({ Step: count, Penjelasan: message, Status: IsSwap, Array: this.convertToString(temp) })
      }
    }
    return steps
  }
}
