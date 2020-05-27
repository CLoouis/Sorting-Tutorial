def numbersToList(num):
    # Mengubah dari inputan user ('1,2,3,4,5') ke list [1,2,3,4,5] agar mudah diolah
    numList = [int(s) for s in num.split(',')]
    return numList


def listToNumbers(listOfNum):
    # Mengubah dari list [1,2,3,4,5] menjadi string ('1,2,3,4,5') agar lebih mudah dibaca oleh user
    strings = [str(x) for x in listOfNum]
    joinString = ", ".join(strings)

    return joinString
