import copy

def bubbleSort(restemp, arr, asc):
    n = len(arr)

    # lakukan iterasi pada seluruh elemen array
    for i in range (n):
        swapped = True
        for j in range (0, n-i-1):
            temp = []
            temp.append("Checking "+ str(arr[j]) + " and " + str(arr[j+1]))
            if(asc):
                if(arr[j]> arr[j+1]): #melakukan pertukaran jika elemen ke-j lebih besar dari elemen j+1
                    swapped = False
                    temp.append("swap " + str(arr[j])+ " and " + str(arr[j+1]))
                    temp.append(str(arr[j])+ " > "+ str(arr[j+1]))
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                else:
                    temp.append("none")
                    temp.append(str(arr[j])+ " and " + str(arr[j+1]) + " already ordered")

            temp2= []
            temp2 = copy.deepcopy(arr)
            temp.append(temp2)
            restemp.append(temp)

        # Jika array dipastikan sudah terurut, tidak perlu melanjutkan iterasi dan swap
        if(swapped):
            break

