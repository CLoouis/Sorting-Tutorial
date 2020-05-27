def bubbleSorting(listSorting):
    # Kompleksitas waktu : O(n^2)
    # return array of int[] mulai dari langkah 0,1,2..dst
    size = len(listSorting)-1
    # Array untuk menampung tiap langkah
    steplist = []
    # langkah 0 => listSorting awal
    steplist.append(listSorting[:])
    # SORTING ALGORITHM
    for i in range(size, 0, -1):
        for j in range(0, i):
            if listSorting[j] > listSorting[j+1]:
                # swap
                temp = listSorting[j+1]
                listSorting[j+1] = listSorting[j]
                listSorting[j] = temp

            # masukin copy of listSorting tiap langkah ke steplistSorting
            steplist.append(listSorting[:])

    return steplist

