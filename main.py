# factorial test


def factorial(num: int):
    result = 1
    if num <= 0:
        return result
    for x in range(num, 0, -1):
        result *= x
    return result


print(factorial(5))


# for x in range(1, 11, +1):
#     print(x)
