questioning = "true"

const beschikbaar = ["fris", "wijn", "bier"];
const bestelt = [];
const total = [];

while (questioning == "true") {
    vraag = prompt("Wat wilt u bestellen?");
    vraag = vraag.toLowerCase()

    if (beschikbaar.includes(vraag)) {
        aantal = Number(prompt("hoeveel glazen " + vraag + " wilt u hebben?"));

        if (total[vraag] == undefined) {
            total[vraag] = aantal;
            bestelt.push(vraag)
        } else {
            total[vraag] += aantal;
        }

        more = prompt("wilt u meer bestellen?");
        if (more == "N" || more == "n" || more == "Nee" || more == "nee") {
            questioning = "false";
        } else {
            questioning = "true";
        }
    } else {
        alert("foutmelding: dit ken ik niet");   
    }
}

console.log(bestelt);
console.log(total)

testing = bestelt.entries();

for (i = 0; i < testing; i++){
    console.log(i)
}