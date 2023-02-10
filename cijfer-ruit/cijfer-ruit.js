chosenNumber = prompt("Geef een getal in");
const numberlist = []
last = ""

for (i = 0; i < chosenNumber; i++){
    number= i+1 + "-";
    last = last + number
    trimmedNumber = last.slice(0,-1)
    numberlist[i] = trimmedNumber
    document.write(trimmedNumber + "<br>")
}

numberlist.reverse()
for (i = 1; i < chosenNumber; i++){
    document.write(numberlist[i]+ "<br>")
}