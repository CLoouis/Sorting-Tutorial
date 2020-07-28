def listToNumbers(arr):
    strings = [str(x) for x in arr]
    res = ", ".join(strings)
    return res

def numbersToList(arr):
    res = [int(s) for s in arr.split(',')]
    return res

