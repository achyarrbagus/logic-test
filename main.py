# Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

text = "NEGIE123"


def rve(txt: str):
    str = []
    num = []
    result = ""
    for x in txt:
        if x.isdigit():
            num.append(x)
        else:
            str.append(x)
    result += "".join(reversed(str)) + "".join(num)
    return result


print(rve(text))
