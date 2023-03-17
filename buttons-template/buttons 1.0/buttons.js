function buttonFunction(button) {    
    document.getElementById("imgId").src="images/"+button.id+".jpg"
    button.innerHTML = parseInt(button.innerHTML) + 1
    document.getElementById("container").style.backgroundImage = "url('images/bg"+button.id+".jpg')"
}