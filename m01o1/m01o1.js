let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");

// Berekenen hier het aantal verdiepingen
verdiepingen = Math.ceil((gewenste_aantal_autos - 80)/120);

console.log("berekening: " + verdiepingen);

if (verdiepingen < 1){
    let antwoord = "Ik heb alleen de begane grond nodig";
    document.getElementById("antwoord").innerText = antwoord;
    alert(antwoord)
} else {
    let antwoord = "Ik heb de begane grond en " + verdiepingen  + " verdiepingen nodig";
    document.getElementById("antwoord").innerText = antwoord;
    alert(antwoord)
}

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik "+verdiepingen+" verdiepingen nodig.")
