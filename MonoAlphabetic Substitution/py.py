letters = []
letters2 = []

temp = input("Type e for encrypt or d for decrypt")
keyword = "MANUSCRIPT"
for i in range(26):
    letters.append(chr(i + 65))

for i in range(26):
    letters2.append(chr(len(keyword) + i + 65))#Accounting for 10 letters

wordsIn = list(letters2)
def encrypt(word):
    dictionary = dict(zip(letters2, letters))
    result = ""
    for letter in word:
        result = result + dictionary[letter]
    if wordsIn in letters2:
        letters2.remove(word)
        result-=dictionary[word]
    if wordsIn not in letters2:
        letters2.append(word)
        result+=dictionary[letter]
    return(result)


def decrypt(word):
    dictionary = dict(zip(letters, letters2))
    result = ""
    for letter in word:
        result = result + dictionary[letter]
    if letter not in keyword:
        result+=result + dictionary[letter]
    return (result)


if temp=="e":
    word = input("What word you want to encrypt")#This is just a variable, different from parameter
    print(encrypt(word))
else:
    code = input("What code do you want to decrypt?")
    print(decrypt(code))





