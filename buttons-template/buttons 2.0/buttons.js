function buttonFunction(buttonNumber) {
    for (i = 1; i <= 3; i++) {
        document.getElementById("btn"+i).style.backgroundColor="#04FF00";
        document.getElementById("btn"+i).style.color="#0023FF";
        document.getElementById("btn"+i).disabled = false;
    }

    document.getElementById("imgid").src="images/"+buttonNumber+".jpg"
    document.getElementById("btn"+buttonNumber).style.backgroundColor="#FF0000";
    document.getElementById("btn"+buttonNumber).style.color="#ffbr00";
    document.getElementById("btn"+buttonNumber).disabled = true;    
}