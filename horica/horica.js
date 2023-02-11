questioning = "true"

const bestelt = []

while (questioning == "true") {
    vraag = prompt("Wat wilt u bestellen?");

    if (vraag == "fris" || vraag == "Fris" || vraag == "bier" || vraag == "Bier" || vraag == "wijn" || vraag == "Wijn") {
        aantal = prompt("hoeveel glazen " + vraag + " wilt u hebben?");
        bestelt.push(vraag, aantal);
        console.log(bestelt);
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

