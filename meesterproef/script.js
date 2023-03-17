function startGame() {
    document.getElementById("start").innerHTML = "start a new game"
    document.getElementById("start").style.right = "260px"

    if (y > 0) {
        for (i=1; i <= 52; i++) {
            document.getElementById(i).remove()
        }
    }
    x = 0
    for (i=52; i > 4; i--) {
        x++
        div = document.getElementsByTagName("div")[0];
        button = document.createElement("button");
        button.innerHTML = "";
        button.style.padding = "13px"
        button.style.height = "20px"
        button.style.width = "20px"
        button.id = i
        button.disabled = true
        div.appendChild(button);
        button.addEventListener ("click", function() {
            colorChange(this);
        })
        if (x == 4) {

            para = document.createElement("p")
            div.appendChild(para)
            x = 0
        }
        if (i == 5) {
            for (u=4; u > 0; u--) {
            div = document.getElementsByTagName("div")[0];
            button = document.createElement("button");
            button.innerHTML = "";
            button.style.padding = "13px"
            button.style.height = "20px"
            button.style.width = "20px"
            button.id = u
            div.appendChild(button);
            button.addEventListener ("click", function() {
                colorChange(this);
            })
            }
        }
    }
    y += 1
}

y = 0

function colorChange(button) {
    console.log(button)
    if (document.getElementById(button.id).style.backgroundColor == "" || document.getElementById(button.id).style.backgroundColor == "red"){
        document.getElementById(button.id).style.backgroundColor = "white"
    } else {
        for (i=0; i < colors.length; i++) {
            if (colors[i] == button.style.backgroundColor) {
                button.style.backgroundColor=colors[i+1]
                break
            }
        }
    }
}

const colors = ["white", "blue", "orange", "yellow", "green", "red"]
const code = []
const guess = []

// random number code generator
for (i=0; i < 4; i++) {
    randomColor = Math.floor(Math.random()*colors.length)
    code.push(colors[randomColor])
}

console.log(code)

div = document.getElementsByTagName("div")[0];
button = document.createElement("button");
button.innerHTML = "Start a game";
button.id = "start"
div.appendChild(button);
button.addEventListener ("click", function() {
    startGame();
})