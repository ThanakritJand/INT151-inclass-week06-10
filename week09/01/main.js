const name = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const getButton = document.getElementById('submit')
const err_msg = document.querySelector('p')
getButton.addEventListener('click' , (e) => {
    e.preventDefault()
    if(name.value === "" || email.value === "" || password.value === "" || confirm_password.value === ""){
        err_msg.textContent = "miss some value, please try again!"
        err_msg.style.color = 'red'
    }else if(password.value !== confirm_password.value){
        err_msg.textContent = "password and confirm do not match, check again"
        err_msg.style.color = 'red'
    }else{
        err_msg.textContent = "your data is completed"
        err_msg.style.color = 'green'
    }
} , true)