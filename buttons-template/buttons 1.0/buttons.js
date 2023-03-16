function buttonFunction(button) {    
    document.getElementById("imgId").src="images/"+button.id+".jpg"
    btnName = parseInt(button.innerHTML)
    button.innerHTML = btnName + 1
    document.getElementById("bgImgId").style.backgroundImage = "url('images/bg"+button.id+".jpg')"
}