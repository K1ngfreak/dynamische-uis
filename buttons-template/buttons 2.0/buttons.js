function buttonFunction(button) {
    for (i = 1; i <= 3; i++) {
        document.getElementById(i).style.backgroundColor="#04FF00";
        document.getElementById(i).style.color="#0023FF";
        document.getElementById(i).disabled = false;
    }

    document.getElementById("imgId").src="images/"+button.id+".jpg";
    document.getElementById("container").style.backgroundImage = "url('images/bg"+button.id+".jpg')";
    document.getElementById(button.id).style.backgroundColor="#FF0000";
    document.getElementById(button.id).style.color="#ffbr00";
    document.getElementById(button.id).disabled = true;
    button.innerHTML = parseInt(button.innerHTML) + 1;
}