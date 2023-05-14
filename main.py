# looping without method

def loop(max, ind):
    result = ind
    if result == max:
        return result

    result += 1
    print(result)
    loop(max, result)


loop(10, 1)
