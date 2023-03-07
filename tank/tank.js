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
        horizontal = horizontal - 5;
        image.style.marginTop = horizontal + "px";
    } else if (e.keyCode == '40' || e.keyCode == '83') { // down arrow or s
        horizontal = horizontal + 5;
        image.style.marginTop = horizontal + "px";
    } else if (e.keyCode == '37' || e.keyCode == '65') { // left arrow or a
        vertical = vertical - 5;
        image.style.marginLeft = vertical + "px";
    } else if (e.keyCode == '39' || e.keyCode == '68') {   // right arrow or d
        vertical = vertical + 5;
        image.style.marginLeft = vertical + "px";
    }
    
    if (e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 40 || e.keyCode == 83 || e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 39 || e.keyCode == 68) {
        document.getElementById("image").style.backgroundPosition = 
        `-${position}px 0px`; 
        if (position < 668)
        { position = position + 84;}
        else
        { position = 80; }
    }
   
}

