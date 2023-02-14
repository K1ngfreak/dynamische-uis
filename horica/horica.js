questioning = "true"

const beschikbaar = ["fris", "wijn", "bier"];
const bestelt = [];

while (questioning == "true") {
    vraag = prompt("Wat wilt u bestellen?");
    vraag = vraag.toLowerCase()

    if (beschikbaar.includes(vraag)) {
        aantal = prompt("hoeveel glazen " + vraag + " wilt u hebben?");

        if (bestelt[vraag] == undefined) {
            bestelt[vraag] = aantal;
        } else {
            bestelt[vraag] += aantal;
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

