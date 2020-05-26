def mergeSort(arr, asc):
    if len(arr) >1: 
        mid = len(arr)//2 #Finding the mid of the array 
        arrLeft = arr[:mid] # Dividing the array elements  
        print("Split", arr, "into:")
        print(arrLeft)
        arrRight = arr[mid:] # into 2 halves 
        print(arrRight)

  
        mergeSort(arrLeft, asc) # Sorting the first half 
        mergeSort(arrRight, asc) # Sorting the second half 
  
        i = 0
        j = 0
        k = 0
          
        # Copy data to temp arrays L[] and R[] 
        while (i < len(arrLeft) and j < len(arrRight)): 
            if(asc):
                if (arrLeft[i] < arrRight[j]):
                    arr[k] = arrLeft[i]
                    i += 1
                else:
                    arr[k] = arrRight[j]
                    j+=1
            else:
                if(arrLeft[i] > arrRight[j]):
                    arr[k] = arrLeft[i]
                    i += 1
                else: 
                    arr[k] = arrRight[j]
                    j+=1
            
            k+=1
            
          
        # Checking if any element was left 
        while i < len(arrLeft): 
            arr[k] = arrLeft[i] 
            i+=1
            k+=1
          
        while j < len(arrRight): 
            arr[k] = arrRight[j] 
            j+=1
            k+=1

        print("Merging", arrLeft, arrRight)    
        print(arr)
        

arr = [10,2,4,1,-1]
mergeSort(arr, False)