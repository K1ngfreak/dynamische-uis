const colors = ["white", "blue", "orange", "yellow", "green", "red"]
const code = []
// random number code generator
for (i=0; i < 4; i++) {
    randomColor = Math.floor(Math.random()*colors.length)
    code.push(colors[randomColor])
}

console.log(code)