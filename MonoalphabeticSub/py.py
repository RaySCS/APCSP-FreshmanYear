
letters = []#This just stores the letters of the alphabet, compare to as well
letters2 = []#This stores the letters which I will take away from
letters3 = []#This stores the new mixed alphabet and compares as well

keyword = input("What would you like for the keyword to be?")

for a in range(26):
    letters.append(chr(a + 65))#This is the regular alphabet

for a in range(len(keyword)):
    letters2.append(keyword[a])#Here the letters which the keyword's length is are added
    letters3.append(keyword[a])#Here, The keyword is added in to begining in order to correctly en/decrypt

for a in range(26-len(keyword)):
    letters2.append(chr(a+65))#In order to accomadate for whole alphabet, without this just keyword is added(not wanted)

for a in range(len(keyword), len(letters2)):
        if letters2[a] not in keyword:
            letters3.append(letters2[a])#Using the concept we learned at end of class about not needing to use nested for loop, just comparing


for a in range(len(keyword)):
    letters3.append(chr((91-len(keyword)) + a))#Here is where the letters of the length of the keyword are added to finish alphabet(necc. for comparison)



def encrypt(word):
    dictionary = dict(zip(letters, letters3))  # Zipping together the two arrays, in order to see what letter goes with what.
    result = ""
    for letter in word:
        result = result + dictionary[letter]
    return(result)


def decrypt(word):
    dictionary = dict(zip(letters3, letters))  # Just backwards
    result = ""
    for letter in word:
        result = result + dictionary[letter]
    return (result)



temp = input("Type e for encrypt or d for decrypt")

if temp=="e":
    word = input("What word you want to encrypt")#This is just a variable, different from parameter
    print(encrypt(word))
else:
    code = input("What code do you want to decrypt?")
    print(decrypt(code))





