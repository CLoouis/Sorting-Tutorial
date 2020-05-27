
listOfHasil = []


def hasilMergeSort(listSort):
    listOfHasil.append(listSort[:])
    mergeSorting(listSort)
    return listOfHasil


def mergeSorting(listSort):
    # I.S. : listSort tidak terurut merupakan list of integer
    # F.S. : listSort terurut
    temp=[]
    # Kompleksitas waktu : O(n log n)
    # return array of int[] mulai dari langkah 1..dst
    left, right = divideList(listSort)
    size = len(listSort)
    if(size == 1):
        return listSort
    else:
        # sort left side
        leftSorted = mergeSorting(left)
        
        # sort right side
        rightSorted = mergeSorting(right)
        
        # combine leftSorted array and rightSorted array into listSorted
        listSorted = mergeSubList(listSort, leftSorted, rightSorted)
        listOfHasil.append(listSorted[:])

    return listSorted


def divideList(listSort):
    # mengembalikan tuple list kiri dan kanan
    # yang merupakan sub list dari list
    size = len(listSort)
    left = []
    right = []
    if(size % 2 == 0):
        for i in range(int(size/2)):
            left.append(listSort[i])
        for i in range(int(size/2), size):
            right.append(listSort[i])
    else:
        for i in range(int(size/2)+1):
            left.append(listSort[i])
        for i in range(int(size/2)+1, size):
            right.append(listSort[i])

    return left, right


def mergeSubList(listSort, left, right):
    # I.S. : left list dan right list sudah terurut, listSort belum terurut
    # F.S. : listSort terurut

    sizeLeft = len(left)
    sizeRight = len(right)
    l = 0  # increment untuk left list
    r = 0  # increment untuk right list
    i = 0  # increment untuk list
    while((l < sizeLeft)and(r < sizeRight)):
        if(left[l] <= right[r]):
            listSort[i] = left[l]
            l += 1
        else:
            listSort[i] = right[r]
            r += 1
        i += 1
    while(l < sizeLeft):
        listSort[i] = left[l]
        l += 1
        i += 1
    while(r < sizeRight):
        listSort[i] = right[r]
        r += 1
        i += 1
    return listSort
