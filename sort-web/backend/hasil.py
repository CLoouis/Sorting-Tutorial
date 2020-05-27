from bubbleSort import bubbleSorting
from mergeSort import hasilMergeSort
from numbersConverter import listToNumbers


def hasil(algo, listSort):
    listHasil = []
    listOfHasil = []
    hasil = {
        "step": None,
        "result": None,
        "kompleksitas": None
    }
    if(algo == 'BS'):
        listHasil = bubbleSorting(listSort)

    else:
        listHasil = hasilMergeSort(listSort)

    # masukkan ke map hasil
    for i in range(len(listHasil)):
        hasil["step"] = i
        hasil["result"] = listToNumbers(listHasil[i])
        listOfHasil.append(hasil.copy())

    return listOfHasil
