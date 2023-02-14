function bonnetje(bestelling){
    document.write()
    if (bestelling == "bier"){
        document.write("    1,25")
        finalprice = finalprice + 1,25 * total.bier;
        console.log(finalprice)
    }
}

questioning = "true"

finalprice = 0

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

console.log(total)

bestelt.forEach(bonnetje);
