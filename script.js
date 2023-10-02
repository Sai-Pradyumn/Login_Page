const wrapper = document.querySelector(".wrapper"); 
const loginLink = document.querySelector(".login-link"); 
const registerLink = document.querySelector(".register-link"); 
const btnPopup = document.querySelector(".login-btn"); 
const iconClose = document.querySelector(".icon-close"); 
const lock = document.querySelector(".lock");
const password = document.querySelector(".pass");
// const mail = document.querySelector(".mail");
// const check = document.querySelector(".check");


// mail.value = '';
// check.value = '';

registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});

lock.addEventListener('click',() =>{
    if (password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
});