import copy
def bubbleSort(array):
    N = len(array)
    steps = []
    results=[]
    actions=[]
    for step in range(N):
        for i in range(N-1):
            if (array[i] > array[i+1]):
                temp = array[i]
                array[i] =  array[i+1]
                array[i+1] = temp
                action = 'Swapping ' + str(array[i]) + ' and ' + str(array[i+1])
                actions.append(action)
                new_array = copy.deepcopy(array)
                results.append(new_array)

    for i in range(len(actions)):
        steps.append(i+1)

    for i in range(len(results)):
        results[i] = str(results[i]) + ' '
    res = []
    res.append(steps)
    res.append(actions)
    res.append(results)
    return res