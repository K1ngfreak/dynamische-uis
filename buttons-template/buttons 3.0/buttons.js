function buttonChange(button) {
    if (list[button] == undefined) {
        list[button] = 1;
        document.getElementById(button).style.backgroundColor = "red"
    } else {
        if (list[button] == 1) {
            document.getElementById(button).style.backgroundColor = "purple"
        } else if (list[button] == 2) {
            document.getElementById(button).style.backgroundColor = "blue"
        } else {
            document.getElementById(button).style.backgroundColor = "black"
            document.getElementById(button).disabled = true;
        }
        list[button] += 1;
    }
    console.log(list)
}

const list = []

totalButton = Number(prompt("how many buttons do you want?"))

br = 5

if (totalButton > 50) {
    br = Math.ceil(totalButton/10)
}

x = 0

let body = document.getElementsByTagName("body")[0];

for (i = 1; i <= totalButton; i++) {
    button = document.createElement("button");
    button.innerHTML = "Button "+i;
    button.id = "Button "+i
    body.appendChild(button);
    button.addEventListener ("click", function() {
    buttonChange(this.innerHTML);
    });

    x++

    if (x == br) {
        x = 0
        document.write("<br>")
    }
}