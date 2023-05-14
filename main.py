# is palindrome

text = input("masukan kalimat: ",)


def isPalindrome(text: str):
    revsrText = text[::-1].lower()
    for x in text.lower():
        for y in revsrText:
            if x == y:
                return True
            else:
                return False


print(isPalindrome(text))
