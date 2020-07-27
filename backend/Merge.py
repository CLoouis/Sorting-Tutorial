def printArray(arr):
    N = len(arr)
    if (N != 0):
        for i in range(N):
            print(arr[i])
    

def mergeSort(arr, res): 
    if len(arr) > 1:
        temp = []
    

        mid = len(arr)//2 
        L = arr[:mid] 
        R = arr[mid:]
        step = 'Splitting ' + str(arr)
        result = str(L) + ' and ' + str(R)
        #print(step, 'to', result)
        #steps.append(step)
        #results.append(result)
        temp.append(step)
 
        temp.append(result)
        for tem in temp:
            res.append(tem)
        
        
    
        mergeSort(L, res) # Sorting the first half 
        mergeSort(R, res) # Sorting the second half
        
        
        i = j = k = 0
          
        # Copy data to temp arrays L[] and R[] 
        while i < len(L) and j < len(R): 
            if L[i] < R[j]: 
                arr[k] = L[i]
                i += 1
            else: 
                arr[k] = R[j]
                j += 1
                
            k += 1
            
          
        # Checking if any element was left 
        while i < len(L): 
            arr[k] = L[i] 
            i+= 1
            k+= 1
          
        while j < len(R): 
            arr[k] = R[j] 
            j+= 1
            k+= 1
        step = 'Combining ' + str(L) + ' and ' + str(R)
        result = str(arr) 
        #print(step, 'to', result)
        
        temp=[]
        #steps.append(step)
        #results.append(result)
        temp.append(step)
        temp.append(result)
        for tem in temp:
            res.append(tem)
   
        return (res)
        

def parseResult(arr):
    N = len(arr)
    steps = []
    actions = []
    results = []
    for i in range(N//2):
        steps.append(i+1)

    for i in range(N):
        if i % 2 == 0:
            actions.append(arr[i])
        else:
            results.append(arr[i])

    res = []
    res.append(steps)
    res.append(actions)
    res.append(results)

    return res

