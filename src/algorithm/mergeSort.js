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
  combine (T, i, k, j, steps, count) {
    var A = []
    var kiri = i
    var kanan = k + 1
    var loop
    while ((kiri <= k) && (kanan <= j)) {
      if (T[kiri - 1] < T[kanan - 1]) {
        A.push(T[kiri - 1])
        kiri = kiri + 1
      } else {
        A.push(T[kanan - 1])
        kanan = kanan + 1
      }
    }
    while (kiri <= k) {
      A.push(T[kiri - 1])
      kiri = kiri + 1
    }
    while (kanan <= j) {
      A.push(T[kanan - 1])
      kanan = kanan + 1
    }
    var countA = 0
    for (loop = i; loop <= j; loop++) {
      T[loop - 1] = A[countA]
      countA++
    }
    const temp1 = this.convertToString(T.slice(i - 1, k))
    const temp2 = this.convertToString(T.slice(k, j))
    var message = 'Gabungkan dua sub-array menjadi satu' + '\n' + temp1 + ' merge dengan ' + temp2
    var status = 'Combine'
    const fulltemp = T.slice(i - 1, j)
    count[0] = count[0] + 1
    steps.push({ Step: count[0], Penjelasan: message, Status: status, Array: this.convertToString(fulltemp) })
  },
  MergeSort (T, i, j, steps, count) {
    if (i < j) {
      const k = Math.floor((i + j) / 2)

      // Pecah array menjadi 2 bagian sama rata
      const message = 'Pecah array menjadi dua bagian sama rata'
      const status = 'Divider'
      const temp1 = T.slice(i - 1, k)
      const temp2 = T.slice(k, j)
      const fulltemp = this.convertToString(temp1) + ' dan ' + this.convertToString(temp2)
      count[0] = count[0] + 1
      steps.push({ Step: count[0], Penjelasan: message, Status: status, Array: fulltemp })
      this.MergeSort(T, i, k, steps, count)
      this.MergeSort(T, k + 1, j, steps, count)

      // Gabung array yang sudah terurut sebelumnya
      this.combine(T, i, k, j, steps, count)
    }
  },
  MainMergeSort (charArray) {
    var i
    var arr = []
    for (i = 0; i < charArray.length; i++) {
      arr.push(parseInt(charArray[i]))
    }
    var steps = []
    var count = [0]
    steps.push({ Step: count[0], Penjelasan: 'Inisialisasi Array', Status: 'Initialization', Array: this.convertToString(arr.slice(0)) })
    const n = arr.length
    this.MergeSort(arr, 1, n, steps, count)
    return steps
  }
}
