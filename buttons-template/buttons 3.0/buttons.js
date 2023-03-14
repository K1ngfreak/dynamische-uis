function buttonChange(button) {
    for (i = 0; i <= list.length; i++) {
        console.log(i)
    }

    test = document.getElementById(button)
    style = getComputedStyle(test);
  
    console.log(style['background-color']);

    if (lightgreen == style['background-color']) {
        console.log(8)
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

const list = []
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
    button.id = "Button " + i
    body.appendChild(button);
    button.addEventListener ("click", function() {
    buttonChange(this.innerHTML);
    })
    if (x == br) {
        x = 0
        document.write("<br>")
    }
}