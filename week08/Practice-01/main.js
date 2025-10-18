const buttons = document.getElementsByTagName("button")
const boxed = document.getElementById("box")
Array.from(buttons).forEach(button => {
    button.addEventListener("click" , () => {
        const color = button.dataset.color
        boxed.style.backgroundColor = color
        boxed.textContent = color.toUpperCase()
        boxed.style.color = "white"
        boxed.style.fontSize = "30px"
    })
})