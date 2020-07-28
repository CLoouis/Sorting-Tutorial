from util import *

def bubbleSort(arr):
    if (len(arr) <= 10):
        hasil = []
        jalanSolusi = []
        jalanKe = []
        jalanNgapain = []
        jalan = []
        n = len(arr) 
        k = 0
        ngapain = ""
        hasil = ""
        # Traverse through all array elements 
        for i in range(n): 
            # Last i elements are already in place 
            for j in range(0, n-i-1): 
                # traverse the array from 0 to n-i-1 
                # Swap if the element found is greater 
                # than the next element 
                if arr[j] > arr[j+1] : 
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                    k += 1
                hasil = listToNumbers(arr)
                jalanKe.append(k)
                jalanSolusi.append(hasil)
                ngapain = "Tukar " + str(arr[j]) + " dan " + str(arr[j+1]) + "."
                jalanNgapain.append(ngapain)
                jalan.append(jalanKe)
                jalan.append(jalanNgapain)
                jalan.append(jalanSolusi)
    return jalan

