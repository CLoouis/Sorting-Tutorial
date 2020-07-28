from bubbleSort import *
from mergeSort import *
from util import *

def hasil(algo, listSort):
    listHasil = []
    listHasilMS = []
    listOfHasil = []
    hasil = {
        "step": None,
        "action":None,
        "result": None,
        "kompleksitas": None
    }
    if(algo == 'BS'):
        listHasil = bubbleSort(listSort)
    else:
        listHasilMS = mergeSort(listSort,listHasilMS)
        listHasil = splitResult(listHasilMS)

    for i in range(len(listHasil[0])):
        hasil["step"] = listHasil[0][i]
        hasil["action"] = listHasil[1][i]
        hasil["result"] = listHasil[2][i]
        listOfHasil.append(hasil.copy())

    return listOfHasil
