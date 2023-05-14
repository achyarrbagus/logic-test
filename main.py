# fizzbuzz test

def fizbuzz(num: int):
    result = []
    for x in range(1, num+1):
        if x % 3 == 0 and x % 5 == 0:
            result.append("fizbuzz")
        elif x % 3 == 0:
            result.append("fizz")
        elif x % 5 == 0:
            result.append("buzz")
        else:
            result.append(x)

    return result


print(fizbuzz(15))
