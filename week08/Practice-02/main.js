const buttons = document.getElementsByTagName("button")
const boxed = document.getElementById("box")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    //write code here....
    if(button.id === "add"){
      boxed.style.border = "5px solid black";
    }

    else if(button.id === "remove"){
      boxed.style.border = "none";
    }

    else if(button.id === "toggle"){
      if(boxed.style.border === "5px solid black"){
        boxed.style.border = "none";
    }

      else if(boxed.style.border === "none"){
        boxed.style.border = "5px solid black";
    }
    }
  })
})
 