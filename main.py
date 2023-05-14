# Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
# jika ada kata dengan panjang yang sama silahkan ambil salah satu

sentence = "Saya sangat senang mengerjakan soal algoritma"


def highest(txt: str):
    splt = txt.split(" ")
    result = splt[0]
    for x in splt:
        if len(x) > len(result):
            result = x
    return result


print(highest(sentence))
