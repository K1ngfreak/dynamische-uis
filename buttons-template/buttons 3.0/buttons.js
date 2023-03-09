function buttonConstruct(button) {
    console.log(button)
}

totalButton = Number(prompt("how many buttons do you want?"))

br = 5

if (totalButton > 50) {
    br = Math.ceil(totalButton/10)
}

x = 0

for (i = 1; i < totalButton + 1; i++) {
    x++
    var button = document.createElement('button');
    var text = document.createTextNode("button " + i)
    button.appendChild(text)
    document.body.appendChild(button)
    if (x == br) {
        x = 0
        document.write("<br>")
    }
}