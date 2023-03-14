var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

var position = 80;
var horizontal = 0
var vertical = 0

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");

    } else if (e.keyCode == '38' || e.keyCode == '87') {  // up arrow or w
        if (horizontal == 0) {
            horizontal = window.innerHeight - 80
        } else {
            horizontal = horizontal - 5;
        }
        image.style.transform = "rotate(0deg)"

    } else if (e.keyCode == '40' || e.keyCode == '83') { // down arrow or s
        if (horizontal == window.innerHeight - 80) {
            horizontal = 0
        } else {
            horizontal = horizontal + 5;
        }
        image.style.transform = "rotate(180deg)"

    } else if (e.keyCode == '37' || e.keyCode == '65') { // left arrow or a
        if (vertical == 0) {
            vertical = window.innerWidth - 80
        } else {
            vertical = vertical - 5;
        }
        image.style.transform = "rotate(-90deg)"

    } else if (e.keyCode == '39' || e.keyCode == '68') {   // right arrow or d
        if (vertical == window.innerWidth - 80) {
            vertical = 0
        } else {
            vertical = vertical + 5;
        }
        image.style.transform = "rotate(90deg)"
    }

    image.style.marginTop = horizontal + "px";
    image.style.marginLeft = vertical + "px";

    if (e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 40 || e.keyCode == 83 || e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 39 || e.keyCode == 68) {
        document.getElementById("image").style.backgroundPosition =  `-${position}px 0px`; 
        if (position < 668) {
            position = position + 84;
        } else {
            position = 80;
        }
    }
}