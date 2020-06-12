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
    if (!validity) {
      return steps
    }
    steps.push({ Step: count, Penjelasan: 'Inisialisasi Array', Status: 'Initialization', Array: this.convertToString(arr.slice(0)) })
    const n = arr.length
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i - 1; j++) {
        var message = 'Bandingkan antara ' + arr[j] + ' dan ' + arr[j + 1]
        var comparison = 'Apakah ' + arr[j] + ' > ' + arr[j + 1] + ' ?'
        var action
        var IsSwap
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
        count++
        message = message + '\n' + comparison + '\n' + action
        const temp = arr.slice(0)
        steps.push({ Step: count, Penjelasan: message, Status: IsSwap, Array: this.convertToString(temp) })
      }
    }
    return steps
  }
}
