const keyInput = document.getElementById("keyInput")
const display = document.getElementById('keyLog')
keyInput.addEventListener('keydown' , function(e){
    const newP = document.createElement('p')
    if(e.key === "Enter"){
        newP.textContent = "You press: Enter"
        newP.style.color = 'blue'
    }else{
        newP.textContent = `You press: ${e.key}`
    }
    display.appendChild(newP)
})