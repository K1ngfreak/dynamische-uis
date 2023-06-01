function enter() {
    para = document.createElement("p")
    div.appendChild(para)
}

function submit(c) {
    div = document.getElementsByTagName("div")[0];
    button = document.createElement("button");
    button.innerHTML = "guess";
    button.disabled = true
    button.id = "guess"+c
    div.appendChild(button);
    button.addEventListener ("click", function() {
        guessing(this);
    })
}

function control(c) {
    div = document.getElementsByTagName("div")[0];
    button = document.createElement("button");
    button.innerHTML = "";
    button.style.padding = "13px"
    button.style.height = "20px"
    button.style.width = "20px"
    button.disabled = true
    button.id = "control"+c
    div.appendChild(button);
}

function startGame() {
    c = 12
    document.getElementById("start").innerHTML = "start a new game"
    document.getElementById("start").style.right = "265px"

    if (y > 0) {
        for (i=1; i <= 4; i++) {
            document.getElementById("code"+i).remove()
        }
        for (i=1; i <= 48; i++) {
            document.getElementById(i).remove()
        }
        for (i=1; i <= 12; i++) {
            document.getElementById("control"+i).remove()
            document.getElementById("submit"+i).remove()
        }
    }
    x = 0
    for (i=1; i <= 4; i++) {
        div = document.getElementsByTagName("div")[0];
        button = document.createElement("button");
        button.innerHTML = "";
        button.style.padding = "13px"
        button.style.height = "20px"
        button.style.width = "20px"
        button.id = "code"+i
        div.appendChild(button);
    }
    enter()
    for (i=48; i > 4; i--) {
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
            control(c)
            submit(c)
            enter()
            c -= 1
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
        control(c)
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

function guessing() {

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


for (i=0; i < 4; i++) {
    if (guess[i] == code[i]) {
        document.getElementById(option + i).style.backgroundColor = "white"
    } else {
        for (x = 0; x < 4; x++) {
            if (guess[i] == code[x]) {
                document.getElementById(option + i).style.backgroundColor = "black"
                break
            }
        }
    }
}