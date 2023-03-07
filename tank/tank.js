var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38' || e.keyCode == '87') {  // up arrow or w
        console.log("Up");
    } else if (e.keyCode == '40' || e.keyCode == '83') { // down arrow or s
        console.log("down");
    } else if (e.keyCode == '37' || e.keyCode == '65') { // left arrow or a
    	console.log("left");
    } else if (e.keyCode == '39' || e.keyCode == '68') {   // right arrow or d
    	console.log("right");
    	image.style.backgroundPosition = `164px 0px`; // check goed de rupsband
    }
}