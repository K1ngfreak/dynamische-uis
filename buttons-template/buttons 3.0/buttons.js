function buttonChange(button) {
    for (i = 0; i < list.length; i++) {
        if (list[i] == button.style.backgroundColor) {
            button.style.backgroundColor=list[i+1]
            break
        } else if (button.style.backgroundColor == "black") {
            button.remove()
        }
    }

    // if (list[button] == undefined) {
    //     list[button] = 1;
    //     document.getElementById(button).style.backgroundColor = "red"
    // } else {
    //     if (list[button] == 1) {
    //         document.getElementById(button).style.backgroundColor = "purple"
    //     } else if (list[button] == 2) {
    //         document.getElementById(button).style.backgroundColor = "blue"
    //     } else {
    //         document.getElementById(button).style.backgroundColor = "black"
    //     }
    //     list[button] += 1;
    //     console.log(list)
    // }
}

const list = ["lightgreen", "red", "purple", "blue", "black"]
totalButton = Number(prompt("how many buttons do you want?"))
body = document.getElementsByTagName("body")[0];

br = 5
if (totalButton > 50) {
    br = Math.ceil(totalButton/10)
}

x = 0
for (i = 1; i <= totalButton; i++) {
    x++
    button = document.createElement("button");
    button.innerHTML = "Button " + i;
    button.id = "Button" + i
    button.style.backgroundColor="lightgreen"
    body.appendChild(button);
    button.addEventListener ("click", function() {
    buttonChange(this);
    })
    if (x == br) {
        x = 0
        document.write("<br>")
    }
}