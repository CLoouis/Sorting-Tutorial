from util import *

def mergeSort(arr,result):
    if len(arr) <= 10:
        if len(arr) >1:
            jalan = []
            ngapain = ""
            hasil = ""

            mid = len(arr)//2
            L = arr[:mid]
            R = arr[mid:]

            ngapain = "Membagi Array " + listToNumbers(arr)
            jalan.append(ngapain)
            hasil = listToNumbers(L) + " dan " + listToNumbers(R)
            jalan.append(hasil)

            for jal in jalan:
                result.append(jal)

            mergeSort(L,result)
            mergeSort(R,result)
    
            i = j = k = 0
            
            ngapain = "Menggabungkan Array " + listToNumbers(L) + " dan " + listToNumbers(R)
            jalan.append(ngapain)

            while i < len(L) and j < len(R): 
                if L[i] < R[j]: 
                    arr[k] = L[i] 
                    i+= 1
                else: 
                    arr[k] = R[j] 
                    j+= 1
                k+= 1
            
            while i < len(L): 
                arr[k] = L[i] 
                i+= 1
                k+= 1
            
            while j < len(R): 
                arr[k] = R[j] 
                j+= 1
                k+= 1

            hasil = listToNumbers(arr)
            jalan.append(hasil)

            for jal in jalan:
                result.append(jal)

    return (result)

def splitResult(result):
    jalan = []
    jalanKe = []
    jalanNgapain = []
    jalanSolusi = []

    for i in range(len(result)//2):
        jalanKe.append(i+1)

    for i in range(len(result)):
        if i % 2 == 0:
            jalanNgapain.append(result[i])
        else:
            jalanSolusi.append(result[i])

    jalan.append(jalanKe)
    jalan.append(jalanNgapain)
    jalan.append(jalanSolusi)

    return jalan