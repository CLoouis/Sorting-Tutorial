import copy

def mergeSort(restemp, arr, asc):
    temp = []
    if len(arr) >1: 
        mid = len(arr)//2 # Mnecari bagian tengah dari array
        arrLeft = arr[:mid] # Memnabagi array menjadi 2 bagian (arrLeft dan arrRight)
        arrRight = arr[mid:] 
        temp.append("Split " + str(arr))
        temp.append("")
        temp.append("")
        arrtemp1 = copy.deepcopy(arrLeft)
        arrtemp2 = copy.deepcopy(arrRight)

        temp.append(str(arrtemp1) + "   " + str(arrtemp2))
        restemp.append(temp)
  
        mergeSort(restemp, arrLeft, asc) # Sorting the first half 
        mergeSort(restemp, arrRight, asc) # Sorting the second half 
  
        i = 0
        j = 0
        k = 0
        
        # Mulai melakukan merging kedua array arrLeft dan arrRight
        while (i < len(arrLeft) and j < len(arrRight)): 
            if(asc):
                if (arrLeft[i] < arrRight[j]):
                    arr[k] = arrLeft[i]
                    i += 1
                else:
                    arr[k] = arrRight[j]
                    j+=1
                k+=1
            
          
        # Memasukkan elemen yang tersisa di arrLeft dan arrRight
        while i < len(arrLeft): 
            arr[k] = arrLeft[i] 
            i+=1
            k+=1
          
        while j < len(arrRight): 
            arr[k] = arrRight[j] 
            j+=1
            k+=1
            print(arr)

        temp = []
        temp.append("Merging " + str(arrLeft) + " and " + str(arrRight))
        temp.append("")
        temp.append("")
        arrtemp3 = copy.deepcopy(arr)
        temp.append(str(arrtemp3))

        restemp.append(temp)

