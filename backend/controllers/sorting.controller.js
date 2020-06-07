exports.prosesBubbleSort = (req, res) => {
  const { angka } = req.body;
  let result = [];
  let swap;
  do {
    swap = false;
    for (let i = 0; i < angka.length - 1; i++) {
      if (angka[i] > angka[i + 1]) {
        let temp = angka[i];
        angka[i] = angka[i + 1];
        angka[i + 1] = temp;
        swap = true;
      }
      result.push([...angka]);
    }
  } while (swap);
  res.json({ result });
  return (result = []);
};

exports.prosesMergeSort = (req, res) => {
  const { angka } = req.body;
  mergeSort(angka);
  res.json({
    result: resultMergeSort,
  });
  return (resultMergeSort = []);
};

let resultMergeSort = [];
const mergeSort = (arrAngka) => {
  if (arrAngka.length < 2) return arrAngka;
  let midPoint = Math.floor(arrAngka.length / 2);
  let leftArrAngka = arrAngka.slice(0, midPoint);
  let rightArrAngka = arrAngka.slice(midPoint, arrAngka.length);
  resultMergeSort.push([...leftArrAngka], [...rightArrAngka]);
  return merge(mergeSort(leftArrAngka), mergeSort(rightArrAngka));
};

const merge = (leftArrAngka, rightArrAngka) => {
  let sortedArrAngka = [];
  while (leftArrAngka.length && rightArrAngka.length) {
    if (leftArrAngka[0] <= rightArrAngka[0]) {
      sortedArrAngka.push(leftArrAngka.shift());
    } else {
      sortedArrAngka.push(rightArrAngka.shift());
    }
  }

  while (leftArrAngka.length) {
    sortedArrAngka.push(leftArrAngka.shift());
  }
  while (rightArrAngka.length) {
    sortedArrAngka.push(rightArrAngka.shift());
  }
  resultMergeSort.push([...sortedArrAngka]);
  return sortedArrAngka;
};
