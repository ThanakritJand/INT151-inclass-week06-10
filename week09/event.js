// const okbtn = document.querySelector('button')
// okbtn.addEventListener('click' , (event) => {
//     console.log(`event.target: ${event.target}`);
//     console.log(`event.target: ${event.currentTarget}`);
//     console.log('button was clicked');
// } , 
// true
// )

// const divElement = document.querySelector('div')
// divElement.addEventListener('click' , (event) => {
//     console.log(`event.target: ${event.target}`);
//     console.log(`event.target: ${event.currentTarget}`);
//     console.log('div was clicked');
// } , true)

// const bodyElement = document.querySelector("body");
// bodyElement.addEventListener("click", (e) => {
//     console.log(`event.target: ${e.target}`);
//     console.log(`event.target: ${e.currentTarget}`);
//     console.log("body element was clicked!")
// }, true);
const submitButton = document.querySelector("input[type='submit']")
submitButton.addEventListener('click' , (e) => {
    e.preventDefault()

    const inputElement = document.querySelectorAll('input')
    inputElement.forEach((input) => console.log(input.getAttribute("type")))     
})