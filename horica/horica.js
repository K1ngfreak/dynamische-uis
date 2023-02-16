const beschikbaar = ["fris", "wijn", "bier"];
const bestelt = [];
const total = [];

function bonnetje(bestelling) {
    finalprice = 0
    if (bestelling == "bier") {
        document.write(total.bier + " " + bestelling + " --- 2,90" + "<br>")
        finalprice = 2.90 * total.bier;

    } else if (bestelling == "wijn") {
        document.write(total.wijn + " " + bestelling + " --- 4,50" + "<br>")
        finalprice = 4.50 * total.wijn;

    } else if (bestelling == "fris") {
        document.write(total.fris + " " + bestelling + " --- 2,80" + "<br>")
        finalprice = 2.80 * total.fris
    }
    return finalprice
}

questioning = "true"

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

bon = 0

for (i = 0; i < bestelt.length; i++) {
    bon = bon + bonnetje(bestelt[i])
}

document.write("<br>" + "--------------------" + "<br>")
document.write("totaal: &#8364;" + bon.toFixed(2))