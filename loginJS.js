const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
//const btnPopup= document.querySelector('.boton-login-popup');//
//const IconClose= document.querySelector('.icon-close'); //

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

registerLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

//btnPopup.addEventListener('click', ()=>{
    //wrapper.classList.add('active-popup');
//});

//btnPopup.addEventListener('click', ()=>{//
    //wrapper.classList.remove('active-popup');
//});