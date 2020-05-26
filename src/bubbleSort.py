def bubbleSort(arr, asc):
    n = len(arr)

    for i in range (n):
        swapped = True
        for j in range (0, n-i-1):
            print("Checking:", arr[j], arr[j+1])
            if(asc):
                if(arr[j]> arr[j+1]):
                    swapped = False
                    print("swap", arr[j], arr[j+1])
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                else:
                    print(arr[j], arr[j+1], "already ordered")

            else:
                if(arr[j] < arr[j+1]):
                    swapped = False
                    print("swap", arr[j], arr[j+1])
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                else:
                    print(arr[j], arr[j+1], "already ordered")

            print(arr)
        if(swapped):
            print("array is already ordered!")
            break


arr = [10,2,4,1,-1]
bubbleSort(arr, True)