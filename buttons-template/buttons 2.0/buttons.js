function buttonFunction(buttonNumber) {
    document.getElementById("reset").style.backgroundColor= '#04FF00';
    document.getElementById("btn1").style.backgroundColor= '#04FF00';
    document.getElementById("btn2").style.backgroundColor= '#04FF00';
    document.getElementById("btn3").style.backgroundColor= '#04FF00';

    document.getElementById("reset").style.color= '#0023FF';
    document.getElementById("btn1").style.color= '#0023FF';
    document.getElementById("btn2").style.color= '#0023FF';
    document.getElementById("btn3").style.color= '#0023FF';

    document.getElementById("reset").disabled = false;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;

    if (buttonNumber == 0) {
        document.getElementById("imgid").src="images/0.jpg";
        document.getElementById("reset").style.backgroundColor= '#FF0000';
        document.getElementById("reset").style.color= '#ffbf00';
        document.getElementById("reset").disabled = true;

    } else if (buttonNumber == 1) {
        document.getElementById("imgid").src="images/1.jpg";
        document.getElementById("btn1").style.backgroundColor= '#FF0000';
        document.getElementById("btn1").style.color= '#ffbf00';
        document.getElementById("btn1").disabled = true;

    } else if (buttonNumber == 2) {
        document.getElementById("imgid").src="images/2.jpg";
        document.getElementById("btn2").style.backgroundColor= '#FF0000';
        document.getElementById("btn2").style.color= '#ffbf00';
        document.getElementById("btn2").disabled = true;

    } else if (buttonNumber == 3) {
        document.getElementById("imgid").src="images/3.jpg";
        document.getElementById("btn3").style.backgroundColor= '#FF0000';
        document.getElementById("btn3").style.color= '#ffbf00';
        document.getElementById("btn3").disabled = true;
    }
}